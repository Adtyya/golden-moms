import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState, useEffect } from 'react'

export default function Home() {
    //test
    const { user } = useAuth({ middleware: 'guest' })
    const [service, setService] = useState(null)

    useEffect(() => {
        console.log('Service changed')
    }, [service])

    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className="relative flex items-top justify-start min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    {user ? (
                        <Link href="/dashboard">
                            <a className="ml-4 text-sm text-gray-700 underline">
                                Dashboard
                            </a>
                        </Link>
                    ) : (
                        <>
                            <Link href="/login">
                                <a className="text-sm text-gray-700 underline">
                                    Login
                                </a>
                            </Link>

                            <Link href="/register">
                                <a className="ml-4 text-sm text-gray-700 underline">
                                    Register
                                </a>
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 text-center">
                    <h1 className="text-red-500 text-4xl font-semibold">
                        Bengkel Roda Maju
                    </h1>
                    <h1 className="text-gray-700 text-lg">
                        Buat reservasi service kendaraan anda
                    </h1>
                    <form>
                        <div className="m-3">
                            <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-400 duration-300">
                                Pilih kategori service
                            </label>
                            <select
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onClick={e => setService(e.target.value)}>
                                <option defaultValue={null}>
                                    Kategori service
                                </option>
                                <option value="0">Service ringan</option>
                                <option value="1">Service berat</option>
                                <option value="2">Ganti sparepart</option>
                            </select>
                        </div>
                        <div className="m-3">
                            {service == 0 && (
                                <div className="duration-300">
                                    <label className="w-full block">
                                        Masukan kilometer kendaraan anda
                                    </label>
                                    <input type="number" />
                                </div>
                            )}
                        </div>
                        <div className="m-3">
                            {service == 1 && (
                                <div>
                                    <label className="w-full block">
                                        Masukan jenis service
                                    </label>
                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option defaultValue={null}>
                                            Pilih jenis service
                                        </option>
                                        <option value="0">Turun mesin</option>
                                        <option value="1">
                                            Cat ulang body mobil
                                        </option>
                                    </select>
                                </div>
                            )}
                        </div>
                        <div className="m-3">
                            {service == 2 && (
                                <div>
                                    <label className="w-full block">
                                        Sparepart yang ingin diganti
                                    </label>
                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option defaultValue={null}>
                                            Pilih sparepart
                                        </option>
                                        <option value="0">Ban</option>
                                        <option value="1">Velg</option>
                                        <option value="2">Kaca</option>
                                    </select>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
