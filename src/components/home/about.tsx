/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// Icons
import { TbIceCream2 } from 'react-icons/tb'
import { BiBaguette } from 'react-icons/bi'
import { TbBrandCakephp } from 'react-icons/tb'

// Images
import Image from 'next/image'
import IceCreamImage from '@public/images/home/ice-cream.svg'

const features = [
    {
        name: 'Helado frito.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: TbIceCream2,
    },
    {
        name: 'Baguettes.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: BiBaguette,
    },
    {
        name: 'Cheesecakes y pasteles.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: TbBrandCakephp,
    },
]

export default function Example() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:ml-auto lg:pt-4 lg:pl-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-lime-600">Una mejor experiencia</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">Nuestras especialidades</p>
                            <p className="mt-6 text-lg leading-8 text-green-600">

                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-green-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-green-900">
                                            <feature.icon className="absolute top-1 left-1 h-5 w-5 text-lime-600" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="flex items-start justify-end lg:order-first">
                        <Image
                            src={IceCreamImage}
                            alt="Ice cream"
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

