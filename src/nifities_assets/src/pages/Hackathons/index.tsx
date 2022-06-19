import React from 'react';
import HackahtonsTab from './components/tab';

const bannerImage = require('static/hackathons-index-banner.png');

export default function Hackathons() {
    return (
        <div className='mx-auto w-[1190px] py-[4.06rem]'>
            <section>
                <div className='flex flex-col-reverse md:flex-row md:justify-between '>
                    <div className="w-auto">
                        <p className="xl:text-5xl lg:text-4xl sm:text-3xl font-semibold font-Poppins xl:leading-[4.06rem] text-brand-text-black">
                            Hey Hackers,
                            <br />
                            Let's design cool NFT
                        </p>
                        <p className="xl:text-xl lg:text-lg sm:text-base font-medium font-Urbanist xl:leading-[2rem] text-brand-text-gray mt-[1.5rem]">
                            Design NFT project, unleash your whimsy, and earn
                            <br />
                            case and prizes!
                        </p>
                    </div>
                    <img className="w-[35.44rem] h-[12.81rem] " src={bannerImage} />
                </div>
            </section>

            <section className='mt-[7.19rem]'>
                <HackahtonsTab />
            </section>
        </div>
    )
}