import { type FC, Fragment, useState } from 'react';

// UI
import { ArrowPathIcon, TrashIcon } from '@heroicons/react/24/outline';
import CreateCategoryModal from '../products/modals/createCategory';
import CreateProductModal from '../products/modals/createProduct';

import { api } from '~/utils/api';
import toast from 'react-hot-toast';
import Image from 'next/image';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}



const ProductsConfig: FC = () => {
    // Modals state
    const [createCategoryModal, setCreateCategoryModal] = useState(false);
    const [createProductModal, setCreateProductModal] = useState(false);


    // API
    const getCategoriesWithProducts = api.products.getCategoryProducts.useQuery();
    const categoriesWithProducts = getCategoriesWithProducts.data;


    return (
        <>
            <CreateCategoryModal open={createCategoryModal} setOpen={setCreateCategoryModal} />
            <CreateProductModal open={createProductModal} setOpen={setCreateProductModal} />
            <div className="border-b border-zinc-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <div className="min-w-0 flex-1 my-2">
                    <h1 className="text-lg font-medium leading-6 text-zinc-900 sm:truncate">Configuración de categorías y productos</h1>
                </div>
            </div>
            <div className="px-4 sm:px-6 lg:px-8 mt-4">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">Products</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            Esta es la lista de productos que se encuentran en el sistema, puedes agregar nuevos productos o editar los existentes.
                        </p>
                    </div>
                    <div className=" flex gap-4 mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button
                            type="button"
                            className="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            onClick={() => setCreateProductModal(true)}
                        >
                            Add product
                        </button>
                        <button
                            type="button"
                            className="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            onClick={() => setCreateCategoryModal(true)}
                        >
                            Add category
                        </button>
                    </div>
                </div>

                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <button
                                type="button"
                                className="ml-2 text-sm font-medium text-green-600 hover:text-green-500 focus:outline-none focus:underline transition hover:animate-spin ease-in-out duration-150 "
                                onClick={() => {
                                    getCategoriesWithProducts.refetch()
                                        .then(() => {
                                            toast.success("Productos actualizados");
                                        })
                                        .catch((err) => {
                                            toast.error("Error al obtener las productos, inténtelo mas tarde");
                                            console.log(err);
                                        });

                                }}
                            >
                                <ArrowPathIcon
                                    className="h-5 w-5"
                                />
                            </button>
                            <table className="min-w-full">
                                <thead className="bg-white">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Descripción
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Image
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Price
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {categoriesWithProducts?.map((category) => (
                                        <Fragment key={`category: ${category.name}`}>
                                            <tr className="border-t border-gray-200 ">
                                                <th
                                                    colSpan={5}
                                                    scope="colgroup"
                                                    className=" bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3 "
                                                >
                                                    <button className="text-red-600 hover:text-red-900 mr-2">
                                                        <TrashIcon className="h-3 w-3" aria-hidden="true" />
                                                    </button>
                                                    {category.name}
                                                </th>
                                            </tr>
                                            {category.products.map((product, index) => (
                                                <tr
                                                    key={`product: ${product.name}`}
                                                    className={classNames(index === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t')}
                                                >
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                        {product.name}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.description}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <Image src={product.image} alt={`image: ${product.name}`} width={50} height={50} />
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.price}</td>
                                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                                        <button className="text-green-600 hover:text-green-900">
                                                            Edit<span className="sr-only">, {product.name}</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProductsConfig;