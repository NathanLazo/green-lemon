import { useState } from 'react'
import { Cog6ToothIcon, ClockIcon, HomeIcon, ChartBarSquareIcon } from '@heroicons/react/24/outline'

// components
import MobileSidebar from './mobile/MobileSidebar'
import DesktopSidebar from './desktop/DesktopSidebar'
import MobileHeader from './mobile/MobileHeader'
import Main from './main'
import Slider from './slider'
import type { Branch, CategoriesWithProducts, Products, Table } from './types'


const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: true },
    { name: 'Corte', href: '#', icon: ClockIcon, current: false },
    { name: 'Métricas', href: '#', icon: ChartBarSquareIcon, current: false },
    { name: 'Productos config', href: '#', icon: Cog6ToothIcon, current: false },
    { name: 'Sucursales config', href: '#', icon: Cog6ToothIcon, current: false },
]



const categoriesWithProducts: CategoriesWithProducts = [
    {
        category: "ice-cream",
        products: [
            {
                id: 1,
                title: 'Nieve chica',
                description: "Lorem test",
                image: "asd",
                price: 10,
            },
        ]
    },
]



const branches: Branch[] = [
    {
        id: 1,
        name: "Sucursal 1",
        address: "Calle 1",
        phone: "1234567890",
        tables: [
            {
                id: 1,
                name: "Mesa 1",
            }
        ]
    }
]


export default function Example() {
    // UI
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [openSlider, setSliderOpen] = useState(true)

    // Selected items
    const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null)
    const [selectedTable, setSelectedTable] = useState<Table | null>(null)

    return (
        <>
            <Slider
                openSlider={openSlider}
                setSliderOpen={setSliderOpen}
            />

            <div className="min-h-full">

                <MobileSidebar
                    navigation={navigation}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

                <DesktopSidebar
                    navigation={navigation}
                />

                {/* Main column */}
                <div className="flex flex-col lg:pl-64">
                    <MobileHeader
                        setSidebarOpen={setSidebarOpen}
                    />

                    <Main
                        // Items
                        branches={branches}
                        categoriesWithProducts={categoriesWithProducts}
                        // UI
                        setSliderOpen={setSliderOpen}
                        // set selected items
                        setSelectedBranch={setSelectedBranch}
                        setSelectedTable={setSelectedTable}
                        // selected items
                        selectedBranch={selectedBranch}
                        selectedTable={selectedTable}
                    />

                </div>
            </div>
        </>
    )
}
