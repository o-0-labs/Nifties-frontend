import React from 'react';
import { Link } from "react-router-dom";
import GrantsList from './components/list';
import Tooltip from '@mui/material/Tooltip';
import { getUserInfo } from "utils/Auth";

const bannerImage = require('static/grants-index-banner.png');

// 获取到Session的用户信息
const user = getUserInfo();

export default function Grant() {

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
                    {user.userId ? (
                        <Link to={`/grants/create`}>
                            <button className="text-sm leading-snug text-brand w-[10.88rem] h-7 bg-white border rounded border-brand">Create</button>
                        </Link>
                    ) : (
                        <Tooltip title="This function requires you to be sign in, please click the sign in button in the top right hand corner." arrow>
                            <button className="text-sm leading-snug text-brand w-[10.88rem] h-7 bg-white border rounded border-brand">Create</button>
                        </Tooltip>
                    )
                    }
                </div>
                <div className=" pt-[1.5rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10  justify-items-center place-items-center">
                    <GrantsList />
                </div>
            </section >
        </div >
    );
};