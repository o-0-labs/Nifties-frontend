import React from 'react';
import HackahtonsTab from './components/tab';

export default function Hackathons() {
    return (
        <div className='w-screen py-[4.06rem]'>
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

            <section className='mt-[7.19rem] px-[1rem] lg:px-[8rem]' title="Explore Hackathons Section">
                <HackahtonsTab />
            </section>
        </div>
    )
}