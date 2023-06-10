import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <Link href={"/"}>Go to Home</Link> <br />
      <Link href={"/about/aboutme"}>Go to about me</Link>
    </>
  );
};

export default About;
