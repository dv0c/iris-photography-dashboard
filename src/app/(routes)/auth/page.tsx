"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useCallback } from "react";
import { BsGoogle } from "react-icons/bs";

const page = ({}) => {
  const handleClick = useCallback(() => {
    signIn("google");
  }, []);
  return (
    <div className="flex mx-auto max-w-3xl items-center justify-center w-full h-screen">
      <div className="border w-full h-full p-5 md:w-[500px] md:h-[300px] rounded-2xl bg-white shadow">
        <div className="flex items-center flex-col justify-center h-full pb-10">
          <h1 className="font-bold mb-5 text-xs">Continue to dashboard.</h1>
          <Button
            onClick={handleClick}
            variant={"outline"}
            className="gap-2 font-semibold"
          >
            <BsGoogle />
            Σύνδεση με Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
