import { Empty } from 'antd';
import { IEmptyProps } from './interface/EmptyProps';



export  function InputEmpty ({text}:IEmptyProps){
    return <Empty description={text} />
};