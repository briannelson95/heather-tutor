import type { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { settingsQuery } from "@/sanity/lib/queries";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const siteData = await client.fetch(settingsQuery);
  
  return {
    title: siteData.siteTitle,
  }
}

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const data = await client.fetch(settingsQuery);
  // console.log(data.navigation)
  return (
      <div className={inter.className}>
          <Navbar image={data.logo} navItems={data.navigation}/>
          {children}
          <Footer image={data.logo} />
      </div>
  );
}
