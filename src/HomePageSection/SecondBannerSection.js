import { useEffect, useRef, useState } from "react";

export default function SecondBannerSection() {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setStartAnimation(true);
      }
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef}>
      {startAnimation && (
        <div class="earn-cashback-message-box w-full max-w-7xl mx-auto px-6 md:px-4 undefined">
          <div class="flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium">
            <p className="second-banner-text-1">
              Earn 1% assured cashback{" "}
              <span class="css-1ggwlzr">on your spends. Get</span>
              5X
            </p>
            <p className="second-banner-text-2">
              more value than cashback{" "}
              <span class="css-1ggwlzr">at the Uni Store. Enjoy</span>
            </p>
            <p className="second-banner-text-3">
              <span class="text-[#9EA7AE] css-1ggwlzr">round the clock </span>
              Whatsapp support.{" "}
              <span class="text-[#9EA7AE] css-1ggwlzr">And it &#x27;s</span>
            </p>
            <p className="second-banner-text-4">
              lifetime free
              <span class="css-1ggwlzr">
                ; no joining fee, no annual charges.
              </span>
            </p>
          </div>
          <div class="flex md:justify-center py-12 second-banner-arrow">
            <div
              style={{
                background:
                  "linear-gradient(140.86deg, #65ecd8 11.07%, #fdef78 80.28%)"
              }}
              class="flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] justify-center"
            >
              <img
                alt="down_arrow"
                src="/images/down_arrow.svg"
                loading="lazy"
                class="w-9 md:w-14 css-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
