import React, { useEffect, useRef, useState } from 'react';

const row1Images = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

const row2Images = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialize offset
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const tripledRow1 = [...row1Images, ...row1Images, ...row1Images];
  const tripledRow2 = [...row2Images, ...row2Images, ...row2Images];

  return (
    <div
      ref={sectionRef}
      className="bg-[#0C0C0C] py-24 sm:py-32 md:py-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves right */}
        <div className="w-full overflow-hidden flex">
          <div
            className="flex gap-3 flex-nowrap"
            style={{
              transform: `translateX(${offset - 200}px)`,
              willChange: 'transform',
            }}
          >
            {tripledRow1.map((url, i) => (
              <div
                key={`r1-${i}`}
                className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800"
              >
                <img
                  src={url}
                  alt={`Marquee item ${i}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moves left */}
        <div className="w-full overflow-hidden flex">
          <div
            className="flex gap-3 flex-nowrap"
            style={{
              transform: `translateX(${-offset + 200}px)`,
              willChange: 'transform',
            }}
          >
            {tripledRow2.map((url, i) => (
              <div
                key={`r2-${i}`}
                className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800"
              >
                <img
                  src={url}
                  alt={`Marquee item ${i}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
