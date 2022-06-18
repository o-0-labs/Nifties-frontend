import React from 'react';
import { Link } from "react-router-dom";
import GrantsCart from './components/dialog';
import GrantContract from '../../smartcontract/grants';

export default function Grant() {
    // Grants Cart Dialog
    const [openPayNowDialog, setOpenPayNowDialog] = React.useState(false);
    const [contractAddress, setContractAddress] = React.useState('');

    const handleOpenPayNowDialogChange = (currentContractAddress: string) => {
        setContractAddress(currentContractAddress);
        setOpenPayNowDialog(openPayNowDialog ? false : true);
    };

    // 众筹合约函数
    const grantContract = new GrantContract(contractAddress, false);



    return (
        <div className='w-screen py-[4.06rem]'>
            <section className='px-[1rem] lg:px-[8rem]'>
                <div className='flex flex-col-reverse md:flex-row md:justify-between '>
                    <div className="w-auto">
                        <p className="xl:text-5xl lg:text-4xl sm:text-3xl font-semibold font-Poppins xl:leading-[4.06rem] text-brand-text-black">
                            Discover and Fund
                            <br />
                            Fantastic Projects
                        </p>
                        <p className="xl:text-xl lg:text-lg sm:text-base font-medium font-Urbanist xl:leading-[2rem] text-brand-text-gray mt-[1.5rem]">
                            Design NFT project，unleash your whimsy，and earn
                            <br />
                            case and prizes！
                        </p>
                    </div>
                    <div className="w-[35.44rem] h-[12.81rem] bg-[rgba(196,196,196,1)]">插图2.1</div>
                </div>
            </section>

            <section className='my-[7.19rem] px-[1rem] lg:px-[8rem]'>
                <div className="flex flex-row justify-between w-auto">
                    <p className="text-3xl leading-10 text-left text-gray-900">Explore Grants</p>
                    <Link to={`/grants/create`}>
                        <button className="text-sm leading-snug text-brand w-[10.88rem] h-7 bg-white border rounded border-brand">Create</button>
                    </Link>
                </div>
                <div className=" pt-[1.5rem] grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-y-10 justify-items-center justify-between">
                    <div className="inline-flex flex-col space-y-[0.8rem] items-start justify-start px-5 pt-7 bg-white border rounded-lg border-grey-300 font-Urbanist" style={{ width: 400, height: 640, }}>
                        <div className="w-full h-[16.88rem] bg-gray-300 rounded-lg" >插图2.2</div>
                        <p className="w-auto h-8 text-2xl font-semibold leading-loose text-left text-brand-text-black">CoThe Daily Gwei by Anthony</p>
                        <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray">by <span className='text-brand'>iniziale</span></p>
                        <p className="w-full h-[6.5rem] text-sm leading-tight text-brand-text-gray">This ecosystem consists of a Youtube channel where I give daily video recaps and provide educational video content, a Discord server for The Daily Gwei community to congregate in and a daily newsletter covering the Ethereum ecosystem.</p>
                        <div className="w-full bg-gray-300 h-[1px]"></div>
                        <div className='flex flex-row justify-start w-full items-baseline'>
                            <p className="h-auto text-2xl font-semibold leading-loose font-Urbanist mr-4">$91,667 </p>
                            <p className="h-auto text-sm leading-tight text-gray-500 font-Urbanist">total raised</p>
                        </div>
                        <button className="mx-auto text-sm leading-snug bg-brand w-[10.88rem] h-7 border rounded text-white mt-[50.38rem]" onClick={() => { handleOpenPayNowDialogChange(process.env.SMART_CONTRACT_ADDRESS_GRANTS) }}>Pay now</button>
                    </div>
                    <div className="inline-flex flex-col space-y-[0.8rem] items-start justify-start px-5 pt-7 bg-white border rounded-lg border-grey-300 font-Urbanist" style={{ width: 400, height: 640, }}>
                        <div className="w-full h-[16.88rem] bg-gray-300 rounded-lg" >插图2.2</div>
                        <p className="w-auto h-8 text-2xl font-semibold leading-loose text-left text-brand-text-black">CoThe Daily Gwei by Anthony</p>
                        <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray">by <span className='text-brand'>iniziale</span></p>
                        <p className="w-full h-[6.5rem] text-sm leading-tight text-brand-text-gray">This ecosystem consists of a Youtube channel where I give daily video recaps and provide educational video content, a Discord server for The Daily Gwei community to congregate in and a daily newsletter covering the Ethereum ecosystem.</p>
                        <div className="w-full bg-gray-300 h-[1px]"></div>
                        <div className='flex flex-row justify-start w-full items-baseline'>
                            <p className="h-auto text-2xl font-semibold leading-loose font-Urbanist mr-4">$91,667 </p>
                            <p className="h-auto text-sm leading-tight text-gray-500 font-Urbanist">total raised</p>
                        </div>
                        <button className="mx-auto text-sm leading-snug bg-brand w-[10.88rem] h-7 border rounded text-white mt-[50.38rem]" onClick={() => { handleOpenPayNowDialogChange(process.env.SMART_CONTRACT_ADDRESS_GRANTS) }}>Pay now</button>
                    </div>
                    <div className="inline-flex flex-col space-y-[0.8rem] items-start justify-start px-5 pt-7 bg-white border rounded-lg border-grey-300 font-Urbanist" style={{ width: 400, height: 640, }}>
                        <div className="w-full h-[16.88rem] bg-gray-300 rounded-lg" >插图2.2</div>
                        <p className="w-auto h-8 text-2xl font-semibold leading-loose text-left text-brand-text-black">CoThe Daily Gwei by Anthony</p>
                        <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray">by <span className='text-brand'>iniziale</span></p>
                        <p className="w-full h-[6.5rem] text-sm leading-tight text-brand-text-gray">This ecosystem consists of a Youtube channel where I give daily video recaps and provide educational video content, a Discord server for The Daily Gwei community to congregate in and a daily newsletter covering the Ethereum ecosystem.</p>
                        <div className="w-full bg-gray-300 h-[1px]"></div>
                        <div className='flex flex-row justify-start w-full items-baseline'>
                            <p className="h-auto text-2xl font-semibold leading-loose font-Urbanist mr-4">$91,667 </p>
                            <p className="h-auto text-sm leading-tight text-gray-500 font-Urbanist">total raised</p>
                        </div>
                        <button className="mx-auto text-sm leading-snug bg-brand w-[10.88rem] h-7 border rounded text-white mt-[50.38rem]" onClick={() => { handleOpenPayNowDialogChange(process.env.SMART_CONTRACT_ADDRESS_GRANTS) }}>Pay now</button>
                    </div>
                    <div className="inline-flex flex-col space-y-[0.8rem] items-start justify-start px-5 pt-7 bg-white border rounded-lg border-grey-300 font-Urbanist" style={{ width: 400, height: 640, }}>
                        <div className="w-full h-[16.88rem] bg-gray-300 rounded-lg" >插图2.2</div>
                        <p className="w-auto h-8 text-2xl font-semibold leading-loose text-left text-brand-text-black">CoThe Daily Gwei by Anthony</p>
                        <p className="w-auto h-5 text-sm leading-tight text-brand-text-gray">by <span className='text-brand'>iniziale</span></p>
                        <p className="w-full h-[6.5rem] text-sm leading-tight text-brand-text-gray">This ecosystem consists of a Youtube channel where I give daily video recaps and provide educational video content, a Discord server for The Daily Gwei community to congregate in and a daily newsletter covering the Ethereum ecosystem.</p>
                        <div className="w-full bg-gray-300 h-[1px]"></div>
                        <div className='flex flex-row justify-start w-full items-baseline'>
                            <p className="h-auto text-2xl font-semibold leading-loose font-Urbanist mr-4">$91,667 </p>
                            <p className="h-auto text-sm leading-tight text-gray-500 font-Urbanist">total raised</p>
                        </div>
                        <button className="mx-auto text-sm leading-snug bg-brand w-[10.88rem] h-7 border rounded text-white mt-[50.38rem]" onClick={() => { handleOpenPayNowDialogChange(process.env.SMART_CONTRACT_ADDRESS_GRANTS) }}>Pay now</button>
                    </div>
                </div>
            </section>

            <section>
                <GrantsCart open={openPayNowDialog} onOpenPayNowDialogChange={handleOpenPayNowDialogChange} contractAddress={contractAddress} grantContract={grantContract} />
            </section >
        </div>
    );
};