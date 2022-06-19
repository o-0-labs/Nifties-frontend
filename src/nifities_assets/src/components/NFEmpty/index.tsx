import React, { ReactNode } from "react";
import { Empty } from 'antd';

interface IProps {
    description?: string | ReactNode
}
const NFEmpty = (props: IProps) => <Empty description={props.description} image={Empty.PRESENTED_IMAGE_SIMPLE} />;

export default NFEmpty;