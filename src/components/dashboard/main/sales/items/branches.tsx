import type { FC } from 'react';
import type { Branch } from '../../../types';

import { BuildingStorefrontIcon } from '@heroicons/react/20/solid'


interface branchesProps {
    branches: Branch[];
    setSelectedBranch: (branch: Branch) => void;
}

const branches: FC<branchesProps> = ({
    branches,
    setSelectedBranch
}) => {
    return (
        <>
            {
                <div className="mt-6 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-sm font-medium text-zinc-900">Sucursales</h2>
                    <section className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
                        {branches.map((branch) => (
                            <button key={`branch: ${branch.name}`} className="relative col-span-1 flex rounded-md shadow-sm"
                                onClick={() => {
                                    setSelectedBranch(branch);
                                }}
                            >
                                <>
                                    <div
                                        className='flex bg-zinc-200 w-28 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                                    >
                                        <BuildingStorefrontIcon className="h-20 w-20" aria-hidden="true" />
                                    </div>
                                    <div className="h-full flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-zinc-200 bg-white">
                                        <div className="flex-1 truncate px-4 py-2 text-sm text-left ">
                                            <p className="font-medium text-zinc-900 hover:text-zinc-600">
                                                {branch.name}
                                            </p>
                                            <p className="text-zinc-500 line-clamp-3">{branch.phone}</p>
                                        </div>
                                    </div>
                                </>
                            </button>
                        ))}
                    </section>
                </div>
            }
        </>
    );
}
export default branches;