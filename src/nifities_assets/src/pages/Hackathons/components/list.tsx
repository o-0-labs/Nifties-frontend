import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Hackathon, fetchAllByStatus } from '../../../api/hackahton';
import { ReactQueryDevtools } from 'react-query/devtools';
import PageError from 'components/500';
import { Link } from "react-router-dom";
import JoinNowDialog from './dialog';



const queryClient = new QueryClient();

export default function HackahtonsList(props: {
    children?: React.ReactNode;
    status: string;
}) {
    // Join Now Dialog
    const [openJoinNowDialog, setOpenJoinNowDialog] = React.useState(false);

    const handleOpenJoinNowDialogChange = () => {
        setOpenJoinNowDialog(openJoinNowDialog ? false : true);
    };

    return (
        <QueryClientProvider client={queryClient}>
            <ListComponent status={props.status} onOpenJoinNowDialogChange={handleOpenJoinNowDialogChange}/>
            <JoinNowDialog open={openJoinNowDialog} onOpenJoinNowDialogChange={handleOpenJoinNowDialogChange}/>
        </QueryClientProvider>
    );
};

/**
 * HackathonList组件
 *
 * @param {HackathonItemProps} props
 * @return {*} 
 */
function ListComponent(props: {
    children?: React.ReactNode;
    status: string;
    onOpenJoinNowDialogChange: any;
}) {

    // 获取黑客松活动列表数据
    const { status, error, data } = useQuery<Hackathon[], Error>(`hackathons/status/${props.status}`, () => fetchAllByStatus(props.status));

    if (status == "loading") {
        return <div className='w-screen my-[2.06rem] px-[2.92rem] text-center text-4xl'>Loading...</div>
    }

    if (error) {
        return <PageError />;
    }

    return (
        <div>
            {data?.map(({ hackathon_id, title, date, description, sponsored, status, image, discord_url }, index) => (
                <div className="inline-flex flex-col space-y-[0.5rem] items-start justify-end px-5 pt-7 bg-white border rounded-lg border-grey-300 font-Urbanist" style={{ width: 400, height: 640, }} key={hackathon_id}>
                    <Link to={`/hackathons/${hackathon_id}`} className=" contents">
                        <img className="w-full h-1/2 bg-gray-300 rounded-lg" src={image} />
                        <p className="w-auto h-8 text-2xl font-semibold leading-loose text-left text-brand-text-black">{title}</p>
                        <p className="w-auto h-5 text-sm font-semibold leading-tight text-brand my-[0.59rem]">{date}</p>
                        <p className="w-full h-1/5 text-sm font-semibold leading-tight text-brand-text-gray">{description}</p>
                        <p className="w-auto h-5 text-sm font-semibold leading-tight text-gray-500">Sponsored by</p>
                        <div className="flex flex-row">
                            {sponsored.split(',').map((url, index) => (
                                <div key={index}>
                                    <img className="w-9 h-9 mr-2" src={url} />
                                </div>
                            ))}
                        </div>
                    </Link>
                    <div className="inline-flex flex-row items-center justify-between py-[1.5rem]">
                        <a className="text-sm leading-snug text-brand w-[10.88rem] h-7 py-1 bg-white border rounded border-brand mr-[0.81rem] text-center" href={discord_url} rel="external" title="Go to the Discroid channel" target="_blank">Join discord</a>
                        <button className="text-sm leading-snug bg-brand w-[10.88rem] h-7 py-1 border rounded text-white" onClick={props.onOpenJoinNowDialogChange}>Join now</button>
                    </div>
                </div>
            ))}
            {/* <ReactQueryDevtools initialIsOpen /> */}
        </div>
    );
};