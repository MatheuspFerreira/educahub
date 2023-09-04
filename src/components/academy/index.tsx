import { ColumnsType } from "antd/es/table";
import { MyLayout } from "../MyLayout";
import { Space, Tag, Tooltip } from "antd";
import { CheckOutlined, SearchOutlined } from "@ant-design/icons";
import { AcademyTable } from "./AcademyTable";
import { useState } from "react";

export function Academy (){
    const [loading, setLoading]= useState<boolean>(false)

    const columns: ColumnsType<any> = [
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (_, current) => (
                
                
                <>
                
                    {current.status.map((statusItem: string) => {        
                        
                        let color = ''
                        if (statusItem.toLocaleLowerCase() === 'ativo') {
                            color = 'green';

                        }else {
                            color = 'red';
    
                        }
                        return (
                            <Tag color={color} key={statusItem} style={{padding:'3px 7px'}}>
                                {statusItem.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },    
        {
          title: 'Nome',
          dataIndex: 'nome',
          key: 'nome',
        },
        {
            title: 'Matricula',
            dataIndex: 'matricula',
            key: 'matricula',
        },
        {
          title: 'Turma',
          dataIndex: 'turma',
          key: 'turma',
        },    
        {
            title: 'Ações',
            key: 'action',
            render: (_, record) => (
            
                <>
                    {                      
                        
                        <Space size="middle">                        
                      
                            <Tooltip 
                                    placement="bottom" 
                                    title='Avaliações'            
                                >
                                <a 
                                    href='#/' 
                                    className='FaturasConfig__iconsApprove'
                                    onClick={()=>{
                                        console.log(record)
                                           
                                            
                                    }}
                                >
                                    <CheckOutlined />
                                </a>
        
                            </Tooltip>                           
                            <Tooltip 
                                placement="bottom" 
                                title='Notas'            
                            >
                                <a 
                                    href='#/' 
                                    className='FaturasConfig__iconsDetails'
                                    onClick={()=>{
                                      
                                      
                                    }}
                                >
                                    <SearchOutlined />
                                </a>
    
                            </Tooltip>
                                        
                        </Space>
                   
                    }
                </>
            
            )
        }   
    ];

   
      

    
    return (
        <MyLayout
            component={
                <AcademyTable
                 
                    columns={columns}
                    loading={loading}


                />
            }
            selectedKeys="5"
        />

    )


}