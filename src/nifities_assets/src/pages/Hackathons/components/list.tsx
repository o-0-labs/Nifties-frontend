import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from 'axios';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { Hackathon, fetchAllByStatus } from '../../../api/hackahton';


const queryClient = new QueryClient();

export default function HackahtonsList(props: {
    children?: React.ReactNode;
    status: string;
}) {
    return (
        <QueryClientProvider client={queryClient}>
            <ListComponent status={props.status} />
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
}) {

    // 获取黑客松活动列表数据
    const { status, error, data } = useQuery<Hackathon[], Error>(`hackathons${props.status}`, () => fetchAllByStatus(props.status));

    if (status == "loading") {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>An error has occurred: {error.message}</p>
    }

    return (
        <div>
            {data?.map(({ hackathon_id, title, date, description, sponsored, status, image, discord_url }, index) => (
                <div className="inline-flex flex-col space-y-[0.5rem] items-start justify-end px-5 pt-7 bg-white border rounded-lg border-grey-300 font-Urbanist" style={{ width: 400, height: 640, }} key={hackathon_id}>
                    <img className="w-full h-1/2 bg-gray-300 rounded-lg" src={image} />
                    <p className="w-auto h-8 text-2xl font-semibold leading-loose text-left text-brand-text-black">{title}</p>
                    <p className="w-auto h-5 text-sm font-semibold leading-tight text-brand">{date}</p>
                    <p className="w-full h-1/5 text-sm font-semibold leading-tight text-brand-text-gray">{description}</p>
                    <p className="w-auto h-5 text-sm font-semibold leading-tight text-gray-500">Sponsored by</p>
                    <div className="flex flex-row">
                        {sponsored.split(',').map((url, index) => (
                            <div key={index}>
                                <img className="w-9 h-9 mr-2" src={url} />
                            </div>
                        ))}
                    </div>
                    <div className="inline-flex flex-row items-center justify-between py-[1.5rem]">
                        <button className="text-sm leading-snug text-brand w-[10.88rem] h-7 py-1 bg-white border rounded border-brand mr-[0.81rem]">Join discord</button>
                        <button className="text-sm leading-snug bg-brand w-[10.88rem] h-7 py-1 border rounded text-white">Join now</button>
                    </div>
                </div>
            ))}
            {/* <ReactQueryDevtools initialIsOpen /> */}
        </div>
    );
};