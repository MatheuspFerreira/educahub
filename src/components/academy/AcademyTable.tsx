import { Table } from "antd";
import { Loading } from "../loading";
import { InputEmpty } from "../inputEmpty";
import { IAcademyTableProps } from "./interface/AcademyTableProps";




export function AcademyTable ({loading, columns, dataSource}:IAcademyTableProps) {
    return (
        <>
            <Table 
                columns={columns} 
                dataSource={dataSource}  
                pagination={false}
                className='FaturasConfig__firstTable'     
                loading={{
                    spinning: loading, 
                    indicator: <Loading textCarregando='Aguarde...'/>
                }}
                locale={{ 
                    emptyText:<InputEmpty text={"Você não possui nenhum aluno cadastrado."}/>                       
                }}                    

            />
        </>
    )
}