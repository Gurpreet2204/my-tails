"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const sendRequest = async () => {
    if (userName && password !== null) {
      try {
        const response = await axios.post("dummyResponse", {
          userName,
          password,
        });
        const data = response.data;
        console.log(data);
        redirect("/dashboard");
      } catch (e) {
        router.push("/dashboard");
        console.log(e);
      }
    }
    else{
        alert("username or password can't be")
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="felx felx-col w-full md:w-[380px] p-6 bg-white shadow-md items-center border rounded-md">
        <div>
          <p className="flex justify-center text-xl mb-6">Sign in</p>
        </div>
        <div className="flex flex-col gap-4">
          <Input
            className="rounded-md shadow-sm"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <Input
            className="rounded-md shadow-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center w-full mt-5">
          <Button
            onClick={sendRequest}
            className="w-full text-md  font-semibold"
            size={"lg"}
          >
            Sign in
          </Button>
        </div>
        <p className="text-gray-600 text-sm mt-4 text-center">
          {`don't have an account?`}{" "}
          <Link className="text-blue-700 hover:underline" href={"/signup"}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
