export default function PromotionBanner({
  title1,
  title2,
  subtitle,
  imgUrl,
  isReversed
}) {
  return (
    <div
      class={`flex md:items-center flex-col-reverse md:${
        isReversed ? "flex-row-reverse" : "flex-row"
      } w-full font-medium justify-center md:pt-[70px] py-0 md:py-[60px] md:px-8`}
    >
      <div class="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
        <div class="w-full md:w-[300px] lg:w-[510px]">
          <div>
            <span style={{ fontWeight: 700 }}>{title1}</span>
            <span style={{ fontWeight: 400, color: "#9ea7ae" }}>{title2}</span>
          </div>
        </div>
        {subtitle && (
          <div class="info-caption">
            <div class="leading-5 mt-10 font-normal text-[13px] md:text-lg text-[#9EA7AE]">
              {subtitle}
            </div>
          </div>
        )}
      </div>
      <div class="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
        <div class="flex justify-center overflow-hidden">
          <div class="relative w-[280px] lg:w-[448px]">
            <img alt="" src={`/images/${imgUrl}`} class="" />
          </div>
        </div>
      </div>
    </div>
  );
}
