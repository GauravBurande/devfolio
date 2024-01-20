import Link from "next/link";
import Image from "next/image";
// import ButtonSignin from "./ButtonSignin";
import logo from "@/app/icon.svg";
import config from "@/config";
import { ModeToggle } from "./ThemeToggle";

const links = [
  {
    href: "/#pricing",
    label: "Pricing",
  },
  {
    href: "/#faq",
    label: "Faq",
  },
];

// const cta = <ButtonSignin />;

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        className="container flex items-center justify-between md:px-16 py-3 mx-auto"
        aria-label="Global"
      >
        <div className="flex items-center gap-6">
          {/* Your logo/name on large screens */}
          <div className="flex lg:flex-1">
            <Link
              className="flex items-center gap-1 shrink-0"
              href="/"
              title={`${config.appName} hompage`}
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                className="w-7"
                priority={true}
                width={32}
                height={32}
              />
              <span className="font-bold">{config.appName}</span>
            </Link>
          </div>
          {/* Your links on large screens */}
          <div className="flex justify-center gap-6 items-center">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="transition-colors hover:text-foreground text-foreground/70"
                title={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
