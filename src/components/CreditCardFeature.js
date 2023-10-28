export default function CreditCardFeature({
  title1,
  title2,
  subtitle,
  imgUrl
}) {
  return (
    <div class="w-full max-w-7xl mx-auto px-6 md:px-4 md:flex relative py-6">
      <div class="mx-auto w-full flex-[50%] flex-grow-0 my-auto">
        <p class="text-[22px] font-medium text-white mb-4 md:text-[40px] leading-[1.2]">
          {title1}
          <span class="uni-gradient-primary">
            <br />
            {title2}
          </span>
        </p>
        <p class="text-[#BFC9CC] text-[14px] md:text-2xl">{subtitle}</p>
      </div>
      <div class="m-auto w-full md:w-[450px] h-auto md:flex-[50%]">
        <img
          src={`/images/${imgUrl}`}
          alt=""
          loading="lazy"
          class="m-auto w-[80%] h-auto css-1e2fy0l"
        />
      </div>
    </div>
  );
}
