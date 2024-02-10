import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [step, setStep] = useState(0);

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    const handleChangeStep = (event) => {
        event.preventDefault();
        setStep(1);
    }

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit} className="mt-6">
                {step == 0 ? <div className="my-5 text-sm">
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)} id="emailaddress" className="rounded-sm px-4 py-3 mt-3 focus:outline-none w-full" placeholder="Email Address" />
                    <InputError message={errors.email} className="mt-2" />
                </div> : ''}
                {step == 1 ? <div className="my-5 text-sm">
                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none w-full" placeholder="Password" />
                    <InputError message={errors.password} className="mt-2" />
                </div> : ''}
                {step == 0 ? <button type="button" onClick={handleChangeStep} className="block text-center text-white main-bg-color p-3 duration-300 rounded-sm hover:bg-black w-full">Continue</button> :
                    <button disabled={processing} type="submit" className="block text-center text-white main-bg-color p-3 duration-300 rounded-sm hover:bg-black w-full">Log In</button>}
            </form>
        </GuestLayout>
    );
}
