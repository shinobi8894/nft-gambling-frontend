"use client";

import Button from "@/components/basic/button";
import Discord from "@/components/basic/icons/discord";
import Menu from "@/components/basic/icons/menu";
import Telegram from "@/components/basic/icons/telegram";
import Logo from "@/components/basic/logo";
import { AppContext } from "@/context/context";
import { useContext, useEffect, useRef } from "react";
import MobileMenu from "../menu";
import gsap from "gsap";
export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      {
        y: -100,
      },
      {
        y: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <header ref={headerRef} className="bg-main flex justify-center p-4">
      <div className="w-full max-w-container flex justify-between items-center">
        <Logo />
        <MenuList />
        <ToolKit />
      </div>
      <MobileMenu />
    </header>
  );
}

const MenuList = () => {
  return (
    <ul className="text-white gap-10 hidden md:flex">
      <li>About</li>
      <li>Casinos</li>
      <li>Whitepaper</li>
      <li>Contact us</li>
    </ul>
  );
};

const ToolKit = () => {
  const { isFeatureEnabled, toggleFeatureFlag } = useContext(AppContext);

  return (
    <div className="flex items-center gap-5">
      <Button className="hidden md:flex">Connect Wallet</Button>
      <Menu
        onClick={() => toggleFeatureFlag("isOpenMenu")}
        className="flex md:hidden"
      />
      <Discord />
      <Telegram />
    </div>
  );
};
