import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Hackathon, fetchAllByStatus, IApiData } from '../../../api/hackahton';
import PageError from 'components/500';
import { Link } from "react-router-dom";
import JoinNowDialog from './dialog';



const queryClient = new QueryClient();
// const cover0Image = require('static/hackathons-list-cover-1.jpg');
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
            <ListComponent status={props.status} onOpenJoinNowDialogChange={handleOpenJoinNowDialogChange} />
            <JoinNowDialog open={openJoinNowDialog} onOpenJoinNowDialogChange={handleOpenJoinNowDialogChange} />
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
    const { status, error, data } = useQuery<IApiData, Error>(`hackathons/status/${props.status}`, () => fetchAllByStatus(props.status));

    if (status == "loading") {
        return <div className='w-screen text-left'>Loading...</div>;
    }

    if (error) {
        return <PageError />;
    }

    // API返回错误
    if (data.code !== 0) {
        return <PageError />;
    }

    const Hackathons = data.data.records as Hackathon[];

    return (
        <div>
            {Hackathons.map(({ hackathon_id, title, date, description, sponsored, status, image, discord_url }, index) => (
                <div className="inline-flex flex-col space-y-[0.5rem] items-start justify-end px-5 pt-7 bg-white border rounded-lg border-grey-300 font-Urbanist" style={{ width: 370, height: 605, }} key={hackathon_id}>
                    <Link to={`/hackathons/${hackathon_id}`} className=" contents">
                        <img className="w-full h-1/2 bg-gray-300 rounded-lg" src={image} />
                        <p className="w-auto h-[3rem] text-xl leading-6 text-left text-brand-text-black break-normal  mt-[0.5rem]">{title}</p>
                        <p className="w-auto text-sm font-semibold leading-tight text-brand mt-[0.5rem]">{date}</p>
                        <p className="w-full h-[7.8rem] overflow-hidden text-sm leading-tight text-brand-text-gray  break-normal mt-[0.5rem]">{description}</p>
                        <p className="w-auto h-5 text-sm leading-tight text-gray-500 mt-[0.5rem]">Sponsored by</p>
                        <div className="flex flex-row mt-[0.5rem] h-[36px] w-full overflow-hidden">
                            {sponsored.split(',').map((url, index) => (
                                <img className="mr-[0.5rem]" src={url} key={index} />
                            ))}
                        </div>
                    </Link>
                    <div className="inline-flex flex-row items-center justify-between py-[1rem]">
                        <a className="text-sm leading-snug text-brand w-[9.88rem] h-[1.75rem] py-1 bg-white border rounded border-brand mr-[0.81rem] text-center" href={discord_url} rel="external" title="Go to the Discroid channel" target="_blank">Join discord</a>
                        <button className="text-sm leading-snug bg-brand  w-[9.88rem] h-[1.75rem] py-1 border rounded text-white" onClick={props.onOpenJoinNowDialogChange}>Join now</button>
                    </div>
                </div>
            ))}
        </div>
    );
};