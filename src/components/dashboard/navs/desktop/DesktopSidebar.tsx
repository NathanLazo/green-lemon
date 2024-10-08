//  UI
import { type FC, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import {
    ChevronUpDownIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'

// Types
import type { navigation } from '../../types';

//Auth
import { signOut, useSession } from 'next-auth/react'

// Images
import Image from 'next/image';
import CompanyLogo from '@images/company/logo.png';

interface DesktopSidebarProps {
    navigation: navigation
    setCurrentNavigation: (value: number) => void
    currentNavigation: number
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const DesktopSidebar: FC<DesktopSidebarProps> = ({
    navigation,
    setCurrentNavigation,
    currentNavigation,
}) => {

    const { data: session } = useSession()



    return (
        <>
            <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-zinc-200 lg:bg-zinc-100 lg:pt-5 lg:pb-4">
                <div className="flex flex-shrink-0 items-center px-6">
                    <Image
                        src={CompanyLogo}
                        alt="Green Lemon Logo"
                        width={60}
                        height={60}
                    />
                </div>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="mt-5 flex h-0 flex-1 flex-col overflow-y-auto pt-1">
                    {/* User account dropdown */}
                    <Menu as="div" className="relative inline-block px-3 text-left">
                        <div>
                            <Menu.Button className="group w-full rounded-md bg-zinc-100 px-3.5 py-2 text-left text-sm font-medium text-zinc-700 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-zinc-100">
                                <span className="flex w-full items-center justify-between">
                                    <span className="flex min-w-0 items-center justify-between space-x-3">
                                        <Image
                                            className="h-10 w-10 flex-shrink-0 rounded-full bg-zinc-300"
                                            src={session?.user?.image || ''}
                                            alt={session?.user?.name || ''}
                                            width={40}
                                            height={40}
                                        />
                                        <span className="flex min-w-0 flex-1 flex-col">
                                            <span className="truncate text-sm font-medium text-zinc-900">{session?.user?.name || ''}</span>
                                            <span className="truncate text-sm text-zinc-500">{session?.user?.email || ''}</span>
                                        </span>
                                    </span>
                                    <ChevronUpDownIcon
                                        className="h-5 w-5 flex-shrink-0 text-zinc-400 group-hover:text-zinc-500"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 left-0 z-10 mx-3 mt-1 origin-top divide-y divide-zinc-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Notifications
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={() => {
                                                    signOut()
                                                        .catch((err) => console.error(err))
                                                }}
                                                className={classNames(
                                                    active ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-700',
                                                    'block px-4 py-2 text-sm w-full text-left'
                                                )}
                                            >
                                                Logout
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    {/* Sidebar Search */}
                    <div className="mt-5 px-3">
                        <label htmlFor="search" className="sr-only">
                            Search
                        </label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                            <div
                                className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                aria-hidden="true"
                            >
                                <MagnifyingGlassIcon className="h-4 w-4 text-zinc-400" aria-hidden="true" />
                            </div>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                className="block w-full rounded-md border-0 py-1.5 pl-9 ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    {/* Navigation */}
                    <nav className="mt-6 px-3">
                        <div className="space-y-1">
                            {navigation.map((item) => (
                                <button
                                    key={item.name}
                                    className={classNames(
                                        item.id == currentNavigation ? 'bg-zinc-200 text-zinc-900' : 'text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium'
                                    )}
                                    onClick={() => {
                                        setCurrentNavigation(item.id)
                                    }}
                                >
                                    <item.icon
                                        className={classNames(
                                            item.id == currentNavigation ? 'text-zinc-500' : 'text-zinc-400 group-hover:text-zinc-500',
                                            'mr-3 h-6 w-6 flex-shrink-0'
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
export default DesktopSidebar;