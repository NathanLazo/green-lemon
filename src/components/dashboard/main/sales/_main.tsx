// UI
import { type FC } from 'react'
import { HomeIcon } from '@heroicons/react/20/solid'
import toast from 'react-hot-toast'

// components
import BranchesComponent from './items/branches'
import ProductsComponent from './items/products'

import type { Branch, Table } from '../../types'
import Tables3d from './items/tables3d';


interface mainProps {
    branches: Branch[],

    setSliderOpen: (value: boolean) => void

    setSelectedBranch: (value: Branch | null) => void
    setSelectedTable: (value: Table | null) => void

    selectedBranch: Branch | null
    selectedTable: Table | null
}



const Main: FC<mainProps> = ({
    branches,
    setSliderOpen,
    setSelectedBranch,
    setSelectedTable,
    selectedBranch,
    selectedTable,
}) => {

    const pages = [
        selectedBranch &&
        {
            name: selectedBranch.name,
            function: () => {
                setSelectedTable(null)
            }
        },
        selectedTable &&
        {
            name: selectedTable.name,
            function: () => {
                toast(
                    `${selectedTable.name} seleccionada`,
                    {
                        icon: '🍽',
                    }
                )
            }
        },
    ]


    return (
        <>
            <main className="flex-1">
                {/* Page title & actions */}
                <div className="border-b border-zinc-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                    <div className="min-w-0 flex-1 my-2">
                        <h1 className="text-lg font-medium leading-6 text-zinc-900 sm:truncate">Punto de venta</h1>
                    </div>
                    <div className="mt-4 flex sm:mt-0 sm:ml-4">
                        {
                            selectedTable &&
                            <button
                                type="button"
                                className="order-0 inline-flex items-center rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 sm:order-1 sm:ml-3"
                                onClick={() => setSliderOpen(true)}
                            >
                                Ver total
                            </button>
                        }
                    </div>
                </div>
                {/* Breadcrumb */}
                <nav className="flex border-b border-gray-200 bg-white" aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8">
                        <li className="flex">
                            <div className="flex items-center">
                                <button className="text-gray-400 hover:text-gray-500"
                                    onClick={() => { setSelectedBranch(null); setSelectedTable(null) }}
                                >
                                    <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                                    <span className="sr-only">Home</span>
                                </button>
                            </div>
                        </li>
                        {pages?.map((page, index) => (
                            <li key={`page #${index}`} className="flex">
                                <div className="flex items-center">
                                    <svg
                                        className="h-full w-6 flex-shrink-0 text-gray-200"
                                        viewBox="0 0 24 44"
                                        preserveAspectRatio="none"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                                    </svg>
                                    <button
                                        className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                        onClick={() => page?.function()}
                                    >
                                        {page?.name}
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ol>
                </nav>
                {/* Items components (you can find them on items folder) */}
                {!selectedBranch &&
                    <BranchesComponent branches={branches} setSelectedBranch={setSelectedBranch} />}

                {selectedBranch && !selectedTable &&
                    <Tables3d
                        selectedBranch={selectedBranch}
                        setSelectedTable={setSelectedTable}
                    />
                }

                {selectedBranch && selectedTable &&
                    <ProductsComponent selectedTable={selectedTable} />}

            </main>
        </>
    );
}
export default Main;

