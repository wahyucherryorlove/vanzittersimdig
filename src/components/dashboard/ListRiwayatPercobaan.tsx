export function ListRiwayatPercobaan() {
  return (
    <section className="mt-4 p-4 bg-neutral-200 rounded-md">
      <h4 className="font-bold text-lg text-neutral-950">Riwayat Percobaan</h4>

      <ul className="flex flex-col gap-y-4 mt-3">
        <li>
          <button className="flex justify-between items-center bg-neutral-300 px-4 py-2 rounded-md text-start w-full hover:bg-neutral-800 hover:text-neutral-100 duration-150">
            <div>
              <h5 className="text-sm font-semibold mb-0.5">Bahasa Indonesia</h5>

              <div className="flex items-center gap-x-2">
                <h6 className="text-xs">14 Februari 09.15</h6>
                <span className="w-1 h-1 rounded-full bg-neutral-500 block" />
                <h6 className="text-xs">Lulus</h6>
              </div>
            </div>
            <div className="text-sm flex gap-x-1 font-bold">
              <h5 className="text-red-500">65</h5>/<h5>100</h5>
            </div>
          </button>
        </li>
      </ul>
    </section>
  );
}
