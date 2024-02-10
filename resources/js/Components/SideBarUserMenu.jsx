import { useState } from "react";
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

export default function SideBarUserMenu({user}) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    return (
        <div className="relative w-full">
                <button onClick={() => setShowingNavigationDropdown((previousState) => !previousState)} type="button" className="w-full relative flex rounded-full text-center items-center text-sm focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-gray-100" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <span className="ml-8">{user.name}</span>
                </button>

            <div className={(showingNavigationDropdown ? 'border block absolute bottom-0 z-10 mt-2 w-48 origin-bottom-left bg-white' : 'hidden')}>
                

                <div className="pt-4 pb-1">
                    <div className="px-4">
                        <div className="font-medium text-base text-gray-800">{user.name}</div>
                        <div className="font-medium text-sm text-gray-500">{user.email}</div>
                    </div>

                    <div className="mt-3 space-y-1">
                        <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                        <ResponsiveNavLink method="post" href={route('logout')} as="button">
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
