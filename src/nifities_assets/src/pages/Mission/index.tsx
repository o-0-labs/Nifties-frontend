import React from 'react';

const bannerImage = require('static/mission-banner.png');
const icon1Image = require('static/mission-icon-1.png');
const icon2Image = require('static/mission-icon-2.png');
const icon3Image = require('static/mission-icon-3.png');
const icon4Image = require('static/mission-icon-4.png');
const icon5Image = require('static/mission-icon-5.png');
const icon6Image = require('static/mission-icon-6.png');
const icon7Image = require('static/mission-icon-7.png');
const icon8Image = require('static/mission-icon-8.png');

export default function Mission() {
    return (
        <div className='mx-auto w-[1190px] py-[4.06rem]'>
            <section>
                <div className='flex flex-col-reverse md:flex-row md:justify-between '>
                    <div className="w-[31.38rem]">
                        <p className="xl:text-5xl lg:text-4xl sm:text-3xl font-semibold font-Poppins xl:leading-[4.06rem] text-brand-text-black">
                            Explore the fantastic
                            <br />
                            Nifties ecosystem
                        </p>
                        <p className="xl:text-xl lg:text-lg sm:text-base font-medium font-Urbanist xl:leading-[2rem] text-brand-text-gray mt-[1.5rem]">
                            Build, share, and learn with the most
                            <br />
                            talented artists from all over the
                            <br />
                            world in this community.
                        </p>
                    </div>
                    <img className="w-[35.44rem] h-[12.81rem]]" src={bannerImage} />
                </div>
                <div className="w-full bg-gray-300 h-[1px] mt-[3rem]"></div>
            </section>

            <section>
                <div className='w-full  mt-[3rem]'>
                    <div className="mx-auto w-[60rem] space-y-[4rem]">
                        <div className="grid grid-cols-2 justify-items-center justify-between">
                            <img className="w-[12.63rem]" src={icon1Image} alt="" />
                            <div className="flex flex-col justify-center align-middle w-[19.5rem]">
                                <p className="w-auto h-[1.5rem] text-2xl font-bold leading-6 text-left text-brand-text-black break-normal">Hackathons</p>
                                <p className="overflow-hidden text-md leading-normal text-brand-text-gray  break-normal mt-[2rem] w-[18.2rem]">a place for art hackathons, users can hold or joint hold art hackathons for NFT artists</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 justify-items-center justify-between">
                            <img className="w-[12.63rem]" src={icon2Image} alt="" />
                            <div className="flex flex-col justify-center align-middle w-[19.5rem]">
                                <p className="w-auto h-[1.5rem] text-2xl font-bold leading-6 text-left text-brand-text-black break-normal">mission</p>
                                <p className="overflow-hidden text-md leading-normal text-brand-text-gray  break-normal mt-[2rem] w-[18.2rem]">a place for education, dreamers can learn how to become a blockchain artist in one-stop</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 justify-items-center justify-between">
                            <img className="w-[12.63rem]" src={icon3Image} alt="" />
                            <div className="flex flex-col justify-center align-middle w-[19.5rem]">
                                <p className="w-auto h-[1.5rem] text-2xl font-bold leading-6 text-left text-brand-text-black break-normal">Grants</p>
                                <p className="overflow-hidden text-md leading-normal text-brand-text-gray  break-normal mt-[2rem] w-[18.2rem]">a place for crowdfunding . Dreamers are human beings too, kids gotta eat</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 justify-items-center justify-between">
                            <img className="w-[12.63rem]" src={icon4Image} alt="" />
                            <div className="flex flex-col justify-center align-middle w-[19.5rem]">
                                <p className="w-auto h-[1.5rem] text-2xl font-bold leading-6 text-left text-brand-text-black break-normal">Agora</p>
                                <p className="overflow-hidden text-md leading-normal text-brand-text-gray  break-normal mt-[2rem] w-[18.2rem]">a place for information, where users can check the recent events such as whitelist, mint, etc.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 justify-items-center justify-between">
                            <img className="w-[12.63rem]" src={icon5Image} alt="" />
                            <div className="flex flex-col justify-center align-middle w-[19.5rem]">
                                <p className="w-auto h-[1.5rem] text-2xl font-bold leading-6 text-left text-brand-text-black break-normal">Buff</p>
                                <p className="overflow-hidden text-md leading-normal text-brand-text-gray  break-normal mt-[2rem] w-[18.2rem]">a place for SNS account management, dreamers can manage their SNS account in one-stop, featuring data analysis, and multi-platform sync</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 justify-items-center justify-between">
                            <img className="w-[12.63rem]" src={icon6Image} alt="" />
                            <div className="flex flex-col justify-center align-middle w-[19.5rem]">
                                <p className="w-auto h-[1.5rem] text-2xl font-bold leading-6 text-left text-brand-text-black break-normal">Bounties(coming soon)</p>
                                <p className="overflow-hidden text-md leading-normal text-brand-text-gray  break-normal mt-[2rem] w-[18.2rem]">a place for bounty hunters. anyone can post their demands and pay the bill so that the bounty hunter will take care of the rest.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 justify-items-center justify-between">
                            <img className="w-[12.63rem]" src={icon7Image} alt="" />
                            <div className="flex flex-col justify-center align-middle w-[19.5rem]">
                                <p className="w-auto h-[1.5rem] text-2xl font-bold leading-6 text-left text-brand-text-black break-normal">Workshop(coming soon)</p>
                                <p className="overflow-hidden text-md leading-normal text-brand-text-gray  break-normal mt-[2rem] w-[18.2rem]"> a place for dreamers to call 'home', they can store as much as possible amount of information and artwork as they want to introduce themselves to the world.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 justify-items-center justify-between">
                            <img className="w-[12.63rem]" src={icon8Image} alt="" />
                            <div className="flex flex-col justify-center align-middle w-[19.5rem]">
                                <p className="w-auto h-[1.5rem] text-2xl font-bold leading-6 text-left text-brand-text-black break-normal">Thumbs-up(coming soon)</p>
                                <p className="overflow-hidden text-md leading-normal text-brand-text-gray  break-normal mt-[2rem] w-[18.2rem]">a place where users can communicate, dreamers and viewers can show their appreciation for each other.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}