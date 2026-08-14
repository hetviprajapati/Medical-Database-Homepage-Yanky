import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <section className="mt-4">
      <h1 className="text-[48px] font-bold leading-[1.05] tracking-[-2px] text-navy sm:text-[64px]">Show Your Beats.</h1>

      <p className="max-w-300 text-[18px] leading-7 text-gray-dark font-medium">
        Open peer-reviewed database for True RMSSD — standardized HRV metrics from consumer devices, validated with open protocols.
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <span aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-muted">
            <Search className="h-5 w-5" />
          </span>

          <input
            type="text"
            placeholder="Search a device [Polar H10, Oura, Whoop...]"
            className="h-10 w-full rounded-full border border-border bg-white px-12 text-[14px] text-muted outline-none placeholder:text-muted"
          />
        </div>

        <button
          type="button"
          className="h-10 bg-blue px-3 text-[18px] font-bold text-white/90 shadow-sm rounded-lg sm:min-w-42 cursor-pointer"
        >
          Search
        </button>
      </div>
    </section>
  );
}
