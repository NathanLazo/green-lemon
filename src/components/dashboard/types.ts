import type { ForwardRefExoticComponent, SVGProps } from "react";

type navigation = {
  id: number;
  name: string;
  icon: ForwardRefExoticComponent<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  >;
}[];

type Products = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}[];

type CategoriesWithProducts = {
  category: string;
  products: Products;
}[];

type Table = {
  id: number;
  name: string;
};

type Branch = {
  id: number;
  name: string;
  address: string;
  phone: string;
  tables: Table[];
};

export type { navigation, CategoriesWithProducts, Products, Branch, Table };
