'use client';

import React, { Component, ReactNode } from 'react';
import { BiErrorCircle } from 'react-icons/bi';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

// error boundary component to catch runtime errors in the component tree
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  // update state when an error is encountered
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch() {
    // log error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // TODO: send to error tracking service (e.g., Sentry)
    }
  }

  // render fallback UI if an error occurred
  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
              <BiErrorCircle className="text-6xl mb-4 mx-auto text-gray-900" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Something went wrong
              </h1>
              <p className="text-gray-600 mb-6">
                We apologize for the inconvenience. Please try refreshing the page.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-primary hover:bg-primary/90 text-gray-900 font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
