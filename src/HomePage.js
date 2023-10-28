import { useEffect } from "react";

import { throttle } from "./API/utils";
import HeaderBannerSection from "./HomePageSection/HeaderBannerSection";
import SecondBannerSection from "./HomePageSection/SecondBannerSection";
import PromotionListSection from "./HomePageSection/PromotionListSection";
import CreditFeatureSection from "./HomePageSection/CreditFeatureSection";
import InfoCardSection from "./HomePageSection/InfoCardSection";
import BigBannerSection from "./HomePageSection/BigBannerSection";
import DownloadAppBannerSection from "./HomePageSection/DownloadAppBannerSection";
import PageFooterSection from "./HomePageSection/PageFooterSection";
import ApplyNowFooterSection from "./HomePageSection/ApplyNowFooterSection";

export default function Page() {
  const onScroll = throttle(() => {
    localStorage.setItem("sectionPosition", window.scrollY);
  }, 500);

  useEffect(() => {
    const storedSectionPosition = localStorage.getItem("sectionPosition");
    if (storedSectionPosition) {
      window.scrollTo({
        top: parseFloat(storedSectionPosition),
        behavior: "smooth"
      });
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <HeaderBannerSection />
      <div class="py-12 md:py-[150px] second-banner-view">
        <SecondBannerSection />
        <PromotionListSection />
      </div>
      <CreditFeatureSection />
      <InfoCardSection />
      <BigBannerSection />
      <DownloadAppBannerSection />
      <PageFooterSection />
      <ApplyNowFooterSection />
    </>
  );
}
