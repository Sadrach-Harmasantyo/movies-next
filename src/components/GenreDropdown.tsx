import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import React from "react";

export default function GenreDropdown() {
  const items = [
    {
      id: 1,
      name: "Action",
    },
    {
      id: 2,
      name: "Comedy",
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-slate-50 font-medium text-sm">
        Genre <ChevronDown className="ml-1" size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((item) => (
          <DropdownMenuItem key={item?.id}>
            <Link href={`/genre/${item?.id}?genre=${item?.name}`}>{item?.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
