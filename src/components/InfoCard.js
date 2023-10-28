export default function Infocard({ imgUrl, title, subtitle, isReversed }) {
  return (
    <div
      class={`flex ${
        isReversed && "flex-row-reverse"
      } w-full items-center md:flex-col md:max-w-xs my-12 md:my-0`}
    >
      <div class="flex-[50%] flex-shrink-0 flex w-full">
        <div class="w-full h-36 relative">
          <img
            class="absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0"
            src={`/images/${imgUrl}`}
            alt=""
          />
        </div>
      </div>
      <div class="flex-[50%] flex flex-col">
        <p class="font-medium text-base text-white leading-[18px] md:text-2xl">
          {title}
        </p>
        <p class="text-sm text-gray-4 mt-2 md:text-lg">
          <span>{subtitle}</span>
        </p>
      </div>
    </div>
  );
}
