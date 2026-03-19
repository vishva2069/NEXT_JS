'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div>
      {/* <h1 className="text-white-900 p-7"> To a discript of data to like a key words styling performane but configuration</h1>
      <button className="bg-blue-700 text-white px-4 py-2 rounded"><a href=""> Login</a>
      </button> */}

    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={"#"}>
        <MenuItem setActive={setActive} active={active} item="Home">
           test
        </MenuItem>
        </Link>
      </Menu>
    </div>
    </div>
  )
}