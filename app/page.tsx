import HeroSection from "@/components/home/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page! Barnehage",
  description: "home page barnehage",
};
export default function Home() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
