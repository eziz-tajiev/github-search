"use server";
import { cookies } from "next/headers";

export async function cookieGet(key: "theme") {
  const cookie = (await cookies()).get(key);
  return cookie?.value;
}

export async function cookieSet(key: string, value: string) {
  (await cookies()).set(key, value);
}
