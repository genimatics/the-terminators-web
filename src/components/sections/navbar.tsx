'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
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
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
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
      <div key={i} className="h-[2px] w-6 bg-white" />
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
}: {
  item: NavItem;
  activeLink: string;
  hoveredLink: string | null;
  setActiveLink: (link: string) => void;
  handleMouseEnter: (name: string) => void;
  handleMouseLeave: (name: string) => void;
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
            <button
              type="button"
              className={`flex items-center gap-1 text-xs font-semibold tracking-wide transition-colors duration-300 sm:text-sm ${
                isActive ? 'text-primary' : 'text-white group-hover:text-[var(--color-primary)]'
              }`}
            >
              {item.name}
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  hoveredLink === item.name ? 'rotate-180' : ''
                }`}
              />
            </button>
          )
        : (
            <Link
              href={item.href}
              onClick={() => setActiveLink(item.name.toLowerCase())}
              className={`sm:text-md font-semibold tracking-wide transition-colors duration-300 ${
                isActive ? 'text-primary' : 'text-white hover:text-[var(--color-primary)]'
              }`}
            >
              {item.name}
            </Link>
          )}

      {item.hasDropdown && hoveredLink === item.name && (
        <ul
          className="animate-fadeIn absolute top-full left-0 mt-2 w-40 bg-black text-white shadow-lg"
          onMouseEnter={() => handleMouseEnter(item.name)}
          onMouseLeave={() => handleMouseLeave(item.name)}
        >
          {item.dropdownItems?.map(sub => (
            <li key={sub.name}>
              <Link
                href={sub.href}
                className="block px-4 py-2 text-xs transition-colors duration-200 hover:text-[var(--color-primary)] sm:text-sm"
                onClick={() => setActiveLink(sub.name.toLowerCase())}
              >
                {sub.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const navLinks: NavItem[] = TEXTS.NAVBAR.LINKS.map(link => ({
    name: link.name,
    href: link.href,
    hasDropdown: false,
    dropdownItems: [],
  }));

  const handleMouseEnter = useCallback((name: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    setHoveredLink(name);
  }, []);

  const handleMouseLeave = useCallback((name: string) => {
    closeTimer.current = setTimeout(() => {
      setHoveredLink(prev => (prev === name ? null : prev));
    }, 500);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full text-white shadow-md"
      style={{
        backgroundImage: `url(${IMAGES.NAVBAR.NAV_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex w-full flex-col items-center px-2 sm:px-4 md:px-10">
        <div className="hidden h-16 w-full items-center  justify-between sm:flex sm:h-20">
          <Link href="/">
            <Image
              src={IMAGES.NAVBAR.LOGO}
              alt={TEXTS.NAVBAR.LOGO_ALT}
              width={60}
              height={10}
              priority
              className="rounded-lg"
            />
          </Link>

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
              />
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Link href={TEXTS.NAVBAR.BUTTON_LINK} className="hidden md:block">
              <Button className="!bg-primary !px-4 !py-2 text-xs font-semibold tracking-widest !text-white hover:opacity-90 sm:!px-5 sm:!py-2.5 sm:text-sm">
                {TEXTS.NAVBAR.BUTTON_TEXT}
              </Button>
            </Link>

            <div className="sm:hidden">
              <MenuIcon onClick={toggleMenu} />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center py-3 sm:hidden">
          <Image
            src={IMAGES.NAVBAR.LOGO}
            alt={TEXTS.NAVBAR.LOGO_ALT}
            width={100}
            height={40}
            priority
            className="rounded-lg"
          />

          <div className="mt-3">
            <MenuIcon onClick={toggleMenu} />
          </div>

          {menuOpen && (
            <div className="animate-fadeIn w-full border-t border-white/20 bg-black py-3 text-center">
              {navLinks.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-xs font-semibold text-white uppercase transition-colors hover:text-[var(--color-primary)]"
                  onClick={() => {
                    setActiveLink(item.name.toLowerCase());
                    setMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
