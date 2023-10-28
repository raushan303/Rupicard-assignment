import PromotionBanner from "../components/PromotionBanner";
import { promotionList } from "../API/data";

export default function PromotionListSection() {
  return (
    <div class="w-full max-w-7xl mx-auto px-6 md:px-4 px-8">
      <div class="flex justify-center flex-col">
        {promotionList.map((data) => (
          <PromotionBanner {...data} />
        ))}
        <div class="flex mt-40 font-medium justify-start md:justify-center text-[28px] leading-[34px] md:text-[40px] md:leading-[1.2] md:text-center">
          <p>
            Lifetime <span class="text-uni-green">free. </span>
            <span class="block sm:inline-block md:text-center">
              No joining fee.
            </span>
            <span class="block md:text-center">No annual charges. </span>
          </p>
        </div>
      </div>
    </div>
  );
}
