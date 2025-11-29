"use client";

import {useState, useEffect} from 'react';
import Product from '../homeComponents/product';
import Tag from '../homeComponents/tag';
import { getFeaturedSlotMachines } from '@/services/slotMachineByFeatured';
import { SlotInventory } from '@/types/slotMachines';


function FeaturedSlots() {
    const [featuredSlots, setFeaturedSlots] = useState<SlotInventory[]>([]);
    //  the important one is the top one, the others are recommended
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
        try {
            setLoading(true);
            const data = await getFeaturedSlotMachines();
            console.log("Fetched featured slots:", data);
            // the api call returns an array of SlotInventory
            // must wait for it to finish
            setFeaturedSlots(data);
        } catch (err) {
            console.error(err);
            setError("Failed to load featured slots.");
        } finally {
            setLoading(false);
        }
        })();
    }, []); // do this on mount only, don't want to spam the api

    if (loading) {
        // just for something in case this does bad
        // if you want customize it later, for now just a placeholder
        return <div>Loading featured slots...</div>;
    }

    if (error) {
        console.error(error);
        return <div className="text-red-500"></div>;
    }

    if (featuredSlots.length === 0) {
        // will configure this later, because this could be 
        // an actual instance where there are no featured slots
        return <div>No featured slots available.</div>;
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredSlots.map((slot) => {
                const displayPrice =
                slot.is_on_sale && slot.sale_price != null
                    ? slot.sale_price.toFixed(2)
                    : slot.price.toFixed(2);

                return (
                <Product
                    key={slot.id}
                    tag={
                    slot.is_on_sale ? (
                        <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                        On Sale
                        </span>
                    ) : (
                        featuredSlots.indexOf(slot) === 0 ? (
                           <Tag
                                title="Best Seller"
                                className="w-fit px-3 py-1 rounded-2xl flex flex-nowrap items-center gap-3 bg-secondary shadow-lg/20"
                            ></Tag>
                        ) : featuredSlots.indexOf(slot) === 1 ? (
                            <Tag
                                title="New Arrival"
                                className="w-fit px-3 py-1 rounded-2xl flex flex-nowrap items-center gap-3 bg-primary shadow-lg/20"
                            ></Tag>
                        ) : (
                            <Tag
                                title="Hot Deal"
                                className="w-fit px-3 py-1 rounded-2xl flex flex-nowrap items-center gap-3 bg-secondary shadow-lg/20"
                            ></Tag>
                        )
                    )
                    }
                    image={slot.image ?? undefined}
                    name={slot.title}
                    condition={slot.condition ?? "N/A"}
                    price={displayPrice}
                />
                );
            })}
        </div>
    );
} 

export default FeaturedSlots;