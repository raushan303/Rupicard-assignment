export default function BigBannerSection() {
  return (
    <>
      <section class="py-12 lg:py-[100px] bg-[#222627] lg:py-[120px]">
        <div class="w-full max-w-7xl mx-auto px-6 md:px-4 md:flex md:flex-col text-left md:text-center">
          <p class="mx-auto text-[28px] font-medium md:text-[40px] md:max-w-6xl text-white leading-[1.2]">
            <span>
              At Uni, we’re committed to
              <span class="uni-gradient-primary">
                delivering an unmatched credit experience
              </span>
              for millions of Indians.
            </span>
          </p>
          <p class="mt-6 max-w-[500px] mx-auto text-[#BFC9CC] text-2xl">
            On this mission, we’ve partnered with some of the best in the
            business.
          </p>
          <div class="md:mt-24 flex flex-row justify-center flex-wrap">
            <div class="flex justify-center w-[100px] md:w-44 mt-10 md:mt-0 md:mx-8 mx-4">
              <img class="w-full h-full" src="/images/SBM.svg" alt="sbm bank" />
            </div>
          </div>
        </div>
      </section>
      <div class="flex justify-center items-center text-center text-[#BFC9CC] text-base sm:text-xl md:text-2xl bg-black py-16 px-5 sm:px-8 md:px-12">
        <p class="max-w-3xl">
          Please note that to stay compliant with RBI guidelines, we have
          discontinued Pay 1/3rd and Pay 1/2 cards for the time being.
        </p>
      </div>
    </>
  );
}
