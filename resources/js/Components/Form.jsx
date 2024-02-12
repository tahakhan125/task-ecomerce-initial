import { useForm } from "@inertiajs/react";
import InputError from "./InputError";

export default function Form() {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        activities: '',
        price: 0,
        shorttermbextsteps: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('document-store'));
    };

    return (
        <form onSubmit={submit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Fill in the deliver able variables.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Deliverable Name
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        autoComplete="username"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="janesmith"
                                    />
                                </div>
                                    <InputError message={errors.name} className="mt-2" />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="activities" className="block text-sm font-medium leading-6 text-gray-900">
                                Activites List {"{activities list}"}
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="activities"
                                        id="activities"
                                        autoComplete="activities"
                                        value={data.activities}
                                        onChange={(e) => setData('activities', e.target.value)}
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="activities"
                                    />
                                </div>
                                    <InputError message={errors.activities} className="mt-2" />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                Price {"{Price}"}
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="number"
                                        name="price"
                                        id="price"
                                        autoComplete="price"
                                        value={data.price}
                                        onChange={(e) => setData('price', e.target.value)}
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="price"
                                    />
                                </div>
                                    <InputError message={errors.price} className="mt-2" />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="shorttermbextsteps" className="block text-sm font-medium leading-6 text-gray-900">
                                ShortTermNextSteps {"{ShortTermNextSteps}"}
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="shorttermbextsteps"
                                        id="shorttermbextsteps"
                                        autoComplete="example value"
                                        value={data.shorttermbextsteps}
                                        onChange={(e) => setData('shorttermbextsteps', e.target.value)}
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="example value"
                                    />
                                </div>
                                    <InputError message={errors.shorttermbextsteps} className="mt-2" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}
