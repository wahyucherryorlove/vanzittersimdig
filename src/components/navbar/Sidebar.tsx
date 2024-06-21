import Image from "next/image";
import Link from "next/link";

import LogoImage from "@images/logo.png";
import BoxesIcons from "@icons/boxes.svg";
import DashboardIcons from "@icons/dashboard.svg";

export function Sidebar() {
  return (
    <aside className="w-[270px] fixed top-0 h-full bg-neutral-50 px-4">
      <figure className="flex gap-x-3 items-center mt-10">
        <div className="relative w-14 h-14">
          <Image
            src="/images/user/jumaing.jpg"
            alt="Hello World"
            className="object-cover"
            fill
          />
        </div>
        <figcaption>
          <h4 className="text-base font-semibold">Wahyudi Umar</h4>
          <div className="flex gap-x-1 items-center mt-0.5">
            <span className="w-3 h-3 bg-green-600 rounded-full" />
            <span className="text-sm block">Online</span>
          </div>
        </figcaption>
      </figure>

      <ul className="mt-10 flex flex-col gap-y-2">
        <li>
          <Link
            href=""
            className="flex gap-x-3 w-full p-4 rounded-md items-center bg-[#2A629A] font-semibold text-neutral-50"
          >
            <DashboardIcons className="w-5 h-5 fill-neutral-50" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="flex gap-x-3 w-full p-4 rounded-md font-normal items-center text-neutral-950 hover:bg-blue-200 duration-150"
          >
            <BoxesIcons className="w-5 h-5 fill-neutral-950" />
            Daftar Ujian
          </Link>
        </li>
      </ul>
    </aside>
  );
}
