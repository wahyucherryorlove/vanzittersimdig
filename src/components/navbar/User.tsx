import Link from "next/link";
import { MenuItem, MenuItems } from "@headlessui/react";

export function UserModal() {
  return (
    <MenuItems
      anchor="bottom start"
      className="user-modal absolute flex flex-col bg-neutral-50 w-44 -mt-0.5 p-4 rounded-md gap-y-1 shadow-lg"
    >
      <MenuItem>
        <Link href="" className="text-sm hover:text-blue-900">
          Settings
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="" className="text-sm hover:text-blue-900">
          Logout
        </Link>
      </MenuItem>
    </MenuItems>
  );
}
