import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HackahtonsList from './list';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { HackathonStatus, fetchStatusCount } from '../../../api/hackahton';

/**
 * TabPanel Props接口声明
 *
 * @interface TabPanelProps
 */
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

/**
 * TabPanel组件
 *
 * @param {TabPanelProps} props
 * @return {*} 
 */
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography className=" pt-[1.5rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10" component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

/**
 * WAI-ARIA 网络无障碍辅助功能（Accessibility，也被称为 a11y）属性
 * 无障碍辅助功能: https://zh-hans.reactjs.org/docs/accessibility.html
 *
 * @param {number} index
 * @return {*} 
 */
function TabA11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const queryClient = new QueryClient();

export default function HackahtonsTab() {
    return (
        <QueryClientProvider client={queryClient}>
            <TabComponent />
        </QueryClientProvider>
    );
};

function TabComponent() {
    // Tab的状态变量
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    // 获取黑客松活动不同状态的活动总数量
    const { status, error, data } = useQuery<HackathonStatus, Error>('hackathonStatusCount', fetchStatusCount);

    // 数据加载过程中，返回渲染loading的HTML DOM
    if (status == "loading") {
        return <Box sx={{ width: '100%' }}>Loading...</Box>
    }

    // 数据加载错误时，返回渲染错误提示的HTML DOM
    if (error) {
        return <Box sx={{ width: '100%' }}>An error has occurred: {error.message}</Box>
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box>
                <Tabs value={value} onChange={handleChange} aria-label="Explore Hackathons Section Tabs" sx={{ '& .MuiTabs-indicator': { backgroundColor: '#00BCC2' }, }}>
                    <Tab label={`Happenning Now (${data?.happening})`} {...TabA11yProps(0)} className="font-Urbanist text-brand text-lg font-medium leading-normal normal-case px-2 py-0" />
                    <Tab label={`Upcoming (${data?.upcoming})`} {...TabA11yProps(1)} className="font-Urbanist text-brand text-lg font-medium leading-normal normal-case" />
                    <Tab label={`Completed (${data?.completed})`} {...TabA11yProps(2)} className="font-Urbanist text-brand text-lg font-medium leading-normal normal-case" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <HackahtonsList status="1" />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <HackahtonsList status="2" />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <HackahtonsList status="3" />
            </TabPanel>
        </Box>
    );
}