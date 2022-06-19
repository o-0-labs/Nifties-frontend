import React from 'react';

const bannerImage = require('static/about-banner.png');
const cover1Image = require('static/about-image-1.png');
const cover2Image = require('static/about-image-2.png');
const cover3Image = require('static/about-image-3.png');
const cover4Image = require('static/about-image-4.png');

export default function About() {
    return (
        <div className='w-screen py-[4.06rem] px-[1rem] xl:px-[8rem]'>
            <section>
                <div className='flex flex-col-reverse md:flex-row md:justify-between '>
                    <div className="w-[31.38rem]">
                        <p className="xl:text-5xl lg:text-4xl sm:text-3xl font-semibold font-Poppins xl:leading-[4.06rem] text-brand-text-black">
                            HELLO WORLD
                        </p>
                        <p className="xl:text-xl lg:text-lg sm:text-base font-medium font-Urbanist xl:leading-[2rem] text-brand-text-gray mt-[1.5rem]">
                            Nifties is a place where you can share the
                            <br />
                            WEB 3 dream with the most talented
                            <br />
                            artists and most courageous revolutionists
                            <br />
                            from all over the world.
                        </p>
                    </div>
                    <img className="w-[35.44rem] h-[12.81rem]]" src={bannerImage} />
                </div>
                <div className="w-full bg-gray-300 h-[1px] mt-[3rem]"></div>
            </section>

            <section>
                <div className='w-full  mt-[3rem]'>
                    <div className="mx-auto w-full">
                        <div className="grid grid-cols-2 justify-items-start justify-center">
                            <div></div>
                            <p className="w-auto h-[1.5rem] text-2xl font-bold leading-6 text-left text-brand-text-black break-normal">WHY Nifties</p>
                        </div>
                        <div className=" space-y-[2rem]">
                            <div className="grid grid-cols-2 justify-items-start  place-item-start">
                                <div className="w-[25rem] mx-auto">
                                    <img className="w-[22rem]" src={cover1Image} alt="" />
                                </div>
                                <div className="flex flex-col justify-center align-middle w-[24rem]">
                                    <p className="w-full overflow-hidden text-md leading-normal text-brand-text-gray  break-normal">The evolution of Web3 is happening, it changes itself every day, every hour, and every minute. Even ERC 721 standard is changing. Everything is evolving in this world.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 justify-items-start  place-item-start">
                                <div className="w-[25rem] mx-auto">
                                    <img className="w-[22rem]" src={cover2Image} alt="" />
                                </div>
                                <div className="flex flex-col justify-center align-middle w-[24rem]">
                                    <p className="w-full overflow-hidden text-md leading-normal text-brand-text-gray  break-normal">Web3 is turning itself upside down, it can and will change the world into a better place. Everyone wants to build something and leave his/her legacy in this new world and this is their Web3 dream. </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 justify-items-start  place-item-start">
                                <div className="w-[25rem] mx-auto">
                                    <img className="w-[22rem]" src={cover3Image}  alt="" />
                                </div>
                                <div className="flex flex-col justify-center align-middle w-[24rem]">
                                    <p className="w-full overflow-hidden text-md leading-normal text-brand-text-gray  break-normal">Wake up in the morning, what do you remember? Everybody has a dream, but not everybody has the courage to chase them. <br />Nifties is not just about NFT, it's about the people who want to achieve their WEB 3 dreams.</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full bg-gray-300 h-[1px] my-[3rem]"></div>
                        <div className="grid grid-cols-2 justify-items-start justify-center">
                            <div className="w-[24rem] mx-auto">
                                <p className="w-auto h-[1.5rem] text-2xl font-bold leading-6 text-left text-brand-text-black break-normal">Our vision</p>
                            </div>
                            <div></div>
                        </div>
                        <div className=" space-y-[2rem] mt-[1rem]">
                            <div className="grid grid-cols-2 justify-items-center">
                                <div className="flex flex-col justify-center align-middle w-[24rem]">
                                    <p className="list-disc overflow-hidden text-md leading-normal text-brand-text-gray  break-normal">Start small but we dream big. Nifties will become</p>
                                <ul className="list-disc text-md leading-normal text-brand-text-gray  break-normal ml-[1rem]">
                                    <li>a place for the ones who dream.</li>
                                    <li>a place where dreamers can call 'home' when climbing the hill and reaching for the heights.</li>
                                    <li>a place to help every dreamer chase all the lights and shine.</li>
                                </ul>
                            </div>
                            <div className="w-[25rem] mx-auto">
                                <img className="w-[22rem]" src={cover4Image}  alt="" />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
            </section >
        </div >
    );
}