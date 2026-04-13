export default function AboutMeRight() {
  const highlights = [
    { bold: 'NSCC Programming student', rest: '— building real projects outside of class.' },
    { bold: 'Backend-focused', rest: '— systems, APIs, and the logic under the hood.' },
    { bold: 'Filmmaker on the side', rest: '— travel videos and short films.' },
    { bold: 'Looking for an internship', rest: '— open to any opportunity to contribute and grow.' },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full gap-8 text-center">

      <div className="flex flex-col gap-4">
        <p className="text-[18px] text-gray-500 leading-[1.75] max-w-md">
          Programming student at <span className="font-semibold text-gray-900">NSCC</span> with a <span className="font-semibold text-gray-900">backend focus</span> — I care most about the logic, the systems, and how things work under the hood. I started coding at <span className="font-semibold text-gray-900">22</span> and haven't stopped building since.
        </p>
        <p className="text-[18px] text-gray-500 leading-[1.75] max-w-md">
          Outside of code I <span className="font-semibold text-gray-900">make films</span> — travel videos, short films, the occasional music video. It's taught me how to think about <span className="font-semibold text-gray-900">what an audience actually sees</span>, which turns out to be useful when building interfaces too.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 max-w-md">
        {highlights.map((item) => (
          <span
            key={item.bold}
            className="px-4 py-2 rounded-full text-[13px] font-semibold text-gray-700"
            style={{
              background: 'rgba(0,0,0,0.04)',
              border: '1.5px solid rgba(0,0,0,0.08)',
            }}
          >
            {item.bold}
          </span>
        ))}
      </div>

    </div>
  );
}
