"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SignInFormSchema } from "@/schema";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

export default function SignInForm() {
  const [errorFromBackend, setErrorFromBackend] = useState("");
  const router = useRouter();
  const callbackUrl = "/web-application-security";
  const form = useForm({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const accessTokenLocal = localStorage.getItem("accessToken");
    if (accessTokenLocal) {
      router.push("/web-application-security");
    } else {
      router.push("/");
    }
  }, []);

  const onSubmit = async (values) => {
    const { email, password } = values;
    const response = await fetch("http://localhost:8000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    if (response.ok) {
      const {
        data: { accessToken, refreshToken },
      } = await response.json();
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      router.push(callbackUrl);
    } else {
      const { message } = await response.json();
      setErrorFromBackend(message);
      toast.error(message);
    }
  };

  return (
    <div className="grid w-screen h-screen place-content-center">
      <div className="flex flex-col gap-2 p-8 m-2 space-y-4 border rounded-md bg-slate-100 border-slate-300 w-96 ring-1">
        <div className="flex justify-center">
          <Image
            src={"railtel_logo.svg"}
            alt="RailTel"
            width={50}
            height={64}
            className="w-[50] h-16 rounded-full"
          />
        </div>
        <h1 className="text-2xl font-semibold">Log in to Dashboard</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="mail@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Password</FormLabel>
                    </div>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage>{errorFromBackend}</FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <Button
              className="w-full mt-6 hover:bg-primary-hover"
              type="submit"
            >
              Login
            </Button>
          </form>
        </Form>
        {/* <Button
          asChild
          variant={"link"}
          className="self-end px-0 pl-1 font-medium text-sky-600 w-min"
        >
          <Link href={"/auth/forgot-password"}>Forgot your password?</Link>
        </Button> */}
      </div>
    </div>
  );
}
