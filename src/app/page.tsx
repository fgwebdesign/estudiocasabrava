import { Metadata } from "next";
import HomePageThree from "./(homes)/home-3/page";
export const metadata: Metadata = {
  title: "Estudio Casa Brava",
};

export default function Home() {
  return (
    <>
      <HomePageThree />
    </>
  );
}
