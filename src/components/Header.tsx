import Image from "next/image";
import Link from "next/link";
import React from "react";
import GenreDropdown from "./GenreDropdown";
import SearchInput from "./SearchInput";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between p-5 bg-mainColor">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={120} height={100} priority={true} className="cursor-pointer w-40 h-auto" />
      </Link>
      <div className="flex items-center space-x-2">
        <GenreDropdown />
        <SearchInput />
        <ModeToggle />
      </div>
    </div>
  );
}
