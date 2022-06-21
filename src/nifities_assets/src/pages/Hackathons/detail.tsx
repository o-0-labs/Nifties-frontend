import React from 'react';
import { useParams } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Hackathon, fetchById, IApiData } from '../../api/hackahton';
import PageNotFound from 'components/404';
import PageError from 'components/500';
import JoinNowDialog from './components/dialog';
import Tooltip from '@mui/material/Tooltip';
import { getUserInfo } from "utils/Auth";


const bannerImage = require('static/hackathons-detail-banner.jpg');

// 获取到Session的用户信息
const user = getUserInfo();

const queryClient = new QueryClient();
export default function HackathonsDetail() {
    return (
        <QueryClientProvider client={queryClient}>
            <Detail />
        </QueryClientProvider>
    );
};

function Detail() {
    let { id } = useParams<{ id: string }>();

    // Join Now Dialog
    const [openJoinNowDialog, setOpenJoinNowDialog] = React.useState(false);

    const handleOpenJoinNowDialogChange = () => {
        setOpenJoinNowDialog(openJoinNowDialog ? false : true);
    };

    // 获取黑客松活动列表数据
    const { status, error, data } = useQuery<IApiData, Error>(`hackathons/detail/${id}`, () => fetchById(id));

    if (status == "loading") {
        return <div className='mx-auto w-[1190px] my-[2.06rem] text-center'>Loading...</div>;
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
        <>
            <div className='mx-auto w-[1190px] my-[2.06rem]'>
                <section>
                    <div className='mx-[7.06rem] h-[21.63rem] flex flex-col justify-center relative'>
                        <img className="w-full h-full rounded-sm" src={bannerImage} />
                        <div className="w-full h-full absolute text-center">
                            <img className="w-[12.19rem] h-auto bg-gray-100 mx-auto mt-[9rem] " src={hackathon.image} />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="mx-[7.06rem] relative -top-[1.38rem]">

                        <div className="mx-auto w-auto h-[11.69rem] bg-white border rounded-lg border-gray-300 text-left flex flex-row justify-between align-middle" >
                            <div className="inline-flex flex-col space-y-5 items-start justify-start mx-[3.38rem] my-auto" style={{ width: 701, height: 140, }}>
                                <div className=" h-[5rem] overflow-hidden ">
                                    <p className="text-4xl font-medium leading-10 text-brand-black text-Poppins break-normal">{hackathon.title}</p>
                                </div>
                                <p className="text-xl font-medium leading-loose text-brand text-Urbanist">{hackathon.date}</p>
                            </div>
                            <div className="inline-flex flex-col items-end justify-center my-auto space-y-[0.88rem] w-2/5 mx-[3.38rem]">
                                <a className={`text-sm leading-snug text-brand w-[10.88rem] h-7 py-1 bg-white border rounded border-brand text-center ${hackathon.discord_url != null ? '' : 'hidden'}`} href={hackathon.discord_url} rel="external" title="Go to the Discroid channel" target="_blank">Join discord</a>

                                {hackathon.join_flag === null ? (
                                    user.userId ? (
                                        < button className="text-sm leading-snug bg-brand w-[10.88rem] h-7 py-1 border rounded text-white" onClick={handleOpenJoinNowDialogChange}>Join now</button>
                                    ) : (
                                        <Tooltip title="This function requires you to be sign in, please click the sign in button in the top right hand corner." arrow>
                                            < button className="text-sm leading-snug bg-brand w-[10.88rem] h-7 py-1 border rounded text-white">Join now</button>
                                        </Tooltip>
                                    )
                                ) : (
                                    < button className="text-sm leading-snug bg-brand  w-[9.88rem] h-[1.75rem] py-1 border rounded text-white disabled" >Joined</button>
                                )}
                            </div>
                        </div>


                        <div className="mx-auto mt-[1.56rem] px-[3.38rem] py-[1.6rem] bg-white border rounded-lg border-gray-300">
                            <div className="text-left">
                                <p className="text-2xl font-medium leading-loose text-gray-500 font-Urbanist">Sponsored by</p>
                                <div className="flex flex-row flex-wrap justify-start align-middle mt-[1rem] space-y-[1rem] text-center">
                                    {hackathon.sponsored.split(',').map((url, index) => (
                                        <img className=" m-auto" src={url} key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto mt-[1.56rem] px-[3.38rem] py-[1.6rem] bg-white border rounded-lg border-gray-300 text-center">
                            <img className="px-[3.38] m-auto" src={hackathon.image} />
                            <div className="text-left px-[3.38] mt-[2rem]" dangerouslySetInnerHTML={{ __html: hackathon.content ? hackathon.content : '' }} />
                        </div>
                    </div>
                </section>
            </div >

            <JoinNowDialog open={openJoinNowDialog} onOpenJoinNowDialogChange={handleOpenJoinNowDialogChange} id={hackathon.hackathon_id} />
        </>
    );
};