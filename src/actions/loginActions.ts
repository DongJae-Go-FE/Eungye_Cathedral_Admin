"use server";

import { signIn, signOut } from "@/auth";

import { redirect } from "next/navigation";

export async function doLogout() {
  await signOut({ redirectTo: "/login" });
}

export async function doCredentialLogin(formData: FormData) {
  let shouldRedirect = false;
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    shouldRedirect = true;
    return response;
  } catch (error) {
    console.error(error);
  }
  if (shouldRedirect) redirect("/main");
}
