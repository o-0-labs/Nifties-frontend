import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Grant, fetchAll, IApiData } from '../../../api/grants';
import PageError from 'components/500';
import GrantsCart from './dialog';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import GrantContract, { Grant as GrantType } from '../../../smartcontract/grants';
import { divide } from 'mathjs'


interface GrantFundraising {
    grants_id?: string;
    contract_address?: string;
    funded_total_ammount?: string;
    total_ammount?: string;
}

const cllContractStatus: string[] = [];
const fundraisingInfoList: GrantType[] = [];

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

    // 筹款状态信息列表状态变量
    const [fundraisingInfo, setFundraisingInfo] = React.useState<GrantType[]>([]);

    // 获取筹款状态信息，根据众筹合约地址
    const getFundraising = (list: GrantFundraising[]) => {
        list.map((grantFundraising) => {
            if (cllContractStatus.indexOf(grantFundraising.contract_address) == -1) {
                cllContractStatus.push(grantFundraising.contract_address);
                setTimeout(() => {
                    callContract(grantFundraising);
                }, 3000);
            }
        });

    }

    // 掉用众筹合约函数
    const callContract = async (grantFundraising: GrantFundraising) => {
        const grantContract = await new GrantContract(grantFundraising.contract_address);
        setTimeout(() => {
            grantContract.get().then((res) => {
                if (res) {
                    const info = { ...res };
                    info.grants_id = grantFundraising.grants_id;
                    info.contract_address = grantFundraising.contract_address;
                    fundraisingInfoList.push(info);
                    setFundraisingInfo([...fundraisingInfo, info]);
                } else {
                    console.error(`callContract function failed.`);
                }
            }, (err) => {
                console.error(`callContract failed.`);
            });
        }, 5000);

    };


    return (
        <QueryClientProvider client={queryClient}>
            <ListComponent onOpenPayNowDialogChange={handleOpenPayNowDialogChange} getFundraising={getFundraising} fundraisingInfo={fundraisingInfo} />
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
    getFundraising: (grantFundraisingList: GrantFundraising[]) => void;
    fundraisingInfo: GrantType[];
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

    // 获取筹款状态信息，根据众筹合约地址
    setTimeout(() => {
        let grantFundraisingList: GrantFundraising[] = [];
        grants.map(({ grants_id, contract_address }, index) => {
            grantFundraisingList.push({
                'grants_id': grants_id,
                'contract_address': contract_address
            });
        });
        props.getFundraising(grantFundraisingList);
    });

    // 根据grants_id获取众筹合约信息
    const getFundraisingInfo = (grants_id: string): GrantType => {
        let fundraisingInfo: GrantType;
        fundraisingInfoList.map((info) => {
            if (info.grants_id == grants_id) {
                fundraisingInfo = info;
                return;
            }
        })

        return fundraisingInfo;
    }

    // 转换ICP单位为DOM单位(1ICP = 100_000_000dom)
    const convertICP = (dom: BigInt): string => {
        // @ts-ignore
        return divide(dom.toString(), 1e8);
    }

    return (
        <>
            {grants.map(({ grants_id, logo, title, user_name, description, contract_address }, index) => (
                <div className="inline-flex flex-col space-y-[0.5rem] items-start justify-start px-5 pt-7 bg-white border rounded-lg border-grey-300 font-Urbanist justify-self-start" style={{ width: 370, height: 605, }} key={grants_id}>
                    <img className="w-full h-[16.88rem] bg-gray-300 rounded-lg" src={logo} />
                    <p className="w-auto h-[1.5rem] text-xl leading-6 text-left text-brand-text-black break-normal  mt-[0.5rem]">{title}</p>
                    <p className="w-auto text-sm leading-tight text-brand-text-gray mt-[0.5rem]">by <span className='text-brand'>{user_name}</span></p>
                    <p className="w-full h-[7.8rem] overflow-hidden text-sm leading-tight text-brand-text-gray  break-normal mt-[0.5rem]">{description}</p>
                    <div className="w-full bg-gray-300 h-[1px]"></div>
                    <div className='flex flex-row justify-start w-full items-baseline h-[40px]'>
                        <>
                            {
                                !getFundraisingInfo(grants_id) ? (
                                    <Stack spacing={1} className="w-full h-full">
                                        <Skeleton variant="text" />
                                    </Stack>
                                ) : (
                                    <>
                                        <p className="h-auto text-xl font-semibold leading-loose font-Urbanist mr-4">{convertICP(getFundraisingInfo(grants_id).funded_total_ammount)} Received</p>
                                        <p className="h-auto text-sm leading-tight text-gray-500 font-Urbanist">/ {convertICP(getFundraisingInfo(grants_id).total_ammount)} Total(ICP) </p>
                                    </>
                                )
                            }
                        </>
                    </div>
                    <button className="mx-auto text-sm leading-snug bg-brand w-[10.88rem] h-7 border rounded text-white mt-[50.38rem]" onClick={() => props.onOpenPayNowDialogChange(contract_address)}>Pay now</button>
                </div>
            ))
            }
        </>
    );
};