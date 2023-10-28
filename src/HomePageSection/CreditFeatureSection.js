import { creditFeatureData } from "../API/data";
import CreditCardFeature from "../components/CreditCardFeature";

export default function CreditFeatureSection() {
  return (
    <section class="py-12 lg:py-[100px] bg-black py-8 relative">
      <img
        src="/images/circles.png"
        alt="circles"
        class="absolute top-0 h-auto w-[70%]"
      />
      {creditFeatureData.map((data) => (
        <CreditCardFeature {...data} />
      ))}
    </section>
  );
}
