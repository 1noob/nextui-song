"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  link,
  Link,
  Kbd,
} from "@nextui-org/react";
import { Input } from "@nextui-org/input";

import { siteConfig } from "@/config/site";
import { Route } from "@/libs/docs/page";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components";
import {
  XIcon,
  TwitterIcon,
  GithubIcon,
  SearchLinearIcon,
} from "@/components/icons";
import { DocsSidebar } from "@/components/docs";
import { useRef, useState, FC, ReactNode, Key, useEffect } from "react";
import { usePathname } from "next/navigation";
import { includes } from "lodash";
import { trackEvent } from "@/utils/va";

export interface NavbarProps {
  routes: Route[];
  mobileRoutes?: Route[];
  tag?: string;
  slug?: string;
  children?: ReactNode;
}

export const Navbar: FC<NavbarProps> = ({
  children,
  routes,
  mobileRoutes = [],
  slug,
  tag,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(false);

  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [pathname]);

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchLinearIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  const handlePressNavbarItem = (name: string, url: string) => {
    trackEvent("NavbarItem", {
      name,
      action: "press",
      category: "navbar",
      data: url,
    });
  };

  const navLinkClasses = clsx(
    link({ color: "foreground" }),
    "data-[active=true]:text-primary"
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            aria-label="Home"
            className="flex justify-start items-center gap-2 tap-highlight-transparent transition-opacity active:opacity-50"
            href="/"
            onClick={() => handlePressNavbarItem("Home", "/")}
          >
            <p className="font-bold text-inherit">SONG</p>
          </NextLink>
        </NavbarBrand>
        <ul className={"hidden lg:flex gap-4 justify-start items-center"}>
          <NavbarItem>
            <NextLink
              className={navLinkClasses}
              color="foreground"
              data-active={includes(pathname, "docs")}
              href="/docs/hello"
              onClick={() => handlePressNavbarItem("Docs", "/docs/hello")}
            >
              Docs
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink
              className={navLinkClasses}
              color="foreground"
              data-active={includes(pathname, "blog")}
              href="/blog"
              onClick={() => handlePressNavbarItem("Blog", "/blog")}
            >
              Blog
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink
              className={navLinkClasses}
              color="foreground"
              data-active={includes(pathname, "project")}
              href="/project"
              onClick={() => handlePressNavbarItem("Project", "/project")}
            >
              Project
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink
              className={navLinkClasses}
              color="foreground"
              data-active={includes(pathname, "about")}
              href="/about"
              onClick={() => handlePressNavbarItem("About", "/about")}
            >
              About
            </NextLink>
          </NavbarItem>
        </ul>
      </NavbarContent>

      {/* pc */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <XIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch className={"hidden lg:flex"}/>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="hidden sm:flex lg:hidden ml-4"
        />
      </NavbarContent>

      {/* mobile */}
      <NavbarContent className="flex w-full gap-2 sm:hidden" justify="end">
        <NavbarItem className="flex h-full items-center">
          <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <XIcon className="text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarItem className="flex h-full items-center">
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarItem className="w-10 h-full">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="w-full h-full pt-1"
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <DocsSidebar
          className="mt-4"
          routes={[...mobileRoutes, ...routes]}
          slug={slug}
          tag={tag}
        />
        {children}
      </NavbarMenu>
    </NextUINavbar>
  );
};
