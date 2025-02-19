import { createContext, useContext, useState } from "react";
import { fetchProducts } from "~/services/index";
import type { Product } from "~/types";

type TypeProductTypes = {
  productType: Product["itemCategory"];
  setProductType: (productType: Product["itemCategory"]) => void;
};

const ProductTypeContext = createContext<TypeProductTypes | null>(null);

export const ProductTypeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [productType, setProductType] = useState<Product["itemCategory"]>("");
  return (
    <ProductTypeContext.Provider value={{ productType, setProductType }}>
      {children}
    </ProductTypeContext.Provider>
  );
};

export const useProductType = () => {
  const context = useContext(ProductTypeContext);

  if (!context) {
    throw new Error("useProductType must be used within a ProductTypeProvider");
  }
  return context;
};
