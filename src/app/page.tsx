import { Header } from "@components/navbar/Header";
import { Sidebar } from "@components/navbar/Sidebar";

import { DaftarUjian } from "@components/dashboard/DaftarUjian";

import { ListDaftarUjian } from "@temp/list-daftar-ujian";

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />

      <main className="mt-20 ml-[270px] mb-4">
        <section className="bg-neutral-50 py-14 mt-24 mx-6 px-8 rounded-md">
          <h1 className="text-4xl font-semibold">
            Selamat Datang, Wahyudi Umar
          </h1>
          <p className="font-base">
            Aplikasi Simulasi Digital Van Zitter Berbasis Website
          </p>
        </section>

        <section className="mx-6 py-8 bg-neutral-50 rounded-md px-8 mt-14 flex flex-col gap-y-4">
          {ListDaftarUjian.map(
            ({ id, subjects, timer, timetable, teacher, status }) => (
              <DaftarUjian
                id={id}
                key={id}
                subjects={subjects}
                timer={timer}
                timetable={timetable}
                teacher={teacher}
                status={status}
              />
            )
          )}
        </section>
      </main>
    </>
  );
}
