// UI
import { type FC, Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { toast } from 'react-hot-toast';

// API
import { api } from '~/utils/api';

interface createCategoryProps {
    open: boolean,
    setOpen: (value: boolean) => void
}

const CreateCategory: FC<createCategoryProps> = ({
    open,
    setOpen,
}) => {
    const [categoryName, setCategoryName] = useState<string>("")

    const categoryMutation = api.products.createCategory.useMutation()

    const handleCreateCategory = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (categoryName == "") return toast.error("La casilla no puede ir vacía");
        try {
            categoryMutation.mutate({
                name: categoryName
            })
            toast.success("Se ha creado con éxito")
        } catch (error) {
            console.log(error);
            toast.error("Hubo un erro al insertar la categoría")
        }
        setOpen(false);
        setCategoryName("")
    }

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
                                    <form onSubmit={handleCreateCategory}>
                                        <div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Category name
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="category"
                                                        name="category"
                                                        id="category"
                                                        className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                                        placeholder="Category..."
                                                        onChange={(e) => setCategoryName(e.target.value)}
                                                    />
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
export default CreateCategory;
