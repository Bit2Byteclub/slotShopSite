import Image from "next/image";
import BackgroundBox from "./components/UI/BackgroundBox";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#B8E5DF] font-sans dark:bg-black">
      <div className="flex gap-6">
        <BackgroundBox height={400} width={400} content={<div>Send us a Message <p>Fill out the form below and we'll get back to you within 24 hours. We promise - a real person will respond!</p></div>}/>
        <div className="flex flex-col gap-6">
         <BackgroundBox height={200} width={200} content={<>Visit Our Showroom</>}/>
         <BackgroundBox height={200} width={200} content={<>Business Hours</>}/>
         <BackgroundBox height={200} width={200} content={<>Business Hours</>}/>
        </div>
      </div>
    </div>
  );
}
