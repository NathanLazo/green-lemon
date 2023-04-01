const faqs = [
    {
        question: 'How do you make holy water?',
        answer:
            'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    // More questions...
]

export default function Example() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:py-40 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-5">
                        <h2 className="text-2xl font-bold leading-10 tracking-tight text-green-900">Preguntas frecuentes</h2>
                        <p className="mt-4 text-base leading-7 text-green-600">
                            No encuentras una respuesta o no encuentras lo que buscabas? contactanos a este numero{' '}
                            <span className="font-semibold text-lime-600 hover:text-lime-500">
                                614-129-2924
                            </span>{' '}
                            .
                        </p>
                    </div>
                    <div className="mt-10 lg:col-span-7 lg:mt-0">
                        <dl className="space-y-10">
                            {faqs.map((faq) => (
                                <div key={faq.question}>
                                    <dt className="text-base font-semibold leading-7 text-green-900">{faq.question}</dt>
                                    <dd className="mt-2 text-base leading-7 text-green-600">{faq.answer}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
