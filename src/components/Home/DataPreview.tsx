import { devices } from '@/app/data/rmssd';

export default function DataPreview() {
  return (
    <section className="mt-5 pb-8">
      <div className="mb-3 flex flex-wrap items-baseline gap-3">
        <h2 className="text-[28px] font-bold tracking-[-1px] text-navy">Data Preview</h2>

        <span className="text-[14px] text-gray-dark">Latest validated entries&nbsp; • &nbsp;Updated hourly</span>
      </div>

      <div className="overflow-hidden rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full min-w-212.5 border-collapse text-left">
            <thead>
              <tr className="bg-navy-light text-[16px] font-bold text-navy">
                <th className="px-4 py-3">Device</th>
                <th className="px-4 py-3">Firmware</th>
                <th className="px-4 py-3">True RMSSD</th>
                <th className="px-4 py-3">Validation Status</th>
                <th className="px-4 py-3">Test Protocol</th>
                <th className="px-4 py-3">Last Updated</th>
              </tr>
            </thead>

            <tbody>
              {devices.map((device, index) => (
                <tr key={device.device} className={index % 2 === 0 ? 'bg-blue-light' : 'bg-blue-dark'}>
                  <td className="px-4 py-2.5 font-bold text-brown-dark">{device.device}</td>
                  <td className="px-4 py-2.5 font-medium text-brown-dark">{device.firmware}</td>
                  <td className="px-4 py-2.5 font-medium text-brown-dark">{device.rmssd}</td>
                  <td className="px-4 py-2.5">
                    <span
                      className={
                        device.status === 'Verified'
                          ? 'inline-flex items-center gap-1.5 rounded-md bg-success px-2 py-1 text-sm font-semibold text-white'
                          : 'inline-flex items-center rounded-md bg-warning px-2 py-1 text-sm font-semibold text-brown-dark'
                      }
                    >
                      {device.status === 'Verified' && (
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-success-light text-[11px] font-bold text-success">
                          ✓
                        </span>
                      )}

                      {device.status}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 font-medium text-brown-dark">{device.protocol}</td>
                  <td className="px-4 py-2.5 font-medium text-brown-dark">{device.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
