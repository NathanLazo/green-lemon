
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { signIn, signOut } from 'next-auth/react'
import Cookies from "cookies-ts"

export default function Example() {

    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=lime&shade=600"
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-green-900">
                            Admin Sign in
                        </h2>
                        <p className="mt-2 text-center text-sm text-green-600">
                            <span className="font-medium text-lime-600 hover:text-lime-500">
                                This can only be accessed by administrators
                            </span>
                        </p>
                    </div>
                    <div className="mt-8 space-y-6">
                        <div>
                            <button
                                onClick={() => {
                                    signOut({ redirect: false })
                                        .then(() => {
                                            signIn('google', { callbackUrl: "http://localhost:3000/dashboard" })
                                                .then((res) => console.log(res))
                                                .catch((err) => console.log(err))
                                        })
                                        .catch((err) => console.log(err))
                                }}
                                className="group relative flex w-full justify-center rounded-md bg-lime-600 py-2 px-3 text-sm font-semibold text-white hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-lime-500 group-hover:text-lime-400" aria-hidden="true" />
                                </span>
                                Sign in with google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

