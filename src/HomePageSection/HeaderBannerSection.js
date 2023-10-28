import ApplyNow from "../components/ApplyNow";
import Header from "../components/Header";

import { ReactComponent as Star } from "../SVG/star.svg";

export default function HeaderBannerSection() {
  return (
    <>
      <Header />
      <div>
        <div class="relative h-[100vh] w-full flex items-center justify-center">
          <div class="flex flex-col md:flex-row-reverse mx-auto max-w-[1280px] w-full justify-center z-1 bg-transparent">
            <img
              src="/images/nx_wave_hero.png"
              alt="card_asset"
              class="h-auto w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1] mx-6"
            />
            <div class="z-10 w-full mt-7 md:mt-0 md:my-auto flex flex-col self-end md:self-center px-6">
              <h1 class="font-normal max-w-[300px] md:max-w-[700px] text-3xl md:text-[3.4rem] md:leading-[54px] text-black md:mb-6">
                <span>
                  <strong>NX Wave.</strong> The next-gen credit card for those
                  who love rewards.
                </span>
              </h1>
              <div class="mt-4 md:mt-0">
                <p class="font-medium text-sm md:text-base md:mb-9">
                  1% Cashback
                  <Star />
                  5x Rewards
                  <Star />
                  Zero Forex Markup
                </p>
              </div>
              <div class="hidden md:block">
                <div class="flex justify-between items-center block max-w-[94vw]">
                  <div class="flex flex-col">
                    <ApplyNow isColumn />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <video
            autoplay="true"
            muted="muted"
            loop
            playsinline=""
            class="css-7k8a4g"
          >
            <source src="/videos/nxt_wave_bg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
