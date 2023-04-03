import { useState } from 'react'
import { Cog6ToothIcon, ClockIcon, HomeIcon, ChartBarSquareIcon } from '@heroicons/react/24/outline'

// components
import MobileSidebar from './navs/mobile/MobileSidebar'
import MobileHeader from './navs/mobile/MobileHeader'
import DesktopSidebar from './navs/desktop/DesktopSidebar'
import Slider from './slider'
import Sales from './main/sales/_main'
import ProductsConfig from './main/products/_main'


import type { Branch, Table } from './types'




const navigation = [
    { id: 1, name: 'Home', icon: HomeIcon },
    { id: 2, name: 'Corte', icon: ClockIcon },
    { id: 3, name: 'Métricas', icon: ChartBarSquareIcon },
    { id: 4, name: 'Productos config', icon: Cog6ToothIcon },
    { id: 5, name: 'Sucursales config', icon: Cog6ToothIcon },
]

const branches: Branch[] = [
    {
        id: 1,
        name: "Sucursal principal",
        address: "Republica de ecuador 321",
        phone: "6141292924",
        tables: [
            {
                id: 1,
                name: "Mesa 1",
            },
            {
                id: 2,
                name: "Mesa 2",
            },
            {
                id: 3,
                name: "Mesa 3",
            },
            {
                id: 4,
                name: "Mesa 4",
            },
            {
                id: 5,
                name: "Mesa 5",
            },
            {
                id: 6,
                name: "Mesa 6",
            },
            {
                id: 7,
                name: "Mesa 7",
            },
            {
                id: 8,
                name: "Mesa 8",
            },
            {
                id: 9,
                name: "Mesa 9",
            },
            {
                id: 10,
                name: "Mesa 10",
            },
        ]
    }
]


export default function Example() {
    // UI
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [openSlider, setSliderOpen] = useState(false)

    // Navigation
    const [currentNavigation, setCurrentNavigation] = useState(1)

    // Selected items
    const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null)
    const [selectedTable, setSelectedTable] = useState<Table | null>(null)
    

    return (
        <>
            <Slider
                openSlider={openSlider}
                setSliderOpen={setSliderOpen}

                selectedTable={selectedTable}
            />

            <div className="min-h-full">

                <MobileSidebar
                    navigation={navigation}

                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}

                    currentNavigation={currentNavigation}
                    setCurrentNavigation={setCurrentNavigation}
                />

                <DesktopSidebar
                    navigation={navigation}
                    
                    setCurrentNavigation={setCurrentNavigation}
                    currentNavigation={currentNavigation}
                />

                {/* Main column */}
                <div className="flex flex-col lg:pl-64">
                    <MobileHeader
                        setSidebarOpen={setSidebarOpen}
                    />

                    {
                        currentNavigation == 1 &&
                        <Sales
                            // Items
                            branches={branches}
                            // UI
                            setSliderOpen={setSliderOpen}
                            // set selected items
                            setSelectedBranch={setSelectedBranch}
                            setSelectedTable={setSelectedTable}
                            // selected items
                            selectedBranch={selectedBranch}
                            selectedTable={selectedTable}
                        />
                    }
                    {
                        currentNavigation == 4 &&
                        <ProductsConfig />
                    }

                </div>
            </div>
        </>
    )
}
