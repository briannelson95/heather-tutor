import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import PricingModels from "@/components/PricingModels";
import TextWithImage from "@/components/TextWithImage";
import { client } from "@/sanity/lib/client";
import { homepageQuery } from "@/sanity/lib/queries";
import Image from "next/image";

export default async function Home() {
  const data = await client.fetch(homepageQuery)
  const hero = data[0].pageBuilder[0];
  const benefits = data[0].pageBuilder[1];
  const subjects = data[0].pageBuilder[2];
  // console.log(subjects)
  return (
    <main className="">
      <section>
        <Hero {...hero} />
      </section>
      <section id="learn">
        <TextWithImage {...benefits} />
      </section>
      <section>
        <Gallery {...subjects} />
      </section>
      <section id="pricing">
        <PricingModels />
      </section>
    </main>
  );
}
