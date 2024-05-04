import type { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Toaster} from 'react-hot-toast'
import { client } from "@/sanity/lib/client";
import { settingsQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const siteData = await client.fetch(settingsQuery);
  // const pageData = await client.fetch()
  return {
    title: siteData.siteTitle,
    icons: {
      icon: siteData.favicon
    }
  }
}

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <Toaster />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
