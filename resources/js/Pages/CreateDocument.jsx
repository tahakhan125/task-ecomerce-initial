import ApplicationLogo from '@/Components/ApplicationLogo';
import Form from '@/Components/Form';
import SideBarUserMenu from '@/Components/SideBarUserMenu';
import Table from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        // <AuthenticatedLayout
        //     user={auth.user}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        // >
        <div className="flex flex-col">
            <Head title="Dashboard" />
            <div className="w-full flex flex-col justify-between p-8 border-r-2 border-gray-200">
                <div>
                    <div className="shrink-0 flex items-center">
                        <Link href="/">
                            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                        </Link>
                    </div>

                </div>
            </div>
            <div className="flex">
                <div className="flex w-1/2 p-10">
                    <Form />
                </div>
                <div className="flex w-1/2">
                    <div>

                    </div>
                </div>
            </div>
            {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div> */}
        </ div >
        // </AuthenticatedLayout>
    );
}
