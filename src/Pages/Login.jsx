import React from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import bgimg from '../assests/aerial-view-of-circular-water-treatment-tank.jpg'
import logo from '../assests/eiecs_logo.png'

export default function Login() {
    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 font-montserrat rounded-3xl">
            {/* <img src={bgimg} alt="" className='absolute inset-0 w-full h-full object-cover z-0 opacity-50' /> */}
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="flex w-2/3 max-w-4xl bg-white bg-opacity-95 shadow-inner rounded-[10px] shadow-gray-200 z-10">
                    <div className="w-1/2 p-2 ">
                        <form onSubmit={onSubmit}>
                            <div className="py-10">
                                <h2 className="text-3xl font-extrabold">Login</h2>
                            </div>

                            <p className="text-gray-600 text-lg my-3">Please Login to view your dashboard</p>
                            <div className="flex flex-col items-center">
                                <div className="bg-gray-100 w-80 p-2 flex items-center mb-4">
                                    <input
                                        type="" name="" placeholder="UserID" required
                                        className="bg-gray-100 outline-none text-m flex-1 m-1 px-2" />
                                </div>
                                <div className="bg-gray-100 w-80 p-2 flex items-center mb-4">
                                    <input {...register("password")}
                                        type="password" name="password" placeholder="Password" required
                                        className="bg-gray-100 outline-none text-m flex-1 m-1 px-2" />
                                </div>

                                <div>
                                    <button className='w- py-1 my-4 bg-[#263e45] hover:bg-[#28abbc]
                                       w-full p-3  text-white rounded-lg tracking-widest'>
                                        Log In
                                    </button>
                                </div>
                                <div>
                                    <a href="/" className='text-gray-500 text-[17px] hover:text-gray-600'>
                                        Visit our social media
                                    </a>
                                </div>
                                <div className="flex justify-center my-2 mb-12 gap-5">
                                <a href="/" className="h-12 w-12 text-[#333333] border border-gray-300 rounded-full p-3 hover:bg-gray-100">
                                    <FontAwesomeIcon icon={faFacebookF} className="font text-[20px]" />
                                </a>
                                <a href="/" className="h-12 w-12 text-[#333333] border border-gray-300 rounded-full p-3 hover:bg-gray-100">
                                    <FontAwesomeIcon icon={faInstagram} className="font text-[20px]" />
                                </a>
                                <a href="/" className="h-12 w-12 text-[#333333] border border-gray-300 rounded-full p-3 hover:bg-gray-100">
                                    <FontAwesomeIcon icon={faYoutube} className="font text-[20px]" />
                                </a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-1/2 bg-gradient-to-r from-[#6fb0a5]   to-[rgb(75,135,146)] text-white rounded-r-[10px] py-48 px-14">
                        {/* <img src={logo} alt="" className='' /> */}
                        <h2 className="text-3xl font-extrabold mb-4">
                            Welcome Back! 
                        </h2>
                        <p>
                        EIECS Online Continuous Emission / Effluent Monitoring System.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}