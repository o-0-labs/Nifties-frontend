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
                    <div className="w-[49.75rem] h-[31.88rem] m-auto  -mt-[13.5rem] relative text-center">
                        <div className="mx-auto bg-gradient-to-b from-[#FFF0D4] to-[#D6E3E4] rounded-xl h-[14.13rem] border-2 w-full absolute bottom-0" />
                        <div className="mx-auto w-full absolute bottom-0 text-center h-full" >
                            <div className="w-full  h-full mx-auto grid grid-cols-3 place-items-end justify-items-center">
                                <div className="text-center space-y-[2.20rem] pb-[2.17rem]">
                                    <div className="m-auto w-[9.88rem] h-[9.88rem] relative text-center">
                                        <img className="m-auto w-[9.88rem] h-[9.88rem] border-[3px] rounded-full border-[#009BD6]" src="/avator-1.jpg" />
                                        <div className=" w-full text-center absolute bottom-0">
                                            <div className="mx-auto transform -rotate-45 w-10 h-10 bg-[#009BD6] rounded relative -bottom-[16px]" ></div>
                                        </div>
                                    </div>
                                    <p className="m-auto text-2xl font-medium text-black">Jackson</p>
                                    <p className="m-auto text-3xl font-bold text-[#009BD6]">1847</p>
                                </div>
                                <div className="w-[19.94rem] text-center h-full place-items-start relative">
                                    <div className="w-full absolute top-0 z-10">
                                        <img className="m-auto w-[4.93rem] h-[3.88rem]" src="/crown.svg" />
                                        <div className="m-auto w-[11.88rem] h-[11.88rem] relative text-center mt-[1rem]">
                                            <img className="m-auto w-[11.88rem] h-[11.88rem] border-[3px] rounded-full border-[#FFAA00] absolute top-0" src="/avator-2.jpg" />
                                            <div className=" w-full text-center absolute bottom-0">
                                                <div className="mx-auto transform -rotate-45 w-10 h-10 bg-[#FFAA00] rounded relative -bottom-[16px]" ></div>
                                            </div>
                                        </div>
                                        <p className="m-auto text-2xl font-medium mt-[2.20rem]   text-black">Eiden</p>
                                        <p className="m-auto text-3xl font-bold text-[#FFAA00] mt-[2.20rem]">2430</p>
                                    </div>
                                    <div className="w-full h-80 bg-gradient-to-b from-[#D0E0E6] to-[#FFF0D400] rounded-tl-3xl rounded-tr-3xl absolute bottom-0" />
                                </div>
                                <div className=" text-center space-y-[2.20rem] pb-[2.17rem]">
                                    <div className="m-auto w-[9.88rem] h-[9.88rem] relative text-center">
                                        <img className="m-auto w-[9.88rem] h-[9.88rem] border-[3px] rounded-full border-[#00D95F]" src="/avator-3.jpg" />
                                        <div className=" w-full text-center absolute bottom-0">
                                            <div className="mx-auto transform -rotate-45 w-10 h-10 bg-[#00D95F] rounded relative -bottom-[16px]" ></div>
                                        </div>
                                    </div>
                                    <p className="m-auto text-2xl font-medium  text-black">Emma Aria</p>
                                    <p className="m-auto text-3xl font-bold text-[#00D95F]">1674</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[49.75rem] h-auto m-auto  mt-[2.81rem] text-center font-Urbanist">
                        <div className=" m-auto w-full grid grid-cols-3 justify-between place-items-center">
                            <p className="w-20 text-lg font-semibold leading-loose text-brand-black">RANK</p>
                            <p className="w-20 text-lg font-semibold leading-loose text-brand-black">NAME</p>
                            <p className="w-20 text-lg font-semibold leading-loose text-brand-black">VOLUME</p>
                        </div>
                        <div className=" m-auto w-full mt-[1.25rem]">
                            <div className="bg-white border border-gray-300 w-full h-[5.31rem] grid grid-cols-3 justify-center place-items-center">
                                <p>1</p>
                                <div className="inline-flex space-x-4  justify-self-start place-items-center">
                                    <img className="w-[3rem] h-[3rem] rounded-full" src="/avator-2.jpg" />
                                    <p className="text-lg leading-loose text-gray-500">Eiden</p>
                                </div>
                                <div className="inline-flex space-x-1 items-center">
                                    <img className="w-[1.25rem] h-[1.25rem]" src="/eth.png" />
                                    <p className="text-lg leading-loose text-gray-500">133,871.43</p>
                                </div>
                            </div>
                            <div className="bg-white border border-t-0 border-gray-300 w-full h-[5.31rem] grid grid-cols-3 justify-center place-items-center">
                                <p>2</p>
                                <div className="inline-flex space-x-4   justify-self-start place-items-center">
                                    <img className="w-[3rem] h-[3rem] rounded-full" src="/avator-1.jpg" />
                                    <p className="text-lg leading-loose text-gray-500">Jackson</p>
                                </div>
                                <div className="inline-flex space-x-1 items-center">
                                    <img className="w-[1.25rem] h-[1.25rem]" src="/eth.png" />
                                    <p className="text-lg leading-loose text-gray-500">133,871.43</p>
                                </div>
                            </div>
                            <div className="bg-white border border-t-0 border-gray-300 w-full h-[5.31rem] grid grid-cols-3 justify-center place-items-center">
                                <p>3</p>
                                <div className="inline-flex space-x-4   justify-self-start place-items-center">
                                    <img className="w-[3rem] h-[3rem] rounded-full" src="/avator-3.jpg" />
                                    <p className="text-lg leading-loose text-gray-500">Emma Aria</p>
                                </div>
                                <div className="inline-flex space-x-1 items-center">
                                    <img className="w-[1.25rem] h-[1.25rem]" src="/eth.png" />
                                    <p className="text-lg leading-loose text-gray-500">133,871.43</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};