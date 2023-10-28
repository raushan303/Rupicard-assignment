import { useState } from "react";

import { ReactComponent as Menu } from "../SVG/menu.svg";
import { ReactComponent as Close } from "../SVG/close.svg";
import { ReactComponent as Logo } from "../SVG/logo.svg";
import { ReactComponent as RightArrow } from "../SVG/rightArrow.svg";

export default function Header() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <header class="css-1s59duc">
      <div style={{ background: "transparent" }}>
        <div class="css-1s275f2">
          <div
            style={{ cursor: "pointer" }}
            data-testid="logo"
            href="/"
            class="css-a983kj"
          >
            <Logo />
          </div>
          <div class="flex">
            <div class="menu-container hidden md:flex">
              <div class="pl-20">
                <a
                  href="https://paychek.uni.club/"
                  class="apply_btn no-underline visited:text-white text-white font-medium hover:text-[#7DEDDD] bg-black bg-opacity-60 hover:bg-black rounded-xl py-[11px] px-[30px]"
                >
                  Uni Paychek
                </a>
                <div class="w-full mt-1 h-[2px] undefined"></div>
              </div>
            </div>
            <div class="md:hidden flex pl-20">
              <button
                class="w-12 h-12 flex justify-center items-center"
                aria-label="menu"
                onClick={() => setIsMenuClicked((prevState) => !prevState)}
              >
                {isMenuClicked ? <Close /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuClicked && (
        <div class="md:hidden">
          <div class="text-white mobile-menu-bg shadow-lg">
            <div class="p-4 px-5 font-medium text-sm leading-7 css-5z988z">
              <a href="https://paychek.uni.club/" class="flex justify-between">
                <span>Uni Paychek</span>
                <span>
                  <RightArrow />
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
