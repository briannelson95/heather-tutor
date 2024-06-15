import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import PricingModels from "@/components/PricingModels";
import TextWithImage from "@/components/TextWithImage";
import { client } from "@/sanity/lib/client";
import { homepageQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const data = await client.fetch(homepageQuery)
  const hero = data[0].pageBuilder.find((item: any) => item._type === 'hero');
  const benefits = data[0].pageBuilder.find((item: any) => item._type === 'benefitsSection');
  const subjects = data[0].pageBuilder.find((item: any) => item._type === 'subjectGallery');
  const pricing = data[0].pageBuilder.find((item: any) => item._type === 'pricing');
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
        <PricingModels {...pricing} />
      </section>
    </main>
  );
}
