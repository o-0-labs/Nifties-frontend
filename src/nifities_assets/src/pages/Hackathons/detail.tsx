import React from 'react';
import { useParams } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Hackathon, fetchById, IApiData } from '../../api/hackahton';
import PageNotFound from 'components/404';
import PageError from 'components/500';

const queryClient = new QueryClient();

const bannerImage = require('static/hackathons-detail-banner.jpg');
export default function HackathonsDetail() {
    return (
        <QueryClientProvider client={queryClient}>
            <Detail />
        </QueryClientProvider>
    );
};

function Detail() {
    let { id } = useParams<{ id: string }>();

    // 获取黑客松活动列表数据
    const { status, error, data } = useQuery<IApiData, Error>(`hackathons/detail/${id}`, () => fetchById(id));

    if (status == "loading") {
        return <div className='w-screen text-left'>Loading...</div>;
    }

    if (error) {
        return <PageError />;
    }

    // API返回错误
    if (data.code !== 0) {
        return <PageNotFound />;
    }

    const hackathon = data.data as Hackathon;

    return (
        <div className='mx-auto w-[1190px] my-[2.06rem]'>
            <section title="Cover Section">
                <div className='bg-gray-300 mx-[7.06rem] h-[21.63rem] flex flex-col justify-center relative'>
                    <img className="w-full h-full" src={bannerImage} />
                    <div className="w-full h-full absolute text-center">
                        <img className="w-[12.19] h-auto bg-gray-100 mx-auto mt-[3.63rem]" src={hackathon.image} />
                    </div>
                </div>
            </section>

            <section title="Content Section">
                <div className="mx-[7.06rem] relative -top-[1.38rem]">

                    <div className="mx-auto w-auto h-[11.69rem] bg-white border rounded-lg border-gray-300 text-left flex flex-row justify-between align-middle" >
                        <div className="inline-flex flex-col space-y-5 items-start justify-start ml-[3.38rem] my-auto" style={{ width: 701, height: 115, }}>
                            <p className="text-5xl font-semibold leading-10 text-brand-black text-Poppins" style={{ width: 701, }}>{hackathon.title}</p>
                            <p className="text-xl font-medium leading-loose text-brand text-Urbanist" style={{ width: 657.71, }}>{hackathon.date}</p>
                        </div>
                        <div className="inline-flex flex-col items-center justify-center my-auto space-y-[0.88rem] w-auto  mr-[3.38rem]">
                            <a className="text-sm leading-snug text-brand w-[10.88rem] h-7 py-1 bg-white border rounded border-brand text-center" href={hackathon.discord_url} rel="external" title="Go to the Discroid channel" target="_blank">Join discord</a>
                            <button className="text-sm leading-snug bg-brand w-[10.88rem] h-7 py-1 border rounded text-white">Join now</button>
                        </div>
                    </div>


                    <div className="mx-auto mt-[1.56rem] px-[3.38rem] py-[1.6rem] bg-white border rounded-lg border-gray-300">
                        <div className="text-left">
                            <p className="text-2xl font-semibold leading-loose text-gray-500 font-Urbanist">Sponsored by</p>
                            <div className="flex flex-row flex-wrap justify-start align-middle mt-[2.46rem]">
                                {hackathon.sponsored.split(',').map((url, index) => (
                                    <img className="w-[8.75rem] h-[8.75rem] aspect-square" src={url} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mt-[1.56rem] px-[3.38rem] py-[1.6rem] bg-white border rounded-lg border-gray-300 text-center">
                        <div className="text-left px-[3.38]" dangerouslySetInnerHTML={{ __html: hackathon.content ? hackathon.content : '' }} />
                    </div>
                </div>
            </section>
        </div>
    );
};