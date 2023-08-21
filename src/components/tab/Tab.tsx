import { Tabs } from 'antd';
import { ITabProps } from './interface/TabProps';


export default function Tab ({arrayChildren,  setChartKey}:ITabProps) {
    function handleChartResize() {
        // Atualiza a chave para forçar a atualização do componente do gráfico
        // setChartKey((prevKey:number) => prevKey + 1);
    }
    
    function forceResize() {
        window.dispatchEvent(new Event('resize'));
    }
    

    function handleToggleDashboard() {
        forceResize(); 
        handleChartResize();
    };
  

    return(
        <Tabs
            onChange={handleToggleDashboard}
            type="card"
            items={arrayChildren}
        />
    )
    
}   
