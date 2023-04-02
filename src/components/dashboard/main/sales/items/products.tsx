/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { FC } from 'react';

//  Images
import Image from 'next/image'
import cheesecakeChocolate from '@images/company/cheesecakeChocolate.png'

import { Cookies } from 'typescript-cookie';

import type {  Table } from '../../types';
import { toast } from 'react-hot-toast';

// API
import { api } from '~/utils/api';
import type { Product } from '@prisma/client';


interface productsProps {
    selectedTable: Table | null;
}

const products: FC<productsProps> = ({
    selectedTable
}) => {

    const getCategoriesWithProducts = api.products.getCategoryProducts.useQuery();
    const categoriesWithProducts = getCategoriesWithProducts.data;

    const handleProductClick = (product: Product) => {
        if (!selectedTable) return;

        try {
            const res = Cookies.get(selectedTable?.id.toString());
            if (res) {
                const products = JSON.parse(res as string);
                products.push(product);
                Cookies.set(selectedTable?.id.toString(), JSON.stringify(products));
            }
            else {
                Cookies.set(selectedTable?.id.toString(), JSON.stringify([product]));
            }
            toast("Producto agregado", { icon: '🛒', });
        }
        catch (e) {
            toast.error("Error al agregar producto");
        }

    }


    return (
        <>
            {
                categoriesWithProducts?.map((category, index) => (
                    <div key={`section-#${index}`} className="mt-6 px-4 sm:px-6 lg:px-8">
                        <h2 className="text-sm font-medium text-zinc-900">{category.name}</h2>
                        <section className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
                            {category.products.map((product) => (
                                <button key={`cat:${category.name} -> item:${product.name}`} className="relative col-span-1 flex rounded-md shadow-sm"
                                    onClick={() => {
                                        handleProductClick(product);
                                    }}
                                >
                                    <>
                                        <div
                                            className='flex bg-zinc-200 w-28 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                                        >
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={120}
                                                height={120}
                                            />
                                        </div>
                                        <div className="h-full flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-zinc-200 bg-white">
                                            <div className="flex-1 truncate px-4 py-2 text-sm text-left ">
                                                <p className="font-medium text-zinc-900 hover:text-zinc-600">
                                                    {product.name}
                                                </p>
                                                <p className="text-zinc-500 line-clamp-3">{product.description}</p>
                                            </div>
                                        </div>
                                    </>
                                </button>
                            ))}
                        </section>
                    </div>
                ))
            }
        </>
    );
}
export default products;