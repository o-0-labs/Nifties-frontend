import React from 'react';

export default function Muse() {
    return (
        <div className='w-screen py-[4.06rem] px-[1rem] xl:px-[8rem]'>
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
                    <div className="w-[35.44rem] h-[12.81rem] bg-[rgba(196,196,196,1)]">插图2.1</div>
                </div>
            </section>

            <section className='my-[7.19rem]'>
                <div className="flex flex-row justify-between w-auto">
                    <p className="text-3xl leading-10 text-left text-gray-900">Explore Courses of Muse</p>
                    <div className="flex flex-row space-x-4 justify-end font-Urbanist items-baseline">
                        <p>Sort by</p>
                        <div className="inline-flex space-x-1 items-center justify-center h-7 px-4 py-1 bg-white border rounded border-gray-300">
                            <p className="text-sm leading-snug text-gray-800">Weighted Shuffle</p>
                        </div>
                        <button className="text-sm leading-snug text-brand w-[10.88rem] h-7 bg-white border rounded border-brand">Create</button>
                    </div>
                </div>
                <div className="pt-[1.5rem] grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-y-10 justify-items-center justify-between">
                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanis" style={{ width: 420, height: 360, }}>
                        <div className="w-full h-[14.50rem] bg-gradient-to-b from-[#D6FFEE] via-[#EAD183] to-[#FFA114] rounded-lg relative" />
                        <p className="w-auto text-2xl font-semibold leading-8 text-left text-brand-text-black">Turn Your Art Into An NFT - Join The World Of Digital Art</p>
                        <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray font-Urbanist">by <span className='text-brand'>Benji Wilson</span></p>
                    </div>
                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanis" style={{ width: 420, height: 360, }}>
                        <div className="w-full h-[14.50rem] bg-gradient-to-b from-[#D6FFEE] via-[#EAD183] to-[#FFA114] rounded-lg relative" />
                        <p className="w-auto text-2xl font-semibold leading-8 text-left text-brand-text-black">Turn Your Art Into An NFT - Join The World Of Digital Art</p>
                        <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray font-Urbanist">by <span className='text-brand'>Benji Wilson</span></p>
                    </div>
                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanis" style={{ width: 420, height: 360, }}>
                        <div className="w-full h-[14.50rem] bg-gradient-to-b from-[#D6FFEE] via-[#EAD183] to-[#FFA114] rounded-lg relative" />
                        <p className="w-auto text-2xl font-semibold leading-8 text-left text-brand-text-black">Turn Your Art Into An NFT - Join The World Of Digital Art</p>
                        <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray font-Urbanist">by <span className='text-brand'>Benji Wilson</span></p>
                    </div>
                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanis" style={{ width: 420, height: 360, }}>
                        <div className="w-full h-[14.50rem] bg-gradient-to-b from-[#D6FFEE] via-[#EAD183] to-[#FFA114] rounded-lg relative" />
                        <p className="w-auto text-2xl font-semibold leading-8 text-left text-brand-text-black">Turn Your Art Into An NFT - Join The World Of Digital Art</p>
                        <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray font-Urbanist">by <span className='text-brand'>Benji Wilson</span></p>
                    </div>
                </div>
            </section>
        </div>
    );
};