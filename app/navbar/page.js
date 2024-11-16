import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="h-[50px] w-[100%] bg-sky-400 fixed flex items-center gap-20">
      <p>
        <Link href="/service">Service</Link>
      </p>
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>
        <Link href="/feacher">Feacher</Link>
      </p>
    </div>
  );
};

export default NavBar;
