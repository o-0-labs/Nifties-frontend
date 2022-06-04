import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom"
import { useStore, observer } from "store/utils";

const Hackathons = () => {
    const { GlobalStore } = useStore();
    const history = useHistory()

    useEffect(() => {
        // GlobalStore.creatConnect()
    }, [])


    return (
        <div className='w-screen'>
            <section className='px-[1rem] lg:px-[8rem]' title="Hero Section">
                <div className='flex flex-col-reverse md:flex-row md:justify-between '>
                    <div className="w-[31.38rem]">
                        <p className="xl:text-5xl lg:text-4xl sm:text-3xl font-semibold font-Poppins xl:leading-[4.06rem] text-brand-text-black">
                            Hey Hackers，
                            <br />
                            Let’s design cool NFT
                        </p>
                        <p className="xl:text-xl lg:text-lg sm:text-base font-medium font-Urbanist xl:leading-[2rem] text-brand-text-gray mt-[1.5rem]">
                            Design NFT project，unleash your whimsy，and earn
                            <br />
                            case and prizes！
                        </p>
                    </div>
                    <div className="w-[35.44rem] h-[12.81rem] bg-[rgba(196,196,196,1)]">插图1.1</div>
                </div>
            </section>

            <section className='my-[7.19rem] px-[1rem] lg:px-[8rem]' title="Explore Hackathons Section">
                <p className="text-3xl leading-10 text-left text-gray-900">Explore Hackathons</p>
                <div>
                    <div className="inline-flex space-x-10 items-start justify-start" style={{ width: 489, height: 34, }}>
                        <div className="inline-flex flex-col items-start justify-start h-full border-b-2 border-b-brand">
                            <div className="inline-flex space-x-1 items-center justify-start py-1">
                                <p className="text-lg font-medium leading-normal text-brand">Happenning Now (1)</p>
                            </div>
                        </div>
                        <div className="inline-flex flex-col items-start justify-start">
                            <div className="inline-flex space-x-1 items-center justify-start py-1">
                                <p className="text-lg font-medium leading-normal text-gray-500">Upcoming (0)</p>
                            </div>
                        </div>
                        <div className="inline-flex flex-col items-start justify-start">
                            <div className="inline-flex space-x-1 items-center justify-start py-1">
                                <p className="text-lg font-medium leading-normal text-gray-500">Completed (0)</p>
                            </div>
                        </div>
                    </div>
                    <div className=" pt-[1.5rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10">
                        <div className="inline-flex flex-col space-y-[0.5rem] items-start justify-end px-5 pt-7 bg-white border rounded-lg border-grey-300 font-Urbanist" style={{ width: 400, height: 640, }}>
                            <div className="w-full h-1/2 bg-gray-300 rounded-lg" >插图1.2</div>
                            <p className="w-auto h-8 text-2xl font-semibold leading-loose text-left text-brand-text-black">Covid-19  and world</p>
                            <p className="w-auto h-5 text-sm font-semibold leading-tight text-brand">May 02-May 22 2022</p>
                            <p className="w-full h-1/5 text-sm font-semibold leading-tight text-brand-text-gray">We invite you to join us in building the future of Web3, learn from online workshops, open new grants, and if you can, help fund great projects that are contributing to the public goods ecosystem. Join a sponsored hackathon and team up with new friends!</p>
                            <p className="w-auto h-5 text-sm font-semibold leading-tight text-gray-500">Sponsored by</p>
                            <div className="flex flex-row">
                                <img className="w-9 h-9 mr-2" src="https://via.placeholder.com/36x36" />
                                <img className="w-9 h-9 mr-2" src="https://via.placeholder.com/36x36" />
                                <img className="w-9 h-9 mr-2" src="https://via.placeholder.com/36x36" />
                                <img className="w-9 h-9 mr-2" src="https://via.placeholder.com/36x36" />
                            </div>
                            <div className="inline-flex flex-row items-center justify-between py-[1.5rem]">
                                <button className="text-sm leading-snug text-brand w-[10.88rem] h-7 py-1 bg-white border rounded border-brand mr-[0.81rem]">Join discord</button>
                                <button className="text-sm leading-snug bg-brand w-[10.88rem] h-7 py-1 border rounded text-white">Join now</button>
                            </div>
                        </div>
                        <div className="inline-flex flex-col space-y-[0.5rem] items-start justify-end px-5 pt-7 bg-white border rounded-lg border-grey-300 font-Urbanist" style={{ width: 400, height: 640, }}>
                            <div className="w-full h-1/2 bg-gray-300 rounded-lg" >插图1.2</div>
                            <p className="w-auto h-8 text-2xl font-semibold leading-loose text-left text-brand-text-black">Covid-19  and world</p>
                            <p className="w-auto h-5 text-sm font-semibold leading-tight text-brand">May 02-May 22 2022</p>
                            <p className="w-full h-1/5 text-sm font-semibold leading-tight text-brand-text-gray">We invite you to join us in building the future of Web3, learn from online workshops, open new grants, and if you can, help fund great projects that are contributing to the public goods ecosystem. Join a sponsored hackathon and team up with new friends!</p>
                            <p className="w-auto h-5 text-sm font-semibold leading-tight text-gray-500">Sponsored by</p>
                            <div className="flex flex-row">
                                <img className="w-9 h-9 mr-2" src="https://via.placeholder.com/36x36" />
                                <img className="w-9 h-9 mr-2" src="https://via.placeholder.com/36x36" />
                                <img className="w-9 h-9 mr-2" src="https://via.placeholder.com/36x36" />
                                <img className="w-9 h-9 mr-2" src="https://via.placeholder.com/36x36" />
                            </div>
                            <div className="inline-flex flex-row items-center justify-between py-[1.5rem]">
                                <button className="text-sm leading-snug text-brand w-[10.88rem] h-7 py-1 bg-white border rounded border-brand mr-[0.81rem]">Join discord</button>
                                <button className="text-sm leading-snug bg-brand w-[10.88rem] h-7 py-1 border rounded text-white">Join now</button>
                            </div>
                        </div>
                        <div className="inline-flex flex-col space-y-[0.5rem] items-start justify-end px-5 pt-7 bg-white border rounded-lg border-grey-300 font-Urbanist" style={{ width: 400, height: 640, }}>
                            <div className="w-full h-1/2 bg-gray-300 rounded-lg" >插图1.2</div>
                            <p className="w-auto h-8 text-2xl font-semibold leading-loose text-left text-brand-text-black">Covid-19  and world</p>
                            <p className="w-auto h-5 text-sm font-semibold leading-tight text-brand">May 02-May 22 2022</p>
                            <p className="w-full h-1/5 text-sm font-semibold leading-tight text-brand-text-gray">We invite you to join us in building the future of Web3, learn from online workshops, open new grants, and if you can, help fund great projects that are contributing to the public goods ecosystem. Join a sponsored hackathon and team up with new friends!</p>
                            <p className="w-auto h-5 text-sm font-semibold leading-tight text-gray-500">Sponsored by</p>
                            <div className="flex flex-row">
                                <img className="w-9 h-9 mr-2" src="https://via.placeholder.com/36x36" />
                                <img className="w-9 h-9 mr-2" src="https://via.placeholder.com/36x36" />
                                <img className="w-9 h-9 mr-2" src="https://via.placeholder.com/36x36" />
                                <img className="w-9 h-9 mr-2" src="https://via.placeholder.com/36x36" />
                            </div>
                            <div className="inline-flex flex-row items-center justify-between py-[1.5rem]">
                                <button className="text-sm leading-snug text-brand w-[10.88rem] h-7 py-1 bg-white border rounded border-brand mr-[0.81rem]">Join discord</button>
                                <button className="text-sm leading-snug bg-brand w-[10.88rem] h-7 py-1 border rounded text-white">Join now</button>
                            </div>
                        </div>
                        <div className="inline-flex flex-col space-y-[0.5rem] items-start justify-end px-5 pt-7 bg-white border rounded-lg border-grey-300 font-Urbanist" style={{ width: 400, height: 640, }}>
                            <div className="w-full h-1/2 bg-gray-300 rounded-lg" >插图1.2</div>
                            <p className="w-auto h-8 text-2xl font-semibold leading-loose text-left text-brand-text-black">Covid-19  and world</p>
                            <p className="w-auto h-5 text-sm font-semibold leading-tight text-brand">May 02-May 22 2022</p>
                            <p className="w-full h-1/5 text-sm font-semibold leading-tight text-brand-text-gray">We invite you to join us in building the future of Web3, learn from online workshops, open new grants, and if you can, help fund great projects that are contributing to the public goods ecosystem. Join a sponsored hackathon and team up with new friends!</p>
                            <p className="w-auto h-5 text-sm font-semibold leading-tight text-gray-500">Sponsored by</p>
                            <div className="flex flex-row">
                                <img className="w-9 h-9 mr-2" src="https://via.placeholder.com/36x36" />
                                <img className="w-9 h-9 mr-2" src="https://via.placeholder.com/36x36" />
                                <img className="w-9 h-9 mr-2" src="https://via.placeholder.com/36x36" />
                                <img className="w-9 h-9 mr-2" src="https://via.placeholder.com/36x36" />
                            </div>
                            <div className="inline-flex flex-row items-center justify-between py-[1.5rem]">
                                <button className="text-sm leading-snug text-brand w-[10.88rem] h-7 py-1 bg-white border rounded border-brand mr-[0.81rem]">Join discord</button>
                                <button className="text-sm leading-snug bg-brand w-[10.88rem] h-7 py-1 border rounded text-white">Join now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default observer(Hackathons);