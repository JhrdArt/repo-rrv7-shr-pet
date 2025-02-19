import ProductComponent from "../products-component";
import { useLoaderData, useNavigation } from "react-router";
import Loader from "~/components/ui/Loader/loader";
import { fetchProducts } from "~/services/index";
import { SectionCatData } from "~/utils/data";

export async function loader() {
  const data = await fetchProducts();
  return data;
}

const Cat = () => {
  const products = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }
  return (
    <ProductComponent
      products={products}
      nameComponent="gato"
      sectionData={SectionCatData}
    />
  );
};

export default Cat;
