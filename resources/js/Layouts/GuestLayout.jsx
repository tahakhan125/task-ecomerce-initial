import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 main-bg-color">

            < div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md" >
                <div className="w-full px-8 rounded-xl">
                    <div className="flex flex-col justify-center items-center">
                        <ApplicationLogo className="w-50 h-20 fill-current text-gray-500" />
                        <h1 className="text-3xl text-gray-700">Welcome</h1>
                        <p className="justify-content-center text-center mt-4">Log in to td-staging to continue to turbodocx-staging.</p>
                    </div>
                    {children}

                    <div className="flex md:justify-between justify-center items-center mt-5">
                        <p className="text-sm text-center font-light text-gray-400"> Don't have an account? <a href="#" className="text-black font-medium"> Create One </a>  </p>
                    </div>

                    <div className="w-full mt-5">

                        <div className="relative mb-2">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">
                                    OR
                                </span>
                            </div>
                        </div>

                        <div>
                            <button
                                className="w-full font-bold shadow-sm py-3 border text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                <div className=" p-2 rounded-full">
                                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                                        <path
                                            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                            fill="#4285f4" />
                                        <path
                                            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                            fill="#34a853" />
                                        <path
                                            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                            fill="#fbbc04" />
                                        <path
                                            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                            fill="#ea4335" />
                                    </svg>
                                </div>
                                <span className="ml-4">
                                    Continue with Google
                                </span>
                            </button>

                        </div>
                    </div>


                </div>
            </div >
        </div>
    );
}
