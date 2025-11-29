import React from "react";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop"
          alt="Background"
          fill
          className="object-cover blur-md scale-110 opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-5xl h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row m-4">
        {/* Left Side - Image */}
        <div className="relative hidden md:block w-1/2 h-full">
          <Image
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop"
            alt="Auth Image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-12 left-8 text-white z-20">
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              First Class
              <br />
              Off-Campus
              <br />
              Housing
            </h1>
            <p className="text-lg opacity-90 mb-8 font-medium">
              Safe, Affordable student housing without stress.
            </p>
            <div>
              <button className="bg-[#00E32C] hover:bg-[#00c927] text-white font-bold py-3 px-8 rounded-md transition-colors text-lg shadow-[0_0_20px_rgba(0,227,44,0.4)]">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 h-full overflow-y-auto bg-white p-8 md:p-16 flex flex-col justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
