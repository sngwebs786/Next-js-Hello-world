"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <>
      <Navbar />
      <h1>Hello World</h1>
      <p>This is Home Page</p>
      <Link href={"/about"}>Go to About</Link>
      <br />
      <br />
      <button
        onClick={() => {
          router.push("/about");
        }}
      >
        About
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        About
      </button>
    </>
  );
}
