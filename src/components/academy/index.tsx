import { ColumnsType } from "antd/es/table";
import { MyLayout } from "../MyLayout";

export function Academy (){

    const columns: ColumnsType<any> = [
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (_, current) => (
                
                <>
                
                    {current.status.map((statusItem: string) => {
                        
                        let color = ''
                        if (statusItem.toLocaleLowerCase() === 'aberta') {
                            color = 'orange';
    
                        }else if(statusItem.toLocaleLowerCase() === 'paga' || statusItem.toLocaleLowerCase() === 'aprovada'){
                            color = 'green';
    
                        }else if(statusItem.toLocaleLowerCase() === 'cancelada'){
                            color = 'red';
    
                        }else {
                            color = 'volcano';
    
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
          title: 'Competência',
          dataIndex: 'competencia',
          key: 'competencia',
        },
        {
            title: 'Fechamento previsto',
            dataIndex: 'fechamento',
            key: 'fechamento',
        },
        {
          title: 'Valor',
          dataIndex: 'valor',
          key: 'valor',
        },
        {
            title: 'Data de aprovação',
            dataIndex: 'dataAprovacao',
            key: 'dataAprovacao',
        },
        {
            title: 'Aprovador',
            dataIndex: 'aprovador',
            key: 'aprovador',
        }, 
        {
            title: 'Cód Revenda',
            dataIndex: 'codrevenda',
            key: 'codrevenda',
        },
        {
            title: 'Razão Revenda',
            dataIndex: 'razaoRevenda',
            key: 'razaoRevenda',
        },
        {
            title: 'Ações',
            key: 'action',
            render: (_, record) => (
            
                <>
                    {                      
                        
                        <Space size="middle">
                            { 
                                permission !== '**' && verifyActionsDay && record.competencia === competencia && record.status[0] === 'aberta' 
                                ?
                                <Tooltip 
                                    placement="bottom" 
                                    title='Aprovar fatura'            
                                >
                                    <a 
                                        href='#/' 
                                        className='FaturasConfig__iconsApprove'
                                        onClick={()=>{
                                            console.log(record)
                                            setApprove({
                                                ...approve, 
                                                cdgFatura:record.key, 
                                                state:true,
                                                competencia:record?.competencia
                                            })
                                            setValues({...values, codrevenda:record.codrevenda?.toString()})
                                            
                                        }}
                                    >
                                        <CheckOutlined />
                                    </a>
        
                                </Tooltip>
                                :
                                permission === '**' && record.status[0] === 'aberta' 
                                &&
                                <Tooltip 
                                    placement="bottom" 
                                    title='Aprovar fatura'            
                                >
                                    <a 
                                        href='#/' 
                                        className='FaturasConfig__iconsApprove'
                                        onClick={()=>{
                                            console.log(record)
                                            setApprove({
                                                ...approve, 
                                                cdgFatura:record.key, 
                                                state:true,
                                                competencia:record?.competencia
                                            })
                                            setValues({...values, codrevenda:record.codrevenda?.toString()})
                                            
                                        }}
                                    >
                                        <CheckOutlined />
                                    </a>
        
                                </Tooltip>
                                
                            }
    
                            {  
                                permission !== '**' && verifyActionsDay && record.status[0] === 'aberta'
                                ?
                                <Tooltip 
                                    placement="bottom" 
                                    title='Contestar fatura'            
                                >
                                    <a 
                                        href='#/' 
                                        className='FaturasConfig__iconsContest'
                                        onClick={()=>{
                                            setContest({
                                                ...contest, 
                                                cdgFatura:record.key, 
                                                state:true,
                                                competencia:record?.competencia
                                            })
                                            setValues({...values, codrevenda:record.codrevenda?.toString()})
                                                                                
                                        }}
                                    >
                                        <WarningOutlined />
                                    </a>
    
                                </Tooltip>
                                :
                                permission === '**' && record.status[0] === 'aberta' 
                                &&
                                <Tooltip 
                                    placement="bottom" 
                                    title='Contestar fatura'            
                                >
                                    <a 
                                        href='#/' 
                                        className='FaturasConfig__iconsContest'
                                        onClick={()=>{
                                            setContest({
                                                ...contest, 
                                                cdgFatura:record.key, 
                                                state:true,
                                                competencia:record?.competencia
                                            })
                                            setValues({...values, codrevenda:record.codrevenda?.toString()})
                                                                                
                                        }}
                                    >
                                        <WarningOutlined />
                                    </a>
    
                                </Tooltip>
                            }
                            <Tooltip 
                                placement="bottom" 
                                title='Detalhar fatura'            
                            >
                                <a 
                                    href='#/' 
                                    className='FaturasConfig__iconsDetails'
                                    onClick={()=>{
                                        setDetails(
                                            {
                                                ...details, 
                                                competencia:record.competencia, 
                                                codrevenda:record.codrevenda.toString(),
                                                razaoRevenda:record.razaoRevenda,
                                                state:true
                                            }
                                        )
                                        handleGetFaturasItens(record.competencia, record.codrevenda.toString())
                                      
                                    }}
                                >
                                    <SearchOutlined />
                                </a>
    
                            </Tooltip>
                            
            
                        </Space>
                        // :                       
                        // record.status.map((statusItem: string) => {
                        //     let color = ''
                        //     let text = ''
                        //     if(statusItem.toLocaleLowerCase() === 'paga' || statusItem.toLocaleLowerCase() === 'aprovada'){
                        //         color = 'green';
                        //         text = 'Fatura aprovada'
        
                        //     }else if(statusItem.toLocaleLowerCase() === 'cancelada'){
                        //         color = 'red';
                        //         text = 'Cancelada'
        
                        //     }else if(statusItem.toLocaleLowerCase() === 'aguardando contestação'){
                        //         color = 'volcano';
                        //         text = 'Em Análise'
        
                        //     }
                        //     return (
                        //         <Tag color={color} key={statusItem} style={{padding:'3px'}}>
                        //             {text.toUpperCase()}
                        //         </Tag>
                        //     );
                        // })
                    
                    }
                </>
            
            )
        }   
    ];

    
    return (
        <MyLayout
            component={
                <></>
            }
            selectedKeys="5"
        />

    )


}