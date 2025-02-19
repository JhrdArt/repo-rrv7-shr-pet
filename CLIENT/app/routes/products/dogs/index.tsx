import { useLoaderData, useNavigation } from "react-router";

import { fetchProducts } from "~/services/index";
import Loader from "~/components/ui/Loader/loader";
import { SectionDogData } from "~/utils/data";
import ProductComponent from "../products-component";

export async function loader() {
  const data = await fetchProducts();
  return data;
}

const Dog = () => {
  const products = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }
  return (
    <ProductComponent
      products={products}
      nameComponent="perro"
      sectionData={SectionDogData}
    />
  );
};

export default Dog;
