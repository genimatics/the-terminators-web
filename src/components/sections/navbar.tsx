'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Button from '@/components/ui/button';
import { IMAGES } from '@/constants/images';
import { TEXTS } from '@/constants/text';
import { Link } from '@/libs/I18nNavigation';

type DropdownItem = {
  name: string;
  href: string;
};

type NavItem = {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
};

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string>('home');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const navLinks: NavItem[] = TEXTS.NAVBAR.LINKS.map(link => ({
    ...link,
    hasDropdown: false,
  }));

  const handleMouseEnter = (name: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    setHoveredLink(name);
  };

  const handleMouseLeave = (name: string) => {
    closeTimer.current = setTimeout(() => {
      setHoveredLink(prev => (prev === name ? null : prev));
    }, 500);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black text-white shadow-md">
      <div className="flex w-full flex-col items-center px-2 sm:px-4 md:px-6">
        <div className="hidden h-16 w-full items-center justify-between sm:flex sm:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src={IMAGES.NAVBAR.LOGO || '/placeholder.svg'}
              alt={TEXTS.NAVBAR.LOGO_ALT}
              width={130}
              height={50}
              priority
            />
          </Link>

          <ul className="hidden items-center space-x-8 md:space-x-10 lg:flex">
            {navLinks.map(link => (
              <li
                key={link.name}
                className="group relative"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={() => handleMouseLeave(link.name)}
              >
                {link.hasDropdown
                  ? (
                      <button
                        type="button"
                        className={`flex items-center gap-1 text-xs font-semibold tracking-wide  transition-colors duration-300 sm:text-sm ${activeLink === link.name.toLowerCase()
                          ? 'text-primary'
                          : 'hover:text-primary'
                        }`}
                      >
                        {link.name}
                        <IoIosArrowDown
                          className={`transition-transform duration-300 ${hoveredLink === link.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )
                  : (
                      <Link
                        href={link.href}
                        onClick={() => setActiveLink(link.name.toLowerCase())}
                        className={`  sm:text-md font-semibold tracking-wide transition-colors duration-300 ${activeLink === link.name.toLowerCase()
                          ? 'text-primary'
                          : 'hover:text-primary'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}

                {link.hasDropdown && hoveredLink === link.name && (
                  <ul
                    className="animate-fadeIn absolute top-full left-0 mt-2 w-40 bg-black  text-white shadow-lg"
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    onMouseLeave={() => handleMouseLeave(link.name)}
                  >
                    {link.dropdownItems?.map(item => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`block px-4 py-2 text-xs transition-colors duration-200 sm:text-sm ${activeLink === item.name.toLowerCase()
                            ? 'bg-primary text-white'
                            : 'hover:bg-primary'
                          }`}
                          onClick={() =>
                            setActiveLink(item.name.toLowerCase())}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href={TEXTS.NAVBAR.BUTTON_LINK}
              className="hidden md:block"
            >
              <Button className="!bg-primary !px-4 !py-2 text-xs font-semibold tracking-widest !text-white transition-all duration-300 hover:opacity-90 sm:!px-5 sm:!py-2.5 sm:text-sm">
                {TEXTS.NAVBAR.BUTTON_TEXT}
              </Button>
            </Link>

            <div
              role="button"
              tabIndex={0}
              aria-label={TEXTS.NAVBAR.MENU_ALT}
              onClick={() => setMenuOpen(!menuOpen)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setMenuOpen(!menuOpen);
                }
              }}
              className="flex cursor-pointer flex-col gap-1 sm:hidden"
            >
              <div className="h-[2px] w-6 bg-white" />
              <div className="h-[2px] w-6 bg-white" />
              <div className="h-[2px] w-6 bg-white" />
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex w-full flex-col items-center justify-center py-3 sm:hidden">
          <Image
            src={IMAGES.NAVBAR.LOGO || '/placeholder.svg'}
            alt={TEXTS.NAVBAR.LOGO_ALT}
            width={100}
            height={40}
            priority
          />

          <div
            role="button"
            tabIndex={0}
            aria-label={TEXTS.NAVBAR.MENU_ALT}
            onClick={() => setMenuOpen(!menuOpen)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setMenuOpen(!menuOpen);
              }
            }}
            className="mt-3 flex cursor-pointer flex-col gap-1"
          >
            <div className="h-[2px] w-6 bg-white" />
            <div className="h-[2px] w-6 bg-white" />
            <div className="h-[2px] w-6 bg-white" />
          </div>

          {menuOpen && (
            <div className="animate-fadeIn w-full border-t border-white/20 bg-black py-3 text-center sm:hidden">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary block py-2 text-xs font-semibold tracking-wide uppercase transition-colors"
                  onClick={() => {
                    setActiveLink(link.name.toLowerCase());
                    setMenuOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
