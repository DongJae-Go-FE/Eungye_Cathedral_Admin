"use server";

import { signIn, signOut } from "@/auth";

export async function doLogout() {
  await signOut({ redirectTo: "/login" });
}

export async function doCredentialLogin(formData: FormData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    console.log(response, "로그인 응답");
    return response;
  } catch (error) {
    console.error(error);
  }
}
