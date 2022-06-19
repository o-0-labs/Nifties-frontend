import React from 'react';

const bannerImage = require('static/muse-index-banner.png');
const cover0Image = require('static/muse-cover-0.jpg');
const cover1Image = require('static/muse-cover-1.jpg');
const cover2Image = require('static/muse-cover-2.jpg');
const cover3Image = require('static/muse-cover-3.jpg');
const cover4Image = require('static/muse-cover-4.jpg');
const cover5Image = require('static/muse-cover-5.jpg');
const cover6Image = require('static/muse-cover-6.jpg');
const cover7Image = require('static/muse-cover-7.jpg');
export default function Muse() {
    return (
        <div className='mx-auto w-[1190px] py-[4.06rem]'>
            <section>
                <div className='flex flex-col-reverse md:flex-row md:justify-between '>
                    <div className="w-auto">
                        <p className="xl:text-5xl lg:text-4xl sm:text-3xl font-semibold font-Poppins xl:leading-[4.06rem] text-brand-text-black">
                            Share everything
                            <br />
                            about NFTs
                        </p>
                        <p className="xl:text-xl lg:text-lg sm:text-base font-medium font-Urbanist xl:leading-[2rem] text-brand-text-gray mt-[1.5rem]">
                            Artists can take a variety of courses as well as
                            <br />
                            upload their own.
                        </p>
                    </div>
                    <img className="w-[35.44rem] h-[12.81rem]" src={bannerImage} />
                </div>
            </section>

            <section className='mt-[7.19rem]'>
                <div className="flex flex-row justify-between w-auto">
                    <p className="text-3xl leading-10 text-left text-gray-900">Explore Courses of Muse</p>
                    <div className="flex flex-row space-x-4 justify-end font-Urbanist items-baseline">
                        {/* <p>Sort by</p>
                        <div className="inline-flex space-x-1 items-center justify-center h-7 px-4 py-1 bg-white border rounded border-gray-300">
                            <p className="text-sm leading-snug text-gray-800">Weighted Shuffle</p>
                        </div>
                        <button className="text-sm leading-snug text-brand w-[10.88rem] h-7 bg-white border rounded border-brand">Create</button> */}
                    </div>
                </div>
                <div className="pt-[1.5rem] grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-3 gap-y-10 justify-items-center place-items-center">
                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanis justify-self-start" style={{ width: 370, height: 324, }}>
                        <a href="https://www.youtube.com/watch?v=Oz9zw7-_vhM" target="_blank">
                            <img className="w-full h-[12.94rem] bg-gray-300 rounded-lg relative" src={cover0Image} />
                            <p className="w-auto text-xl h-[3.6rem] leading-6 text-left text-brand-text-black">NFTs, Explained</p>
                            <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray font-Urbanist">by <span className='text-brand'>Johnny Harris</span></p>
                        </a>
                    </div>

                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanis" style={{ width: 370, height: 324, }}>
                        <a href="https://www.youtube.com/watch?v=zpROwouRo_M" target="_blank">
                            <img className="w-full h-[12.94rem] bg-gray-300 rounded-lg relative" src={cover1Image} />
                            <p className="w-auto text-xl h-[3.6rem] leading-6 text-left text-brand-text-black">NFTs Are Fueling a Boom in Digital Art. Here’s How They Work | WSJ</p>
                            <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray font-Urbanist">by <span className='text-brand'>Wall Street Journal</span></p>
                        </a>
                    </div>


                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanis justify-self-end" style={{ width: 370, height: 324, }}>
                        <a href="https://www.youtube.com/watch?v=4se4_ZqkcKw" target="_blank">
                            <img className="w-full h-[12.94rem] bg-gray-300 rounded-lg relative" src={cover2Image} />
                            <p className="w-auto text-xl h-[3.6rem] leading-6 text-left text-brand-text-black">NFTs For Beginners in 45 minutes</p>
                            <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray font-Urbanist">by <span className='text-brand'>GaryVee</span></p>
                        </a>
                    </div>


                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanis justify-self-start" style={{ width: 370, height: 324, }}>
                        <a href="https://www.youtube.com/watch?v=4dkl5O9LOKg" target="_blank">
                            <img className="w-full h-[12.94rem] bg-gray-300 rounded-lg relative" src={cover3Image} />
                            <p className="w-auto text-xl h-[3.6rem] leading-6 text-left text-brand-text-black">What is an NFT? (Non-Fungible Tokens Explained)</p>
                            <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray font-Urbanist">by <span className='text-brand'>Whiteboard Crypto</span></p>
                        </a>
                    </div>


                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanis" style={{ width: 370, height: 324, }}>
                        <a href="https://www.youtube.com/watch?v=mGlfFjcZFRE" target="_blank">
                            <img className="w-full h-[12.94rem] bg-gray-300 rounded-lg relative" src={cover4Image} />
                            <p className="w-auto text-xl h-[3.6rem] leading-6 text-left text-brand-text-black">How NFTs Are Invading the Art World</p>
                            <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray font-Urbanist">by <span className='text-brand'>VICE News</span></p>
                        </a>
                    </div>


                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanis justify-self-end" style={{ width: 370, height: 324, }}>
                        <a href="https://www.youtube.com/watch?v=cTjwp-PCooI" target="_blank">
                            <img className="w-full h-[12.94rem] bg-gray-300 rounded-lg relative" src={cover5Image} />
                            <p className="w-auto text-xl h-[3.6rem] leading-6 text-left text-brand-text-black">Top 10 NFT Artists in 2022</p>
                            <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray font-Urbanist">by <span className='text-brand'>CoinMarketCap</span></p>
                        </a>
                    </div>


                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanis justify-self-start" style={{ width: 370, height: 324, }}>
                        <a href="https://www.youtube.com/watch?v=km6-ZmZmqrU" target="_blank">
                            <img className="w-full h-[12.94rem] bg-gray-300 rounded-lg relative" src={cover6Image} />
                            <p className="w-auto text-xl h-[3.6rem] leading-6 text-left text-brand-text-black">How NFTs revolutionize the ART WORLD! - Explanation for ARTISTS 🤑</p>
                            <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray font-Urbanist">by <span className='text-brand'>3D Gladiator</span></p>
                        </a>
                    </div>


                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanis" style={{ width: 370, height: 324, }}>
                        <a href="https://www.youtube.com/watch?v=KD6_har3g-M" target="_blank">
                            <img className="w-full h-[12.94rem] bg-gray-300 rounded-lg relative" src={cover7Image} />
                            <p className="w-auto text-xl h-[3.6rem] leading-6 text-left text-brand-text-black">Conversations | NFTs in the Art World: Beyond the Hype</p>
                            <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray font-Urbanist">by <span className='text-brand'>Art Basel</span></p>
                        </a>
                    </div>


                </div>
            </section>
        </div>
    );
};