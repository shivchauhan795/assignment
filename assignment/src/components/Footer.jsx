import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Footer = () => {
    const [email, setEmail] = useState('');
    const backendURL = import.meta.env.VITE_BackendURL || 'http://localhost:3000/';
    const handleSubscribe = async (e) => {
        e.preventDefault();

        if (!email) {
            toast.warn('Please enter an email address.', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            return;
        }

        try {
            const response = await fetch(`${backendURL}api/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Subscribed successfully!', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setEmail('');
            } else {
                toast.error('Failed to subscribe!', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (error) {
            toast.error('Error while subscribing!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='bg-white/20 backdrop-blur-lg shadow-2xl shadow-slate-700 text-black flex flex-col pb-1'>

                <div className='flex justify-evenly p-5 gap-9 pb-10 flex-wrap'>
                    <div className='text-xl font-bold text-center flex flex-col gap-8'>
                        Socail Media Links
                        <div className='flex justify-center gap-4'>

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='text-xl font-bold text-center flex flex-col gap-8'>
                        Subscribe to our Newsletter:
                        <div >
                            <form className='flex flex-wrap justify-center gap-4' onSubmit={handleSubscribe}>

                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className='font-normal w-60 text-base p-1 pl-2 rounded-md border border-black' />
                                <button type="submit" className='font-medium text-base p-2 px-3 rounded-md bg-slate-500 text-white'>Subscribe</button>

                            </form>
                        </div>
                    </div>
                    <div className='text-xl font-bold text-center flex flex-col gap-8'>
                        Contact Us at:
                        <div className='font-normal'>
                            admin@gmail.com
                        </div>
                    </div>
                </div>
                <div className='text-base text-center font-bold'>&copy; 2025 Your Company. All rights reserved.</div>
            </div>
        </>
    )
}

export default Footer
