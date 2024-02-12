import ApplicationLogo from '@/Components/ApplicationLogo';
import SideBarUserMenu from '@/Components/SideBarUserMenu';
import Table from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Dashboard({ auth, files }) {

    const [search, setSearch] = useState('');

    const [filesStored, setFilesStored] = useState([...files]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        if (e.target.value !== '') {
            const keyword = e.target.value.toLowerCase();
            setSearchKeyword(keyword);
            const results = files.filter(item =>
                item.name.toLowerCase().includes(keyword)
            );
            setFilesStored([...results]);
        } else {
            setFilesStored([...files]);
        }
    }

    return (
        <div>
            <Head title="Dashboard" />
            <div className="flex">
                <div className="w-1/4 flex flex-col justify-between min-h-screen p-8 border-r-2 border-gray-200">
                    <div>
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                            </Link>
                        </div>

                        <ul className="space-y-2 font-medium mt-8">
                            <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Templates</span>
                                    <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                                </a>
                            </li>
                        </ul>

                    </div>

                    <SideBarUserMenu user={auth.user} />
                </div>

                <div className="w-3/4 flex min-h-screen p-8 flex-col">
                    <div className="h-10 w-1/2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                        <input
                            type="text"
                            name="search"
                            id="search"
                            autoComplete="username"
                            value={search}
                            onChange={handleSearch}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="write to search"
                        />
                    </div>
                    <Table data={filesStored} />

                    <Link
                        href={route('document-create')}
                        className="w-1/2 flex items-start ps-3 pe-4 py-2 border-4 rounded bg-blue-400 border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300
                            text-base font-medium focus:outline-none transition duration-150 ease-in-out"
                    >
                        Create
                    </Link>
                </div>

            </div>
        </ div >
    );
}
