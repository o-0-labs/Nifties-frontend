import React from 'react';
import CreateAgoraDialog from './components/dialog';

const bannerImage = require('static/agora-index-banner.png');
const cover0Image = require('static/agora-cover-0.jpg');
const cover1Image = require('static/agora-cover-1.jpg');
const cover2Image = require('static/agora-cover-2.jpg');
const cover3Image = require('static/agora-cover-3.jpg');
const cover4Image = require('static/agora-cover-4.jpg');
const viewsIconImage = require('static/agora-icon-views.png');
const likesIconImage = require('static/agora-icon-likes.png');
export default function Agora() {
    // Create Dialog
    const [openCreateDialog, setOpenCreateDialog] = React.useState(false);

    const handleOpenJoinNowDialogChange = () => {
        setOpenCreateDialog(openCreateDialog ? false : true);
    };


    return (
        <div className='mx-auto w-[1190px] py-[4.06rem] relative'>
            <section>
                <div className='flex flex-col-reverse md:flex-row md:justify-between '>
                    <div className="w-auto">
                        <p className="xl:text-5xl lg:text-4xl sm:text-3xl font-semibold font-Poppins xl:leading-[4.06rem] text-brand-text-black">
                            Explore events from
                            <br />
                            officials and artists
                        </p>
                        <p className="xl:text-xl lg:text-lg sm:text-base font-medium font-Urbanist xl:leading-[2rem] text-brand-text-gray mt-[1.5rem]">
                            In the agora, exciting events will be held, such as
                            <br />
                            whitelist, mint, AMA, talk show etc
                        </p>
                    </div>
                    <img className="w-[35.44rem] h-[12.81rem]" src={bannerImage} />
                </div>
            </section>

            <section className='mt-[7.19rem]'>
                <div className="flex flex-row justify-between w-auto">
                    <p className="text-3xl leading-10 text-left text-gray-900">Explore Agora</p>
                    <button className="text-sm leading-snug text-brand w-[10.88rem] h-7 bg-white border rounded border-brand" onClick={handleOpenJoinNowDialogChange} disabled>Create</button>
                </div>
                <div className=" pt-[1.5rem] grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-3 gap-y-10 justify-items-center place-items-center ">
                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanist  justify-self-start" style={{ width: 370, height: 605, }}>
                        <div className="w-full h-[21.45rem] bg-gray-300 rounded-lg relative">
                            <img className=" absolute w-full" src={cover0Image} alt="" />
                            <div className=''>
                                <p className="h-auto w-auto text-sm font-bold leading-relaxed text-center text-brand font-Urbanist absolute top-[0.90rem] left-[0.96rem] bg-white px-[0.5rem] py-[0.5rem] rounded-sm">profit sharing</p>
                                <div className="w-auto h-auto absolute bottom-[0.90rem] right-[0.96rem] flex flex-row justify-end front-Urbanist">
                                    <img className="w-[1.5rem] aspect-square rounded-lg mr-4" src={viewsIconImage} />
                                    <p className="text-sm font-normal leading-relaxed text-white">11w</p>
                                    <img className="w-[1.5rem] aspect-square rounded-lg  ml-[0.98rem]  mr-4" src={likesIconImage} />
                                    <p className="text-sm font-normal leading-relaxed text-white">1.3W</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between w-full items-baseline h-[4.5rem]">
                            <p className="w-auto text-xl leading-6 text-left text-brand-text-black break-normal">Get the 50% profit sharing everyday! 50%! Everyday! Everyone! I am not kidding.</p>
                        </div>
                        <p className="w-full h-[5.2rem] text-sm leading-tight text-brand-text-gray font-Urbanist break-normal">This is not scam project, it’s create by a person who love web3, Moonbirds, Mfers, doing his best to build a great community</p>
                        <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray font-Urbanist">by <span className='text-brand'>Moonfers · 23D</span></p>
                        <button className="mx-auto text-sm leading-snug bg-brand w-[10.88rem] h-7 border rounded text-white mt-[50.38rem]">Join</button>
                    </div>
                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanist " style={{ width: 370, height: 605, }}>
                        <div className="w-full h-[21.45rem] bg-gray-300 rounded-lg relative">
                            <img className=" absolute w-full" src={cover1Image} alt="" />
                            <div className=''>
                                <p className="h-auto w-auto text-sm font-bold leading-relaxed text-center text-brand font-Urbanist absolute top-[0.90rem] left-[0.96rem] bg-white px-[0.5rem] py-[0.5rem] rounded-sm">reward</p>
                                <div className="w-auto h-auto absolute bottom-[0.90rem] right-[0.96rem] flex flex-row justify-end front-Urbanist">
                                    <img className="w-[1.5rem] aspect-square rounded-lg mr-4" src={viewsIconImage} />
                                    <p className="text-sm font-normal leading-relaxed text-white">9.1w</p>
                                    <img className="w-[1.5rem] aspect-square rounded-lg  ml-[0.98rem]  mr-4" src={likesIconImage} />
                                    <p className="text-sm font-normal leading-relaxed text-white">8.7W</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between w-full items-baseline h-[4.5rem]">
                            <p className="w-auto text-xl leading-6 text-left text-brand-text-black break-normal">We are planning a privilege to reward our loyal fatties</p>
                        </div>
                        <p className="w-full h-[5.2rem] text-sm leading-tight text-brand-text-gray font-Urbanist break-normal">6969 Fat Rich Apes living in the Otherside Metaverse!</p>
                        <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray font-Urbanist">by <span className='text-brand'>Bored Ape Fat Club · 21D</span></p>
                        <button className="mx-auto text-sm leading-snug bg-brand w-[10.88rem] h-7 border rounded text-white mt-[50.38rem]">Join</button>
                    </div>
                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanist  justify-self-end" style={{ width: 370, height: 605, }}>
                        <div className="w-full h-[21.45rem] bg-gray-300 rounded-lg relative">
                            <img className=" absolute w-full" src={cover2Image} alt="" />
                            <div className=''>
                                <p className="h-auto w-auto text-sm font-bold leading-relaxed text-center text-brand font-Urbanist absolute top-[0.90rem] left-[0.96rem] bg-white px-[0.5rem] py-[0.5rem] rounded-sm">free mint</p>
                                <div className="w-auto h-auto absolute bottom-[0.90rem] right-[0.96rem] flex flex-row justify-end front-Urbanist">
                                    <img className="w-[1.5rem] aspect-square rounded-lg mr-4" src={viewsIconImage} />
                                    <p className="text-sm font-normal leading-relaxed text-white">4w</p>
                                    <img className="w-[1.5rem] aspect-square rounded-lg  ml-[0.98rem]  mr-4" src={likesIconImage} />
                                    <p className="text-sm font-normal leading-relaxed text-white">4.7k</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between w-full items-baseline h-[4.5rem]">
                            <p className="w-auto text-xl leading-6 text-left text-brand-text-black break-normal">We went free mint. In return, we SOLD OUT almost immediately! </p>
                        </div>
                        <p className="w-full h-[5.2rem] text-sm leading-tight text-brand-text-gray font-Urbanist break-normal">These assets do not work in Chibi Fighters 2.0. Chibi Fighters is a casual brawler on the Ethereum Blockchain. Chibis come in all shapes and forms and are fierce little warriors.</p>
                        <p className="w-auto h-5 text-sm leading-4 text-brand-text-gray font-Urbanist">by <span className='text-brand'>Fatty Beef · 20D</span></p>
                        <button className="mx-auto text-sm leading-snug bg-brand w-[10.88rem] h-7 border rounded text-white mt-[50.38rem]">Join</button>
                    </div>
                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanist  justify-self-start" style={{ width: 370, height: 605, }}>
                        <div className="w-full h-[21.45rem] bg-gray-300 rounded-lg relative">
                            <img className=" absolute w-full" src={cover3Image} alt="" />
                            <div className=''>
                                <p className="h-auto w-auto text-sm font-bold leading-relaxed text-center text-brand font-Urbanist absolute top-[0.90rem] left-[0.96rem] bg-white px-[0.5rem] py-[0.5rem] rounded-sm">giveaways</p>
                                <div className="w-auto h-auto absolute bottom-[0.90rem] right-[0.96rem] flex flex-row justify-end front-Urbanist">
                                    <img className="w-[1.5rem] aspect-square rounded-lg mr-4" src={viewsIconImage} />
                                    <p className="text-sm font-normal leading-relaxed text-white">11w</p>
                                    <img className="w-[1.5rem] aspect-square rounded-lg  ml-[0.98rem]  mr-4" src={likesIconImage} />
                                    <p className="text-sm font-normal leading-relaxed text-white">1.3w</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between w-full items-baseline h-[4.5rem]">
                            <p className="w-auto text-xl leading-6 text-left text-brand-text-black break-normal">To celebrate the public mint I’m gonna give away a Super Dude to a follower! Super simple </p>
                        </div>
                        <p className="w-full h-[5.2rem] text-sm leading-tight text-brand-text-gray font-Urbanist break-normal">Super Dudes is a generative NFT collection made up of super heroes. They are the 2nd generation of Super Ordinary Villains art collection and the next step in the story of the Super Ordinary World. The villains ...</p>
                        <p className="w-auto h-5 text-sm leading-4 text-brand-text-gray font-Urbanist">by <span className='text-brand'>superdudes · 15d</span></p>
                        <button className="mx-auto text-sm leading-snug bg-brand w-[10.88rem] h-7 border rounded text-white mt-[50.38rem]">Join</button>
                    </div>
                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanist " style={{ width: 370, height: 605, }}>
                        <div className="w-full h-[21.45rem] bg-gray-300 rounded-lg relative">
                            <img className=" absolute w-full" src={cover4Image} alt="" />
                            <div className=''>
                                <p className="h-auto w-auto text-sm font-bold leading-relaxed text-center text-brand font-Urbanist absolute top-[0.90rem] left-[0.96rem] bg-white px-[0.5rem] py-[0.5rem] rounded-sm">free mint</p>
                                <div className="w-auto h-auto absolute bottom-[0.90rem] right-[0.96rem] flex flex-row justify-end front-Urbanist">
                                    <img className="w-[1.5rem] aspect-square rounded-lg mr-4" src={viewsIconImage} />
                                    <p className="text-sm font-normal leading-relaxed text-white">4w</p>
                                    <img className="w-[1.5rem] aspect-square rounded-lg  ml-[0.98rem]  mr-4" src={likesIconImage} />
                                    <p className="text-sm font-normal leading-relaxed text-white">4.7k</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between w-full items-baseline h-[4.5rem]">
                            <p className="w-auto text-xl leading-6 text-left text-brand-text-black break-normal">50x FREE MINT SPOT GIVEAWAY Follow @SenshiNFT｜RT + Like｜Tag 3 Friends </p>
                        </div>
                        <p className="w-full h-[5.2rem] text-sm leading-tight text-brand-text-gray font-Urbanist break-normal">Senshi's Entering The Metaverse</p>
                        <p className="w-auto h-5 text-sm leading-4 text-brand-text-gray font-Urbanist">by <span className='text-brand'>SENSHI · 8D</span></p>
                        <button className="mx-auto text-sm leading-snug bg-brand w-[10.88rem] h-7 border rounded text-white mt-[50.38rem]">Join</button>
                    </div>

                </div>
            </section>

            <section>
                <CreateAgoraDialog open={openCreateDialog} onOpenJoinNowDialogChange={handleOpenJoinNowDialogChange} />
            </section>
        </div>
    );
};