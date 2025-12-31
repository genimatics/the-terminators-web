'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
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
                className={`sm:text-md flex cursor-pointer items-center gap-1 text-base font-semibold tracking-wide transition-colors duration-300 ${isActive ? 'text-primary' : 'text-black group-hover:text-[var(--color-primary)]'
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
              className={`sm:text-md font-semibold tracking-wide transition-colors duration-300 ${isActive ? 'text-primary' : 'text-black hover:text-[var(--color-primary)]'
              }`}
            >
              {item.name}
            </Link>
          )}

      {item.hasDropdown && hoveredLink === item.name && (
        <div
          className="animate-fadeIn absolute top-full left-1/2 z-50 mt-2 w-[90vw] max-w-[800px] -translate-x-1/2 transform border-t-4 border-[var(--color-primary)] bg-white text-black shadow-2xl"
          onMouseEnter={() => handleMouseEnter(item.name)}
          onMouseLeave={() => handleMouseLeave(item.name)}
        >
          <ul className="grid grid-cols-2 divide-x divide-gray-200 md:grid-cols-3 lg:grid-cols-4">
            {item.dropdownItems?.map(sub => (
              <li key={sub.name} className="group/item border-b border-gray-200 last:border-b-0 hover:bg-[var(--color-primary)]">
                <Link
                  href={sub.href}
                  className="block cursor-pointer px-4 py-3 text-sm font-medium transition-all duration-200 group-hover/item:text-white"
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
      <div className="flex w-full flex-col">
        <div className="hidden items-center justify-center border-b border-gray-200 px-4 py-2.5 sm:flex sm:px-6 md:px-10">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
              <Image
                src={IMAGES.NAVBAR.LOGO || '/placeholder.svg'}
                alt={TEXTS.NAVBAR.LOGO_ALT}
                width={45}
                height={45}
                priority
                className="rounded-lg"
              />
              <h1 className="text-lg font-semibold tracking-wide text-gray-900 sm:text-xl md:text-2xl">
                The Terminators
              </h1>
            </Link>
          </div>
        </div>

        <div className="w-full bg-white px-4 py-3 sm:px-6 md:px-10">
          <div className="hidden items-center justify-between sm:flex">
            <ul className="mx-auto flex items-center space-x-6 md:space-x-8 lg:space-x-10">
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
          </div>

          <div className="flex items-center justify-between sm:hidden">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={IMAGES.NAVBAR.LOGO || '/placeholder.svg'}
                alt={TEXTS.NAVBAR.LOGO_ALT}
                width={45}
                height={45}
                priority
                className="rounded-lg"
              />
              <span className="text-lg font-semibold text-gray-900">
                The Terminators
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <MenuIcon onClick={toggleMenu} />
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="animate-fadeIn w-full border-t border-gray-200 bg-white py-2 text-center sm:hidden">
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
                            className={`transition-transform duration-300 ${mobileDropdownOpen === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        {mobileDropdownOpen === item.name && (
                          <div className="animate-fadeIn max-h-[80vh] overflow-y-auto bg-gray-50 py-2">
                            <div className="grid grid-cols-1 gap-1 px-2">
                              {item.dropdownItems?.map(sub => (
                                <div key={sub.name} className="rounded transition-colors hover:bg-gray-100">
                                  <Link
                                    href={sub.href}
                                    className="block cursor-pointer px-3 py-2.5 text-xs font-normal text-gray-600 hover:text-[var(--color-primary)]"
                                    onClick={() => {
                                      setActiveLink(sub.name.toLowerCase());
                                      setMenuOpen(false);
                                      setMobileDropdownOpen(null);
                                    }}
                                  >
                                    {sub.name}
                                  </Link>
                                </div>
                              ))}
                            </div>
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
          </div>
        )}
      </div>
    </nav>
  );
}
