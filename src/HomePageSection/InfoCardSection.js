import { infoCardData } from "../API/data";
import Infocard from "../components/InfoCard";

export default function InfoCardSection() {
  return (
    <section class="py-12 lg:py-[100px] bg-black">
      <div class="w-full max-w-7xl mx-auto px-6 md:px-4 md:flex md:justify-between">
        {infoCardData.map((data) => (
          <Infocard {...data} />
        ))}
      </div>
    </section>
  );
}
