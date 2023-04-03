/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

// UI
import { type FC, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

//typed form
import { z } from "zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// API
import { api } from '~/utils/api';


// image upload constraints for schema
const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

// Product schema and type
const productSchema = z.object({
    name: z.string().min(3).max(20),
    description: z.string().optional(),
    image: z
        .any()
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
        .refine(
            (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
            ".jpg, .jpeg, .png and .webp files are accepted."
        ),
    price: z.string().optional(),
    category: z.string(),
});
type Product = z.infer<typeof productSchema>;


interface createProductProps {
    open: boolean,
    setOpen: (value: boolean) => void
}
const CreateProduct: FC<createProductProps> = ({
    open,
    setOpen
}) => {

    //API
    const getCategories = api.products.getCategories.useQuery()
    const categories = getCategories?.data;
    const createProduct = api.products.createProduct.useMutation()

    //image upload
    const uploadImage = async (data: File) => {
        const imageForm = new FormData();
        imageForm.append("file", data)
        imageForm.append("upload_preset", "green-lemon")
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/de2tjedpu/upload",
            {
                method: "POST",
                body: imageForm
            }
        )
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const imageData = await res.json()
        return imageData.secure_url as string
    }



    const { register, handleSubmit, formState: { errors } } =
        useForm<Product>({ resolver: zodResolver(productSchema) });
        if (errors.name) toast.error("El nombre debe tener entre 3 y 20 caracteres")
        if (errors.image) toast.error("La imagen debe ser de tipo .jpg, .jpeg, .png o .webp y no debe pesar mas de 5MB")
        if (errors.category) toast.error("La categoría debe ser seleccionada")


    // handle form submit
    const onSubmit: SubmitHandler<Product> = async (data) => {
        const image = await uploadImage(data.image[0] as File)
        if (!image) return toast.error("Error al subir la imagen, inténtelo mas tarde");

        const product = {
            name: data.name,
            description: data.description,
            image,
            price: data.price,
            category: data.category
        }
        try {
            createProduct.mutate({
                name: product.name,
                description: product.description || "",
                image: product.image,
                price: product.price? parseInt(product.price) : 0,
                categoryId: product.category
            })
            toast.success("Producto creado con éxito")
            setOpen(false)
        }
        catch (error) {
            console.log(error);
            toast.error("Error al crear el producto, inténtelo mas tarde")
        }
    };


    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                    {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className='space-y-4'>
                                            <div>
                                                <label htmlFor="product_name" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Product Name
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        {...register("name")}
                                                        id="product_name"
                                                        className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                                        placeholder="Product name..."
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="product_description" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Product Description
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        {...register("description")}
                                                        id="product_description"
                                                        className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                                        placeholder="Product description..."
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="product_image" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Product Image
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="file"
                                                        {...register("image")}
                                                        id="product_image"
                                                        className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                                        placeholder="Product description..."
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="product_price" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Product Price
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="number"
                                                        {...register("price")}
                                                        id="product_price"
                                                        className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                                        placeholder="Product description..."
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="product_price" className="flex text-sm font-medium leading-6 text-gray-900">
                                                    Product Category
                                                    <button
                                                        type="button"
                                                        className="ml-2 text-sm font-medium text-green-600 hover:text-green-500 focus:outline-none focus:underline transition hover:animate-spin ease-in-out duration-150 "
                                                        onClick={() => {
                                                            getCategories.refetch()
                                                                .then(() => {
                                                                    toast.success("Categorías actualizadas");
                                                                })
                                                                .catch((err) => {
                                                                    toast.error("Error al obtener las categorías, inténtelo mas tarde");
                                                                    console.log(err);
                                                                });
                                                        }}
                                                    >
                                                        <ArrowPathIcon
                                                            className="h-5 w-5"
                                                        />
                                                    </button>
                                                </label>
                                                <div className="mt-2">
                                                    <label htmlFor="product_category" className="sr-only">
                                                        Category
                                                    </label>
                                                    <select
                                                        id="product_category"
                                                        {...register("category")}
                                                        className="relative block w-full rounded-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                                    >
                                                        <option></option>
                                                        {
                                                            categories?.map((category) => (
                                                                <option key={category.id} value={category.id}>{category.name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 sm:mt-6">
                                            <button
                                                type="submit"
                                                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                            >
                                                Create
                                            </button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}
export default CreateProduct;