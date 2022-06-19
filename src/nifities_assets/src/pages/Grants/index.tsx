import React from 'react';
import { Link } from "react-router-dom";
import GrantsCart from './components/dialog';
import GrantContract from '../../smartcontract/grants';

const bannerImage = require('static/grants-index-banner.png');
const cover0Image = require('static/grants-list-cover-0.jpg');
const cover1Image = require('static/grants-list-cover-1.jpg');
const cover2Image = require('static/grants-list-cover-2.jpg');
const cover3Image = require('static/grants-list-cover-3.jpg');

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
        <div className='mx-auto w-[1190px] py-[4.06rem]'>
            <section className='px-[1rem]'>
                <div className='flex flex-col-reverse md:flex-row md:justify-between '>
                    <div className="w-auto">
                        <p className="xl:text-5xl lg:text-4xl sm:text-3xl font-semibold font-Poppins xl:leading-[4.06rem] text-brand-text-black">
                            Discover and Fund
                            <br />
                            Fantastic Projects
                        </p>
                        <p className="xl:text-xl lg:text-lg sm:text-base font-medium font-Urbanist xl:leading-[2rem] text-brand-text-gray mt-[1.5rem]">
                            Design NFT project, unleash your whimsy, and earn
                            <br />
                            case and prizes!
                        </p>
                    </div>
                    <img className="w-[35.44rem] h-[12.81rem]" src={bannerImage} />
                </div>
            </section>

            <section className='mt-[7.19rem]'>
                <div className="flex flex-row justify-between w-auto">
                    <p className="text-3xl leading-10 text-left text-gray-900">Explore Grants</p>
                    <Link to={`/grants/create`}>
                        <button className="text-sm leading-snug text-brand w-[10.88rem] h-7 bg-white border rounded border-brand">Create</button>
                    </Link>
                </div>
                <div className=" pt-[1.5rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10  justify-items-center place-items-center">
                    <div className="inline-flex flex-col space-y-[0.5rem] items-start justify-start px-5 pt-7 bg-white border rounded-lg border-grey-300 font-Urbanist justify-self-start" style={{ width: 370, height: 605, }}>
                        <img className="w-full h-[16.88rem] bg-gray-300 rounded-lg" src={cover0Image} />
                        <p className="w-auto h-[1.5rem] text-xl leading-6 text-left text-brand-text-black break-normal  mt-[0.5rem]">Rhythmic Dance</p>
                        <p className="w-auto text-sm leading-tight text-brand-text-gray mt-[0.5rem]">by <span className='text-brand'>Rick</span></p>
                        <p className="w-full h-[7.8rem] overflow-hidden text-sm leading-tight text-brand-text-gray  break-normal mt-[0.5rem]">I am Rick, a creative designer and art director and NFT artist. I love doing creative works and visualizing crazy but realistic things. I have a motto to live by “Creative with passio”.</p>
                        <div className="w-full bg-gray-300 h-[1px]"></div>
                        <div className='flex flex-row justify-start w-full items-baseline'>
                            <p className="h-auto text-xl font-semibold leading-loose font-Urbanist mr-4">$93,564</p>
                            <p className="h-auto text-sm leading-tight text-gray-500 font-Urbanist">total raised</p>
                        </div>
                        <button className="mx-auto text-sm leading-snug bg-brand w-[10.88rem] h-7 border rounded text-white mt-[50.38rem]" onClick={() => { handleOpenPayNowDialogChange(process.env.SMART_CONTRACT_ADDRESS_GRANTS) }}>Pay now</button>
                    </div>
                    <div className="inline-flex flex-col space-y-[0.5rem] items-start justify-start px-5 pt-7 bg-white border rounded-lg border-grey-300 font-Urbanist" style={{ width: 370, height: 605, }}>
                        <img className="w-full h-[16.88rem] bg-gray-300 rounded-lg" src={cover1Image} />
                        <p className="w-auto h-[1.5rem] text-xl leading-6 text-left text-brand-text-black break-normal  mt-[0.5rem]">Bored Bulls NFTs</p>
                        <p className="w-auto text-sm leading-tight text-brand-text-gray mt-[0.5rem]">by <span className='text-brand'>Chrissy</span></p>
                        <p className="w-full h-[7.8rem] overflow-hidden text-sm leading-tight text-brand-text-gray  break-normal mt-[0.5rem]">My name is Chrissy and I like arts and new technology. At the point when I found out about cryptocurrency and NFTs. I wanted to participate in this new game and bring along all my supporters. NFTs,Cryptos and Blockchain are going to change the world.</p>
                        <div className="w-full bg-gray-300 h-[1px]"></div>
                        <div className='flex flex-row justify-start w-full items-baseline'>
                            <p className="h-auto text-xl font-semibold leading-loose font-Urbanist mr-4">$85,617</p>
                            <p className="h-auto text-sm leading-tight text-gray-500 font-Urbanist">total raised</p>
                        </div>
                        <button className="mx-auto text-sm leading-snug bg-brand w-[10.88rem] h-7 border rounded text-white mt-[50.38rem]" onClick={() => { handleOpenPayNowDialogChange(process.env.SMART_CONTRACT_ADDRESS_GRANTS) }}>Pay now</button>
                    </div>
                    <div className="inline-flex flex-col space-y-[0.5rem] items-start justify-start px-5 pt-7 bg-white border rounded-lg border-grey-300 font-Urbanist justify-self-end" style={{ width: 370, height: 605, }}>
                        <img className="w-full h-[16.88rem] bg-gray-300 rounded-lg" src={cover2Image} />
                        <p className="w-auto h-[1.5rem] text-xl leading-6 text-left text-brand-text-black break-normal  mt-[0.5rem]">Graz208 Art for Down Syndrome</p>
                        <p className="w-auto text-sm leading-tight text-brand-text-gray mt-[0.5rem]">by <span className='text-brand'>iniziale</span></p>
                        <p className="w-full h-[7.8rem] overflow-hidden text-sm leading-tight text-brand-text-gray  break-normal mt-[0.5rem]">My name is Graziana, I am an Italian artist with Down Syndrome, born in Catania (IT) in 2008. I love fine arts and I produce paintings as a result of my fantasy. I decided to donate my first NFT, as in the picture, to a network of non-profit organizations to raise funds for their survival. My dream is to help those organizations to support activities for children with disabilities.</p>
                        <div className="w-full bg-gray-300 h-[1px]"></div>
                        <div className='flex flex-row justify-start w-full items-baseline'>
                            <p className="h-auto text-xl font-semibold leading-loose font-Urbanist mr-4">$91,667 </p>
                            <p className="h-auto text-sm leading-tight text-gray-500 font-Urbanist">total raised</p>
                        </div>
                        <button className="mx-auto text-sm leading-snug bg-brand w-[10.88rem] h-7 border rounded text-white mt-[50.38rem]" onClick={() => { handleOpenPayNowDialogChange(process.env.SMART_CONTRACT_ADDRESS_GRANTS) }}>Pay now</button>
                    </div>
                    <div className="inline-flex flex-col space-y-[0.5rem] items-start justify-start px-5 pt-7 bg-white border rounded-lg border-grey-300 font-Urbanist justify-self-start" style={{ width: 370, height: 605, }}>
                        <img className="w-full h-[16.88rem] bg-gray-300 rounded-lg" src={cover3Image} />
                        <p className="w-auto h-[1.5rem] text-xl leading-6 text-left text-brand-text-black break-normal  mt-[0.5rem]">Andromeda</p>
                        <p className="w-auto text-sm leading-tight text-brand-text-gray mt-[0.5rem]">by <span className='text-brand'>Lilly</span></p>
                        <p className="w-full h-[7.8rem] overflow-hidden text-sm leading-tight text-brand-text-gray  break-normal mt-[0.5rem]">I am the creator of Andromeda, the imagineer of a revolutionary concept and production line. The mastermind behind the concept art, and the formulator of the magical balance of elements.</p>
                        <div className="w-full bg-gray-300 h-[1px]"></div>
                        <div className='flex flex-row justify-start w-full items-baseline'>
                            <p className="h-auto text-xl font-semibold leading-loose font-Urbanist mr-4">$93,564</p>
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