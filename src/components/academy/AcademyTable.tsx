import { Table } from "antd";
import { Loading } from "../loading";
import { InputEmpty } from "../inputEmpty";
import { IAcademyTableProps } from "./interface/AcademyTableProps";




export function AcademyTable ({loading, columns}:IAcademyTableProps) {
    const dadosAlunos = [
        {
          status: Math.random() < 0.5 ? ['ativo'] : ['cancelado'],
          nome: "João Silva",
          matricula: "2023001",
          turma: "A"
        },
        {
          status: Math.random() < 0.5 ? ['ativo'] : ['cancelado'],
          nome: "Maria Santos",
          matricula: "2023002",
          turma: "B"
        },
        {
          status: Math.random() < 0.5 ? ['ativo'] : ['cancelado'],
          nome: "Pedro Oliveira",
          matricula: "2023003",
          turma: "C"
        },
        {
          status: Math.random() < 0.5 ? ['ativo'] : ['cancelado'],
          nome: "Ana Pereira",
          matricula: "2023004",
          turma: "A"
        },
        {
          status: Math.random() < 0.5 ? ['ativo'] : ['cancelado'],
          nome: "Carlos Rodrigues",
          matricula: "2023005",
          turma: "B"
        },
        {
          status: Math.random() < 0.5 ? ['ativo'] : ['cancelado'],
          nome: "Sofia Martins",
          matricula: "2023006",
          turma: "C"
        },
        {
          status: Math.random() < 0.5 ? ['ativo'] : ['cancelado'],
          nome: "Lucas Costa",
          matricula: "2023007",
          turma: "A"
        },
        {
          status: Math.random() < 0.5 ? ['ativo'] : ['cancelado'],
          nome: "Mariana Fernandes",
          matricula: "2023008",
          turma: "B"
        },
        {
          status: Math.random() < 0.5 ? ['ativo'] : ['cancelado'],
          nome: "Gustavo Sousa",
          matricula: "2023009",
          turma: "C"
        },
        {
          status: Math.random() < 0.5 ? ['ativo'] : ['cancelado'],
          nome: "Isabela Lima",
          matricula: "2023010",
          turma: "A"
        }
      ];
    return (
        <>
            <Table 
                columns={columns} 
                dataSource={dadosAlunos}  
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