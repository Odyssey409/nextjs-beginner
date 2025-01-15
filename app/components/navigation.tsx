"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  console.log(path);
  return (
    <nav>
      <Link href="/">Home</Link> {path === "/" ? "🏠" : null}
      <Link href="/about-us">About Us</Link>{" "}
      {path === "/about-us" ? "🔥" : null}
      <Link href="/tomato">Tomato</Link> {path === "/tomato" ? "🍅" : null}
    </nav>
  );
}
