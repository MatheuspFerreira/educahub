import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import "./styles/uploadContainer.css"

const props: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} - Arquivo carregado com sucesso.`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} - Falha ao carregar o arquivo.`);
      }
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
};

export function UploadContainer () {
    return(
        <div className='UploadContainer__container'>   
            <div className='UploadContainer__draggerBnt'>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Clique ou arraste o arquivo para esta área para fazer o upload.</p>
                    <p className="ant-upload-hint">
                        Suporte para upload único ou em massa. 
                        Estritamente proibido o envio de dados pessoais ou outros arquivos proibidos.
                    </p>
                    
                </Dragger>
                <div className='UploadContainer__bnt'>
                    <Button 
                            type="primary"
                            ghost={false} key={1}  
                            style={{backgroundColor:"#1677FF", marginTop:"20px"}}
                            onClick={()=>""}
                        >
                        Enviar arquivo 
                        
                    </Button>

                </div>
            

            </div>                    
            <div className='UploadContainer__text'>
                <h2>
                    <strong>Bem-vindo à seção de compartilhamento de arquivos!</strong><br/> Aqui, 
                    professores podem enviar conteúdos relacionados às aulas, como materiais, aulas, textos e exercícios.
                    <br/>Atenciosamente,
                    Educa hub &#9733;.
                    
                </h2>
                <h2><strong>O que é Proibido:</strong></h2>
                <ul className='UploadContainer__bannedList'>
                    <li>Envio de arquivos pessoais.</li>
                    <li>Compartilhamento de qualquer conteúdo não relacionado às aulas.</li>
                    <li>Violação repetida resultará em aviso.</li>
                    <li>Segunda ocorrência pode levar à suspensão ou desligamento.</li>
                </ul>

            </div>

        </div>
    )
}