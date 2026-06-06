"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
// গুগল এবং গিটহাব আইকনসহ সব আইকন একসাথে ইমপোর্ট করা হয়েছে
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; // সুন্দর কালারফুল গুগল আইকনের জন্য

// আপনার প্রজেক্টের ইমেজের পাথ অনুযায়ী এগুলো পরিবর্তন করে নেবেন
import swimmingImg from "../../../../assets/swimming.png";
import classImg from "../../../../assets/class.png";
import playgroundImg from "../../../../assets/playground.png";
import { authClient } from "@/lib/auth-client";

const Right_sideBar = () => {
  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    console.log(data);
  };

  const handleGithubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });

    console.log(data);
  };
  return (
    <div className="space-y-6">
      {/* ================= ১. Login With সেকশন ================= */}
      <div className="w-full max-w-[282px] font-sans">
        <h3 className="text-lg font-bold text-[#403F3F] mb-3 text-left">
          Login With
        </h3>

        <div className="flex flex-col gap-2">
          {/* Google Button */}
          <button
            onClick={handleGoogleSignin}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-white border border-blue-500 rounded-lg text-blue-600 font-medium hover:bg-blue-50 transition-colors text-sm"
          >
            <FcGoogle className="text-lg" />
            <span>Login with Google</span>
          </button>

          {/* GitHub Button */}
          <button
            onClick={handleGithubSignin}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-white border border-gray-850 rounded-lg text-gray-900 font-medium hover:bg-gray-50 transition-colors text-sm"
          >
            <FaGithub className="text-lg" />
            <span>Login with Github</span>
          </button>
        </div>
      </div>

      {/* ================= ২. Find Us On সেকশন ================= */}
      <div>
        <h3 className="text-lg font-bold text-[#403F3F] mb-4">Find Us On</h3>

        <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white">
          {/* ফেসবুক */}
          <Link
            href="https://facebook.com"
            target="_blank"
            className="flex items-center gap-3 px-4 py-4 border-b border-gray-200 hover:bg-gray-50 transition text-[#706F70] font-medium"
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-blue-600">
              <FaFacebookF />
            </div>
            <span>Facebook</span>
          </Link>

          {/* টুইটার */}
          <Link
            href="https://twitter.com"
            target="_blank"
            className="flex items-center gap-3 px-4 py-4 border-b border-gray-200 hover:bg-gray-50 transition text-[#706F70] font-medium"
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sky-400">
              <FaTwitter />
            </div>
            <span>Twitter</span>
          </Link>

          {/* ইনস্টাগ্রাম */}
          <Link
            href="https://instagram.com"
            target="_blank"
            className="flex items-center gap-3 px-4 py-4 hover:bg-gray-50 transition text-[#706F70] font-medium"
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-pink-500">
              <FaInstagram />
            </div>
            <span>Instagram</span>
          </Link>
        </div>
      </div>

      {/* ================= ৩. Q-Zone সেকশন ================= */}
      <div className="bg-[#F3F3F3] p-4 rounded-lg">
        <h3 className="text-lg font-bold text-[#403F3F] mb-4">Q-Zone</h3>

        <div className="space-y-5">
          {/* সুইমিং কার্ড */}
          <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
            <Image
              src={swimmingImg}
              alt="Swimming"
              className="w-full h-auto rounded-md object-cover"
            />
            <p className="text-center font-semibold text-[#403F3F] mt-3">
              Swimming
            </p>
          </div>

          {/* ক্লাস কার্ড */}
          <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
            <Image
              src={classImg}
              alt="Class"
              className="w-full h-auto rounded-md object-cover"
            />
            <p className="text-center font-semibold text-[#403F3F] mt-3">
              Class
            </p>
          </div>

          {/* প্লে-গ্রাউন্ড কার্ড */}
          <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
            <Image
              src={playgroundImg}
              alt="Play Ground"
              className="w-full h-auto rounded-md object-cover"
            />
            <p className="text-center font-semibold text-[#403F3F] mt-3">
              Play Ground
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right_sideBar;
