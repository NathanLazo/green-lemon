import type { ForwardRefExoticComponent, SVGProps } from "react";

type navigation = {
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  >;
  current: boolean;
}[];

type Products = {
  id: number;
  title: string;
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
