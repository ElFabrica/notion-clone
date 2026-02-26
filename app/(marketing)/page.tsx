import { Footer } from "@/features/marketing/footer";
import { Heading } from "@/features/marketing/heading";
import { Heroes } from "@/features/marketing/heroes";

export default function MarketingPage() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 ">
        <Heading />
        <Heroes />
        <Footer />
      </div>
    </div>
  );
}
