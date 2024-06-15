import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import PricingModels from "@/components/PricingModels";
import TextWithImage from "@/components/TextWithImage";
import { client } from "@/sanity/lib/client";
import { homepageQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const data = await client.fetch(homepageQuery);
  return (
    <main className="">
        Hello world
    </main>
  );
}
