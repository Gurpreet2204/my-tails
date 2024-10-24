"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const sendRequest = async () => {
    try {
      const response = await axios.post("dummyResponse", {
        userName,
        password,
        name
      });
      const data = response.data;
      console.log(data);
      redirect("/dashboard");
    } catch (e) {
      router.push("/dashboard");
      console.log(e);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col w-96 md:w-[380px] p-6 bg-white shadow-lg rounded-lg">
        <div className="mb-6">
          <p className="text-2xl font-bold text-center text-gray-700">Sign Up</p>
          <p className="text-sm text-center text-gray-500">Create your account</p>
        </div>

        <div className="flex flex-col gap-4">
          <Input
            className="rounded-md shadow-sm"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
          <Input
            className="rounded-md shadow-sm"
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <Input
            className="rounded-md shadow-sm"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="flex justify-center w-full mt-6">
          <Button
            onClick={sendRequest}
            className="w-full py-3 text-md font-semibold rounded-md  text-white hover:bg-gray-8 00 transition-all"
            size={"lg"}
          >
            Sign Up
          </Button>
        </div>

        <p className="text-gray-600 text-sm mt-4 text-center">
          already have an account?{" "}
          <Link className="text-blue-700 hover:underline" href={"/signin"}>
            Sign i  n
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
