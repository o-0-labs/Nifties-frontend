import React from 'react';
import CreateAgoraDialog from './components/dialog';

export default function Agora() {
    // Create Dialog
    const [openCreateDialog, setOpenCreateDialog] = React.useState(false);

    const handleOpenJoinNowDialogChange = () => {
        setOpenCreateDialog(openCreateDialog ? false : true);
    };


    return (
        <div className='w-screen py-[4.06rem] px-[1rem] xl:px-[8rem] relative'>
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
                    <div className="w-[35.44rem] h-[12.81rem] bg-[rgba(196,196,196,1)]">插图3.1</div>
                </div>
            </section>

            <section className='my-[7.19rem]'>
                <div className="flex flex-row justify-between w-auto">
                    <p className="text-3xl leading-10 text-left text-gray-900">Explore Agora</p>
                    <button className="text-sm leading-snug text-brand w-[10.88rem] h-7 bg-white border rounded border-brand" onClick={handleOpenJoinNowDialogChange}>Create</button>
                </div>
                <div className=" pt-[1.5rem] grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-y-10 justify-items-center justify-between">
                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanist " style={{ width: 400, height: 640, }}>
                        <div className="w-full h-[25.56rem] bg-gradient-to-b from-[#D6FFEE] via-[#EFC56761] to-[#FFA11400] rounded-lg relative">
                            <p className="h-auto w-[5rem] text-sm font-semibold leading-relaxed text-center text-brand font-Urbanist absolute top-[0.90rem] left-[0.96rem] bg-white p-2">MINT</p>
                            <div className="w-auto h-auto absolute bottom-[0.90rem] right-[0.96rem] flex flex-row justify-end front-Urbanist">
                                <img className="w-[1.5rem] aspect-square rounded-lg mr-4" src="/views.svg" />
                                <p className="text-sm font-semibold leading-relaxed text-gray-900">1.1w</p>
                                <img className="w-[1.5rem] aspect-square rounded-lg  ml-[0.98rem]  mr-4" src="/like.svg" />
                                <p className="text-sm font-semibold leading-relaxed text-gray-900">400</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between w-full items-baseline h-[2.69rem]">
                            <p className="w-auto text-2xl font-semibold leading-loose text-left text-brand-text-black">Chance to mint for free</p>
                            <p className="w-auto text-sm leading-tight text-brand">8h</p>
                        </div>
                        <p className="w-full h-[5.04rem] text-sm leading-tight text-brand-text-gray font-Urbanist">$100 | 1.400.000 IDR in 8 Hours 🦄<br />- RT & Follow <br />@Free_Mint_Pass<br /> - RT, Like + Tag 3 Friends on Their 📌</p>
                        <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray font-Urbanist">by <span className='text-brand'>by Money Bears NFT</span></p>
                        <button className="mx-auto text-sm leading-snug bg-brand w-[10.88rem] h-7 border rounded text-white mt-[50.38rem]">Join</button>
                    </div>
                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanist " style={{ width: 400, height: 640, }}>
                        <div className="w-full h-[25.56rem] bg-gradient-to-b from-[#D6FFEE] via-[#EFC56761] to-[#FFA11400] rounded-lg relative">
                            <p className="h-auto w-[5rem] text-sm font-semibold leading-relaxed text-center text-brand font-Urbanist absolute top-[0.90rem] left-[0.96rem] bg-white p-2">MINT</p>
                            <div className="w-auto h-auto absolute bottom-[0.90rem] right-[0.96rem] flex flex-row justify-end front-Urbanist">
                                <img className="w-[1.5rem] aspect-square rounded-lg mr-4" src="/views.svg" />
                                <p className="text-sm font-semibold leading-relaxed text-gray-900">1.1w</p>
                                <img className="w-[1.5rem] aspect-square rounded-lg  ml-[0.98rem]  mr-4" src="/like.svg" />
                                <p className="text-sm font-semibold leading-relaxed text-gray-900">400</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between w-full items-baseline h-[2.69rem]">
                            <p className="w-auto text-2xl font-semibold leading-loose text-left text-brand-text-black">Chance to mint for free</p>
                            <p className="w-auto text-sm leading-tight text-brand">8h</p>
                        </div>
                        <p className="w-full h-[5.04rem] text-sm leading-tight text-brand-text-gray font-Urbanist">$100 | 1.400.000 IDR in 8 Hours 🦄<br />- RT & Follow <br />@Free_Mint_Pass<br /> - RT, Like + Tag 3 Friends on Their 📌</p>
                        <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray font-Urbanist">by <span className='text-brand'>by Money Bears NFT</span></p>
                        <button className="mx-auto text-sm leading-snug bg-brand w-[10.88rem] h-7 border rounded text-white mt-[50.38rem]">Join</button>
                    </div>
                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanist " style={{ width: 400, height: 640, }}>
                        <div className="w-full h-[25.56rem] bg-gradient-to-b from-[#D6FFEE] via-[#EFC56761] to-[#FFA11400] rounded-lg relative">
                            <p className="h-auto w-[5rem] text-sm font-semibold leading-relaxed text-center text-brand font-Urbanist absolute top-[0.90rem] left-[0.96rem] bg-white p-2">MINT</p>
                            <div className="w-auto h-auto absolute bottom-[0.90rem] right-[0.96rem] flex flex-row justify-end front-Urbanist">
                                <img className="w-[1.5rem] aspect-square rounded-lg mr-4" src="/views.svg" />
                                <p className="text-sm font-semibold leading-relaxed text-gray-900">1.1w</p>
                                <img className="w-[1.5rem] aspect-square rounded-lg  ml-[0.98rem]  mr-4" src="/like.svg" />
                                <p className="text-sm font-semibold leading-relaxed text-gray-900">400</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between w-full items-baseline h-[2.69rem]">
                            <p className="w-auto text-2xl font-semibold leading-loose text-left text-brand-text-black">Chance to mint for free</p>
                            <p className="w-auto text-sm leading-tight text-brand">8h</p>
                        </div>
                        <p className="w-full h-[5.04rem] text-sm leading-tight text-brand-text-gray font-Urbanist">$100 | 1.400.000 IDR in 8 Hours 🦄<br />- RT & Follow <br />@Free_Mint_Pass<br /> - RT, Like + Tag 3 Friends on Their 📌</p>
                        <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray font-Urbanist">by <span className='text-brand'>by Money Bears NFT</span></p>
                        <button className="mx-auto text-sm leading-snug bg-brand w-[10.88rem] h-7 border rounded text-white mt-[50.38rem]">Join</button>
                    </div>
                    <div className="inline-flex flex-col space-y-[0.4rem] items-start justify-start px-[1rem] pt-[0.88rem] bg-white border rounded-lg border-grey-300 font-Urbanist " style={{ width: 400, height: 640, }}>
                        <div className="w-full h-[25.56rem] bg-gradient-to-b from-[#D6FFEE] via-[#EFC56761] to-[#FFA11400] rounded-lg relative">
                            <p className="h-auto w-[5rem] text-sm font-semibold leading-relaxed text-center text-brand font-Urbanist absolute top-[0.90rem] left-[0.96rem] bg-white p-2">MINT</p>
                            <div className="w-auto h-auto absolute bottom-[0.90rem] right-[0.96rem] flex flex-row justify-end front-Urbanist">
                                <img className="w-[1.5rem] aspect-square rounded-lg mr-4" src="/views.svg" />
                                <p className="text-sm font-semibold leading-relaxed text-gray-900">1.1w</p>
                                <img className="w-[1.5rem] aspect-square rounded-lg  ml-[0.98rem]  mr-4" src="/like.svg" />
                                <p className="text-sm font-semibold leading-relaxed text-gray-900">400</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between w-full items-baseline h-[2.69rem]">
                            <p className="w-auto text-2xl font-semibold leading-loose text-left text-brand-text-black">Chance to mint for free</p>
                            <p className="w-auto text-sm leading-tight text-brand">8h</p>
                        </div>
                        <p className="w-full h-[5.04rem] text-sm leading-tight text-brand-text-gray font-Urbanist">$100 | 1.400.000 IDR in 8 Hours 🦄<br />- RT & Follow <br />@Free_Mint_Pass<br /> - RT, Like + Tag 3 Friends on Their 📌</p>
                        <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray font-Urbanist">by <span className='text-brand'>by Money Bears NFT</span></p>
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