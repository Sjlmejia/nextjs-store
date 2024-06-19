import { Description } from "app/components/home/Description/Description";
import Hero from "app/components/home/Hero/Hero";
import MainProducts from "app/components/home/MainProducts/MainProducts";
import { Suspense } from "react";
import Loader from "../loading";

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <main>
        <MainProducts />
      </main>
    </Suspense>
  );
}
