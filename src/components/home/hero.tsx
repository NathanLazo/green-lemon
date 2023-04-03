import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Link from 'next/link'
import Image from 'next/image'

import CakeImage from '@public/images/home/pastel.jpg'

const navigation = [
    { name: 'Productos', href: '#' },
    { name: 'Ubicaciones', href: '#' },
    { name: 'Sobre nosotros', href: '#' },
    { name: 'Log in', href: '/login' },
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <div className="bg-white">
                <header className="absolute inset-x-0 top-0 z-50">
                    {/* Desktop */}
                    <div className="mx-auto max-w-7xl">
                        <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
                            <nav className="flex items-center justify-between lg:justify-start" aria-label="Global">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Green Lemon</span>
                                    <img
                                        alt="Your Company"
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=lime&shade=600"
                                    />
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-green-700 lg:hidden"
                                    onClick={() => setMobileMenuOpen(true)}
                                >
                                    <span className="sr-only">Abrir el menú principal</span>
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                </button>
                                <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                                    {navigation.map((item) => (
                                        <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-green-900 hover:text-green-700">
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </nav>
                        </div>
                    </div>
                    {/* Mobile */}
                    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-50" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-green-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Green Lemon</span>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=lime&shade=600"
                                        alt=""
                                    />
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-green-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-green-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-green-900 hover:bg-green-50"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        <Link
                                            href="/login"
                                            className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-green-900 hover:bg-green-50"
                                        >
                                            Log in
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </header>

                <div className="relative">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                            <svg
                                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <polygon points="0,0 90,0 50,100 0,100" />
                            </svg>

                            <div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
                                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                                    <div className="hidden sm:mb-10 sm:flex">
                                        <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-green-500 ring-1 ring-green-900/10 hover:ring-green-900/20">
                                            Somos una empresa 100% chihuahuense.{' '}
                                            <a href="#" className="whitespace-nowrap font-semibold text-lime-600">
                                                <span className="absolute inset-0" aria-hidden="true" />
                                                Lee mas aquí <span aria-hidden="true">&rarr;</span>
                                            </a>
                                        </div>
                                    </div>
                                    <h1 className="text-4xl font-bold tracking-tight text-green-900 sm:text-6xl">
                                        Green Lemon Chihuahua<span className="text-lg">®</span>
                                    </h1>
                                    <p className="mt-6 text-lg leading-8 text-green-600">
                                        Nuestra empresa es la opción perfecta para aquellos amantes de los
                                        sabores auténticos y la alta calidad gastronómica.
                                    </p>
                                    <div className="mt-10 flex items-center gap-x-6">
                                        <a
                                            href="#"
                                            className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                                        >
                                            Conócenos
                                        </a>
                                        <a href="#" className="text-sm font-semibold leading-6 text-green-900 hover:text-green-700">
                                            Leer más <span aria-hidden="true">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-600 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 opacity-5 lg:opacity-100">
                        <Image
                            src={CakeImage}
                            alt="Green Lemon Chihuahua"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            priority
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
