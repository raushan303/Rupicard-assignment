import { useEffect, useState } from "react";

import { throttle } from "../API/utils";
import ApplyNow from "../components/ApplyNow";

export default function ApplyNowFooterSection() {
  const [isVisible, setIsVisible] = useState(false);

  const onScroll = throttle(() => {
    setIsVisible(window.scrollY >= 400);
  }, 500);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!isVisible) {
    return <ApplyNow />;
  }

  return (
    <>
      <ApplyNow />
      <section className="apply-now-footer hidden sm:block fixed bottom-0 w-screen bg-uni-grey py-5 z-10">
        <div className="mx-auto max-w-7xl px-12 w-full flex justify-between">
          <div className="flex justify-between items-center block w-full">
            <div className="flex w-full flex-row justify-between items-center">
              <ApplyNow />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
