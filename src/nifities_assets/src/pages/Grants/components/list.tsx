import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Grant, fetchAll, IApiData } from '../../../api/grants';
import PageError from 'components/500';
import GrantsCart from './dialog';


const queryClient = new QueryClient();
// const cover0Image = require('static/hackathons-list-cover-1.jpg');
export default function GrantsList(props: {
    children?: React.ReactNode;
}) {
    // Grants Cart Dialog
    const [openPayNowDialog, setOpenPayNowDialog] = React.useState(false);
    const handleOpenPayNowDialogChange = (currentContractAddress: string) => {
        setContractAddress(currentContractAddress);
        setOpenPayNowDialog(openPayNowDialog ? false : true);
    };

    // contractAddress
    const [contractAddress, setContractAddress] = React.useState('');
    const handleSetHackathonId = (address: string) => {
        setContractAddress(address);
    }


    return (
        <QueryClientProvider client={queryClient}>
            <ListComponent onOpenPayNowDialogChange={handleOpenPayNowDialogChange} />
            <GrantsCart open={openPayNowDialog} onOpenPayNowDialogChange={handleOpenPayNowDialogChange} contractAddress={contractAddress} />
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
    onOpenPayNowDialogChange: (address: string) => void;
}) {

    // 获取黑客松活动列表数据
    const { status, error, data } = useQuery<IApiData, Error>(`grants/query`, () => fetchAll());

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

    const grants = data.data.records as Grant[];

    return (
        <>
            {grants.map(({ grants_id, logo, title, user_name, description, total_raised, contract_address}, index) => (
                <div className="inline-flex flex-col space-y-[0.5rem] items-start justify-start px-5 pt-7 bg-white border rounded-lg border-grey-300 font-Urbanist justify-self-start" style={{ width: 370, height: 605, }} key={grants_id}>
                    <img className="w-full h-[16.88rem] bg-gray-300 rounded-lg" src={logo} />
                    <p className="w-auto h-[1.5rem] text-xl leading-6 text-left text-brand-text-black break-normal  mt-[0.5rem]">{title}</p>
                    <p className="w-auto text-sm leading-tight text-brand-text-gray mt-[0.5rem]">by <span className='text-brand'>{user_name}</span></p>
                    <p className="w-full h-[7.8rem] overflow-hidden text-sm leading-tight text-brand-text-gray  break-normal mt-[0.5rem]">{description}</p>
                    <div className="w-full bg-gray-300 h-[1px]"></div>
                    <div className='flex flex-row justify-start w-full items-baseline'>
                        <p className="h-auto text-xl font-semibold leading-loose font-Urbanist mr-4">${total_raised}</p>
                        <p className="h-auto text-sm leading-tight text-gray-500 font-Urbanist">total raised</p>
                    </div>
                    <button className="mx-auto text-sm leading-snug bg-brand w-[10.88rem] h-7 border rounded text-white mt-[50.38rem]" onClick={ () => props.onOpenPayNowDialogChange(contract_address) }>Pay now</button>
                </div>
            ))
            }
        </>
    );
};