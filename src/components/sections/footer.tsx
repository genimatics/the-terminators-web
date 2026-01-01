'use client';

import {
  Facebook,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react';
import Link from 'next/link';
import { IMAGES } from '@/constants/images';
import { TEXTS } from '@/constants/text';

export default function Footer() {
  const { FOOTER } = TEXTS;

  return (
    <footer
      className="bg-black text-white"
      style={{
        backgroundImage: `url(${IMAGES.FOOTER.FOOTER_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full px-4 pt-2 sm:px-6 sm:pt-4 md:px-8 lg:px-10 xl:px-12">
        <div className="mx-auto w-full max-w-full space-y-10 sm:space-y-14">

          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="w-full text-center lg:text-left">
              <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                {/* {FOOTER.HEADING} */}
                <span className="ml-2 inline-block bg-primary p-2 text-white">
                  {FOOTER.HIGHLIGHT}
                </span>
              </h2>
              <p className="mt-3 text-gray-300 sm:text-lg">
                {FOOTER.DESCRIPTION}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 text-gray-300 md:flex-row md:justify-between">

            <div className="space-y-3 md:max-w-md">
              <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                Address
              </h3>
              <p className="text-sm leading-relaxed sm:text-base">
                Office # 104, Yasir Chambers, Opp. PIA Planetarium, Block 13-A,
                University Road, Gulshan-e-Iqbal, Karachi.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                Contact
              </h3>

              <a
                href="tel:+922134830727"
                className="flex items-center gap-2 text-sm transition hover:text-primary sm:text-base"
              >
                <Phone className="h-4 w-4" />
                +92 21 34830727

              </a>

              <a
                href="tel:+923332180818"
                className="flex items-center gap-2 text-sm transition hover:text-primary sm:text-base"
              >
                <Phone className="h-4 w-4" />
                +92 333 2180818

              </a>

              <a
                href="mailto:z_siddiki@hotmail.com"
                className="flex items-center gap-2 text-sm transition hover:text-primary sm:text-base"
              >
                <Mail className="h-4 w-4" />
                z_siddiki@hotmail.com
              </a>

              <a
                href="mailto:admin@theterminators.biz.pk"
                className="flex items-center gap-2 text-sm transition hover:text-primary sm:text-base"
              >
                <Mail className="h-4 w-4" />
                admin@theterminators.biz.pk

              </a>
            </div>

            <div className="space-y-3 md:text-right">
              <h3 className="flex items-center gap-2 text-xl font-bold text-white md:justify-end">
                Registration
              </h3>
              <p className="text-sm sm:text-base">NTN #: 1596512-7</p>
              <p className="text-sm sm:text-base">STRN #: 1700 159 512 19</p>
              <p className="text-sm sm:text-base">PEC License #: C4/E-6502</p>
            </div>

          </div>

          <div className="flex justify-center gap-6 border-t border-gray-800 py-4">
            <Link
              href="https://www.facebook.com/theterminators.pak/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-primary"
            >
              <Facebook className="h-6 w-6" />
            </Link>

            <Link
              href="http://www.linkedin.com/in/ahmed-zubair-siddiqui-70a24122"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-primary"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
