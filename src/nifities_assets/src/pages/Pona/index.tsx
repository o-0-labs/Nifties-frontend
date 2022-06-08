import React from 'react';

export default function Pona() {
    return (
        <div className='w-screen my-[2.06rem] px-[2.92rem] text-center'>
            <section>
                <div className="bg-gray-300 mx-[2.94rem] h-[25.56rem] flex flex-col justify-start" title="">
                    <p className="text-5xl font-semibold leading-10 text-gray-900 mt-[2rem] font-Poppins">Proof of NFT Achievements</p>
                    <p className="text-3xl font-bold leading-10 text-center text-white mt-[1.5rem] font-Urbanist">Leaderboard</p>
                </div>
            </section>

            <section>
                <div className="mx-auto]">
                    <div className="w-[49.75rem] h-[31.88rem] m-auto  -mt-[15rem] relative text-center">
                        <div className="mx-auto bg-gradient-to-b from-yellow-100 to-gray-200 rounded-xl h-[14.13rem] border-2 w-full absolute bottom-0" />
                        <div className="mx-auto w-full absolute bottom-0 text-center h-full" >
                            <div className="w-full  h-full mx-auto grid grid-cols-3 place-items-end justify-items-center">
                                <div className=" bg-gray-100 text-center space-y-[1.07rem] py-5">
                                    <img className="m-auto w-[9.88rem] h-[9.88rem] border-2 rounded-full border-blue-600" src="https://via.placeholder.com/158x158" />
                                    <p className="m-auto text-2xl font-medium">Jackson</p>
                                    <p className="m-auto text-3xl font-bold text-blue-600">1847</p>
                                </div>
                                <div className=" bg-gray-100 text-center space-y-[3.21rem] py-5 place-self-center">
                                    <img className="m-auto w-[11.88rem] h-[11.88rem] border-2 rounded-full border-blue-600" src="https://via.placeholder.com/190x190" />
                                    <p className="m-auto text-2xl font-medium">Jackson</p>
                                    <p className="m-auto text-3xl font-bold text-blue-600">1847</p>
                                </div>
                                <div className=" bg-gray-100 text-center space-y-[1.07rem] py-5">
                                    <img className="m-auto w-[9.88rem] h-[9.88rem] border-2 rounded-full border-blue-600" src="https://via.placeholder.com/158x158" />
                                    <p className="m-auto text-2xl font-medium">Jackson</p>
                                    <p className="m-auto text-3xl font-bold text-blue-600">1847</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};