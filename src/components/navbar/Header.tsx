import Image from "next/image";
import { Button, Menu, MenuButton } from "@headlessui/react";

import { UserModal } from "./User";

export function Header() {
  return (
    <header className="w-full h-[70px] fixed top-0 bg-[#0C1844] flex justify-end px-10">
      <Menu>
        <MenuButton className="flex items-center gap-x-4">
          <div className="relative w-10 h-10 rounded-full">
            <Image
              src={`/images/user/jumaing.jpg`}
              alt="Jumaing"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col text-neutral-50 text-start">
            <h5 className="text-base font-semibold">Hello World</h5>
            <h6 className="-mt-0.5 text-sm font-normal">Peserta</h6>
          </div>
        </MenuButton>

        <UserModal />
      </Menu>
    </header>
  );
}
