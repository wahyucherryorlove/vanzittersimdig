"use client";

import Link from "next/link";
import { useState } from "react";

import { DaftarUjianModal } from "./DaftarUjianModal";

import type { ListDaftarUjian } from "@types/listDaftarUjian";

import CalendarIcons from "@icons/calendar.svg";
import IdCardTeacherIcons from "@icons/id-card-clip-alt.svg";
import TimerIcons from "@icons/timer.svg";

export function DaftarUjian({
  id = 0,
  subjects = "",
  timer = 0,
  timetable = "",
  teacher = "",
  status = "",
}: ListDaftarUjian) {
  const [isOpen, setIsOpen] = useState(false);
  const [isToken, setIsToken] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        className={`${
          status !== "berlangsung" ? "cursor-not-allowed" : "cursor-pointer"
        } relative w-full rounded-md bg-neutral-200 py-6 hover:bg-neutral-300`}
        key={id}
        onClick={openModal}
      >
        <div
          className={`${
            status === "belum-mulai" ? "bg-yellow-500" : "bg-green-600"
          } absolute w-[10px] h-full top-0 rounded-tl-md rounded-bl-md`}
        />
        <ul className="ml-[30px]">
          <li className="flex gap-x-4 items-center">
            <h2 className="text-2xl font-semibold">{subjects}</h2>
            <span
              className={`${
                status === "belum-mulai"
                  ? "bg-yellow-500 hover:bg-yellow-400"
                  : "bg-green-600 hover:bg-green-700 text-neutral-50"
              }  text-xs px-2 py-1 rounded-md selection:hidden cursor-default`}
            >
              {status === "belum-mulai" ? "Belum Mulai" : "Berlangsung"}
            </span>
          </li>
          <li>
            <ul className="mt-2 flex items-center">
              <li className="flex items-center gap-x-2">
                <TimerIcons className="w-4 h-4 fill-neutral-700" />
                <h6 className="text-base font-normal text-neutral-700">
                  08.00 - 09.00 WITA
                </h6>
              </li>
              <li className="mx-4">
                <span className="w-1 h-1 bg-neutral-600 block rounded-full" />
              </li>

              <li className="flex items-center gap-x-2">
                <CalendarIcons className="w-4 h-4 fill-neutral-700" />
                <h6 className="text-base font-normal text-neutral-700">
                  {timetable}
                </h6>
              </li>
              <li className="mx-4">
                <span className="w-1 h-1 bg-neutral-600 block rounded-full" />
              </li>
              <li className="flex items-center gap-x-2">
                <IdCardTeacherIcons className="w-4 h-4 fill-neutral-700" />
                <h6 className="text-base font-normal text-neutral-700">
                  {teacher}
                </h6>
              </li>
            </ul>
          </li>
        </ul>
      </button>

      {status === "berlangsung" && (
        <DaftarUjianModal
          key={id}
          id={id}
          subjects={subjects}
          timer={timer}
          timetable={timetable}
          teacher={teacher}
          status={status}
          isOpen={isOpen}
          isToken={isToken}
          setIsOpen={setIsOpen}
          setIsToken={setIsToken}
        />
      )}
    </>
  );
}
