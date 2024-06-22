import { Dispatch } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import type { SetStateAction } from "react";

import { ListRiwayatPercobaan } from "./ListRiwayatPercobaan";

import type { ListDaftarUjian } from "@types/listDaftarUjian";

import CloseIcons from "@icons/close.svg";

interface DaftarUjianTypes extends ListDaftarUjian {
  isOpen: boolean;
  isToken: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setIsToken: Dispatch<SetStateAction<string>>;
}

export function DaftarUjianModal({
  id = 0,
  subjects = "",
  timer = 0,
  isOpen,
  isToken,
  setIsOpen,
  setIsToken,
}: DaftarUjianTypes) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
      key={id}
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-neutral-800/50">
        <DialogPanel className="max-w-3xl border-transparent bg-white p-5 user-modal rounded-md relative">
          <div className="flex items-center justify-between border-b-2 pb-3">
            <DialogTitle className="font-bold text-xl">
              Konfirmasi Test
            </DialogTitle>
            <button type="button" onClick={closeModal}>
              <CloseIcons className="w-4 h-4 " />
            </button>
          </div>

          <main className="mt-4 overflow-y-auto max-h-[450px] pb-16 px-4">
            <Description className="flex flex-col mb-4 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              soluta obcaecati, nesciunt porro quae voluptates consequuntur
              minus voluptate in ratione...
              <button type="button" className="text-blue-700 w-max">
                Baca Selengkapnya
              </button>
            </Description>

            <div>
              <p className="text-sm">
                Apabila tidak memenuhi syarat kelulusan, silahkan meminta token
                baru kepada guru yang bersangkutan.
              </p>

              <section className="mt-4 p-4 bg-neutral-200 rounded-md">
                <h4 className="font-bold text-lg text-neutral-950">
                  Detail Ujian
                </h4>

                <ul className="mt-3 grid grid-cols-3 items-center">
                  <li>
                    <ul className="flex flex-col gap-y-3">
                      <li className="bg-transparent py-1.5 rounded-md">
                        <h6 className="text-sm">Nama Ujian</h6>
                      </li>
                      <li className="bg-transparent py-1.5 rounded-md">
                        <h6 className="text-sm">Nama Guru</h6>
                      </li>
                      <li className="bg-transparent py-1.5 rounded-md">
                        <h6 className="text-sm">Waktu Pengerjaan</h6>
                      </li>
                      <li className="bg-transparent py-1.5 rounded-md">
                        <h6 className="text-sm">Jumlah Soal</h6>
                      </li>
                    </ul>
                  </li>

                  <li className="col-span-2">
                    <ul className="flex flex-col gap-y-3">
                      <li className="bg-neutral-300 px-3 py-1.5 rounded-md">
                        <h6 className="text-sm text-neutral-950">
                          Pendidikan Kewarganegaraan
                        </h6>
                      </li>
                      <li className="bg-neutral-300 px-3 py-1.5 rounded-md">
                        <h6 className="text-sm text-neutral-950">
                          Wahyudi Umar
                        </h6>
                      </li>
                      <li className="bg-neutral-300 px-3 py-1.5 rounded-md">
                        <h6 className="text-sm text-neutral-950">90 Menit</h6>
                      </li>
                      <li className="bg-neutral-300 px-3 py-1.5 rounded-md">
                        <h6 className="text-sm text-neutral-950">40 Soal</h6>
                      </li>
                    </ul>
                  </li>
                </ul>
              </section>

              <ListRiwayatPercobaan />
            </div>
          </main>

          <section className="absolute bottom-0 w-full bg-neutral-800 inset-x-0 rounded-b-md py-4 px-4 flex gap-x-5 items-center">
            <input
              type="text"
              className="w-full py-2.5 rounded-md px-3 outline-none text-sm placeholder:text-neutral-600 bg-neutral-200 focus:bg-neutral-50 text-neutral-950"
              placeholder="Masukkan token ulangan anda disini"
              onChange={(e: any) => setIsToken(e.target.value)}
            />
            <button
              className={`${
                isToken === "wahyudiumar"
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              } bg-blue-800 hover:bg-blue-700 duration-150 text-neutral-50 w-1/5 rounded-md px-5 py-2.5 text-sm font-bold disabled:bg-neutral-600`}
              disabled={isToken !== "wahyudiumar" ? true : false}
            >
              Mulai Test
            </button>
          </section>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
