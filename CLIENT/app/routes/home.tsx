import type { Route } from "./+types/home";
import { fetchProducts } from "~/services";
import { useLoaderData, useNavigation } from "react-router";
import Sections from "~/components/sections/Index";
import Loader from "~/components/ui/Loader/loader";
import Hero from "~/components/hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tienda" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export async function loader() {
  const data = await fetchProducts();
  return data;
}
export default function Home() {
  const products = useLoaderData();
  console.log("🚀 ~ Home ~ products:", products);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }

  return (
    <main className="space-y-10">
      <Hero />
      <Sections />
    </main>
  );
}
