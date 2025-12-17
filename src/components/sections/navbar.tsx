'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IMAGES } from '@/constants/images';
import { TEXTS } from '@/constants/text';
// import Button from '@/components/ui/button';
import { Link } from '@/libs/I18nNavigation';

type DropdownItem = {
  name: string;
  href: string;
};

type NavItem = {
  name: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: readonly DropdownItem[];
};

const MenuIcon = ({ onClick }: { onClick: () => void }) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onClick();
      }
    }}
    aria-label="Menu"
    className="flex cursor-pointer flex-col gap-1"
  >
    {[0, 1, 2].map(i => (
      <div key={i} className="h-[2px] w-6 bg-black" />
    ))}
  </div>
);

const NavLinkItem = ({
  item,
  activeLink,
  hoveredLink,
  setActiveLink,
  handleMouseEnter,
  handleMouseLeave,
  closeDropdown,
}: {
  item: NavItem;
  activeLink: string;
  hoveredLink: string | null;
  setActiveLink: (link: string) => void;
  handleMouseEnter: (name: string) => void;
  handleMouseLeave: (name: string) => void;
  closeDropdown: () => void;
}) => {
  const isActive = activeLink === item.name.toLowerCase();

  return (
    <li
      className="group relative"
      onMouseEnter={() => handleMouseEnter(item.name)}
      onMouseLeave={() => handleMouseLeave(item.name)}
    >
      {item.hasDropdown
        ? (
            <div className="flex items-center">
              <Link
                href={item.href}
                onClick={() => setActiveLink(item.name.toLowerCase())}
                className={`sm:text-md flex cursor-pointer items-center gap-1 text-base font-semibold tracking-wide transition-colors duration-300 ${
                  isActive ? 'text-primary' : 'text-black group-hover:text-[var(--color-primary)]'
                }`}
              >
                {item.name}
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${hoveredLink === item.name ? 'rotate-180' : ''}`}
                />
              </Link>
            </div>
          )
        : (
            <Link
              href={item.href}
              onClick={() => setActiveLink(item.name.toLowerCase())}
              className={`sm:text-md font-semibold tracking-wide transition-colors duration-300 ${
                isActive ? 'text-primary' : 'text-black hover:text-[var(--color-primary)]'
              }`}
            >
              {item.name}
            </Link>
          )}

      {item.hasDropdown && hoveredLink === item.name && (
        <div
          className="animate-fadeIn absolute top-full left-1/2 z-50 mt-2 w-[600px] -translate-x-1/2 transform border-t-4 border-[var(--color-primary)] bg-white text-black shadow-2xl"
          onMouseEnter={() => handleMouseEnter(item.name)}
          onMouseLeave={() => handleMouseLeave(item.name)}
        >
          <ul className="grid grid-cols-2 divide-x divide-gray-200">
            {item.dropdownItems?.map(sub => (
              <li key={sub.name} className="border-b border-gray-200 last:border-b-0">
                <Link
                  href={sub.href}
                  className="block cursor-pointer px-6 py-4 text-sm font-medium transition-all duration-200 hover:bg-[var(--color-primary)] hover:text-white"
                  onClick={() => {
                    setActiveLink(sub.name.toLowerCase());
                    closeDropdown();
                  }}
                >
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks: NavItem[] = TEXTS.NAVBAR.LINKS.map((link) => {
    if (link.name === 'Services') {
      return {
        name: link.name,
        href: link.href,
        hasDropdown: true,
        dropdownItems: TEXTS.NAVBAR.SERVICES_DROPDOWN,
      };
    }
    return {
      name: link.name,
      href: link.href,
      hasDropdown: false,
    };
  });

  const handleMouseEnter = (name: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredLink(name);
  };

  const handleMouseLeave = (name: string) => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredLink(prev => (prev === name ? null : prev));
    }, 400);
  };

  const closeDropdown = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredLink(null);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    setMobileDropdownOpen(null);
  };

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdownOpen(prev => (prev === name ? null : name));
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white text-black shadow-md">
      <div className="flex w-full flex-col px-2 sm:px-4 md:px-10">
        <div className="hidden h-16 w-full items-center justify-between sm:flex sm:h-20">
          <Link href="/">
            <Image
              src={IMAGES.NAVBAR.LOGO || '/placeholder.svg'}
              alt={TEXTS.NAVBAR.LOGO_ALT}
              width={60}
              height={10}
              priority
              className="rounded-lg"
            />
          </Link>

          <div className="flex items-center space-x-8">
            <ul className="hidden items-center space-x-8 md:space-x-10 lg:flex">
              {navLinks.map(item => (
                <NavLinkItem
                  key={item.name}
                  item={item}
                  activeLink={activeLink}
                  hoveredLink={hoveredLink}
                  setActiveLink={setActiveLink}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  closeDropdown={closeDropdown}
                />
              ))}
            </ul>

            {/*
            <Button
              disabled={false}
              className="cursor-pointer !bg-primary !px-4 !py-2 text-xs font-semibold tracking-widest !text-white hover:opacity-90 sm:!px-5 sm:!py-2.5 sm:text-sm"
            >
              {TEXTS.NAVBAR.BUTTON_TEXT}
            </Button>
            */}

            <div className="sm:hidden">
              <MenuIcon onClick={toggleMenu} />
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-between px-4 py-4 sm:hidden">
          <Link href="/">
            <Image
              src={IMAGES.NAVBAR.LOGO || '/placeholder.svg'}
              alt={TEXTS.NAVBAR.LOGO_ALT}
              width={50}
              height={20}
              priority
              className="rounded-lg"
            />
          </Link>

          <div className="flex items-center gap-4">
            {/*
            <Button
              disabled={false}
              className="cursor-pointer !bg-primary !px-3 !py-1.5 text-xs font-semibold tracking-widest !text-white hover:opacity-90"
            >
              {TEXTS.NAVBAR.BUTTON_TEXT}
            </Button>
            */}
            <MenuIcon onClick={toggleMenu} />
          </div>
        </div>

        {menuOpen && (
          <div className="animate-fadeIn w-full border-t border-gray-200 bg-white py-3 text-center sm:hidden">
            {navLinks.map(item => (
              <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                {item.hasDropdown
                  ? (
                      <div className="py-2">
                        <div
                          className="focus:ring-primary-500 mb-2 flex cursor-pointer items-center justify-center gap-1 px-4 text-xs font-semibold text-black uppercase hover:text-(--color-primary) focus:ring-2 focus:ring-offset-2 focus:outline-none"
                          onClick={() => toggleMobileDropdown(item.name)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              toggleMobileDropdown(item.name);
                            }
                          }}
                          role="button"
                          tabIndex={0}
                          aria-expanded={mobileDropdownOpen === item.name}
                          aria-haspopup="true"
                        >
                          {item.name}
                          <IoIosArrowDown
                            className={`transition-transform duration-300 ${
                              mobileDropdownOpen === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        {mobileDropdownOpen === item.name && (
                          <div className="animate-fadeIn space-y-1 bg-gray-50 py-2">
                            {item.dropdownItems?.map(sub => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="block cursor-pointer px-4 py-2 text-xs font-normal text-gray-600 transition-colors hover:bg-gray-100 hover:text-[var(--color-primary)]"
                                onClick={() => {
                                  setActiveLink(sub.name.toLowerCase());
                                  setMenuOpen(false);
                                  setMobileDropdownOpen(null);
                                }}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  : (
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-xs font-semibold text-black uppercase transition-colors hover:text-[var(--color-primary)]"
                        onClick={() => {
                          setActiveLink(item.name.toLowerCase());
                          setMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    )}
              </div>
            ))}

            {/*
            <button
              className="mt-3 inline-block cursor-pointer rounded bg-primary px-3 py-2 text-xs font-semibold text-white"
            >
              {TEXTS.NAVBAR.BUTTON_TEXT}
            </button>
            */}
          </div>
        )}
      </div>
    </nav>
  );
}
