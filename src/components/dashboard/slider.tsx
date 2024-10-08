//  UI
import { Fragment, type FC, useState, useEffect } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

// Types
import type { Products, Table } from './types'

// Cookies
import { Cookies } from 'typescript-cookie'

// Images
import Image from 'next/image'

interface SliderProps {
    openSlider: boolean
    setSliderOpen: (openSlider: boolean) => void
    selectedTable: Table | null
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Slider: FC<SliderProps> = ({ openSlider, setSliderOpen, selectedTable }) => {
    const [cart, setCart] = useState<Products>([])

    const total = cart?.reduce((acc, item) => acc + item.price, 0)

    useEffect(() => {
        if (selectedTable) {
            const cart = Cookies.get(selectedTable.id.toString()) as string;
            if (!cart) return setCart([]);
            const parsedCart = JSON.parse(cart) as Products;

            setCart(parsedCart)
        }
    }, [selectedTable, openSlider])

    return (
        <Transition.Root show={openSlider} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setSliderOpen}>
                <div className="fixed inset-0" />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="p-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">Carrito de la mesa: </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-green-500"
                                                        onClick={() => setSliderOpen(false)}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-b border-gray-200">
                                            <div className="px-6">
                                                {/* We can add a nav here */}
                                            </div>
                                        </div>
                                        <ul role="list" className="flex-1 divide-y divide-gray-200 overflow-y-auto">
                                            {cart?.map((item) => (
                                                <li key={`product: ${item.id}`}>
                                                    <div className="group relative flex items-center px-5 py-6">
                                                        <div className="-m-1 block flex-1 p-1">
                                                            <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true" />
                                                            <div className="relative flex min-w-0 flex-1 items-center">
                                                                <span className="relative inline-block flex-shrink-0">
                                                                    <Image
                                                                        className="h-10 w-10 rounded-full"
                                                                        src={item.image}
                                                                        alt={`product: ${item.name}`}
                                                                        width={50}
                                                                        height={50}
                                                                    />
                                                                </span>
                                                                <div className="ml-4 truncate">
                                                                    <p className="truncate text-sm font-medium text-gray-900">{item.name}</p>
                                                                    <p className="truncate text-sm text-gray-500">{`$ ${item.price}`}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Menu as="div" className="relative ml-2 inline-block flex-shrink-0 text-left">
                                                            <Menu.Button className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                                                                <span className="sr-only">Open options menu</span>
                                                                <span className="flex h-full w-full items-center justify-center rounded-full">
                                                                    <EllipsisVerticalIcon
                                                                        className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                        aria-hidden="true"
                                                                    />
                                                                </span>
                                                            </Menu.Button>
                                                            <Transition
                                                                as={Fragment}
                                                                enter="transition ease-out duration-100"
                                                                enterFrom="transform opacity-0 scale-95"
                                                                enterTo="transform opacity-100 scale-100"
                                                                leave="transition ease-in duration-75"
                                                                leaveFrom="transform opacity-100 scale-100"
                                                                leaveTo="transform opacity-0 scale-95"
                                                            >
                                                                <Menu.Items className="absolute right-9 top-0 z-10 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                    <div className="py-1">
                                                                        <Menu.Item>
                                                                            {({ active }) => (
                                                                                <a
                                                                                    href="#"
                                                                                    className={classNames(
                                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                        'block px-4 py-2 text-sm'
                                                                                    )}
                                                                                >
                                                                                    View profile
                                                                                </a>
                                                                            )}
                                                                        </Menu.Item>
                                                                        <Menu.Item>
                                                                            {({ active }) => (
                                                                                <a
                                                                                    href="#"
                                                                                    className={classNames(
                                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                        'block px-4 py-2 text-sm'
                                                                                    )}
                                                                                >
                                                                                    Send message
                                                                                </a>
                                                                            )}
                                                                        </Menu.Item>
                                                                    </div>
                                                                </Menu.Items>
                                                            </Transition>
                                                        </Menu>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className='bg-gray-200 h-auto w-full py-2 px-4'>
                                            <section>
                                                <h2 id="summary-heading" className="sr-only">
                                                    Order summary
                                                </h2>

                                                <div>
                                                    <dl className="space-y-4">
                                                        <div className="flex items-center justify-between">
                                                            <dt className="text-base font-medium text-gray-900">Subtotal</dt>
                                                            <dd className="ml-4 text-lg font-medium text-gray-900">${total}</dd>
                                                        </div>
                                                    </dl>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        El precio no incluye el 10% de propina.
                                                    </p>
                                                </div>

                                                <div className="mt-10">
                                                    <button
                                                        type="button"
                                                        className="w-full rounded-md border border-transparent bg-green-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                                        onClick={() => setSliderOpen(false)}
                                                    >
                                                        Checkout
                                                    </button>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Slider;
