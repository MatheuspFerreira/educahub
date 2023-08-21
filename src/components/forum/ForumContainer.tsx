import { Button } from "antd";
import "./styles/forumContainer.css";



export default function ForumContainer (){
    return (
        <div className="ForumContainer__container">
            <div className="ForumContainer__firstContent">
                <h3>Nome do Aluno</h3>
                <p>25/08/2023</p>

            </div>
            
            <textarea 
                name="" 
                id="" 
                className="ForumContainer__textArea"
            />

            <div className="ForumContainer__btn">
                <Button type="primary" ghost={true} key={2}>Cancelar</Button>
                <Button type="primary"ghost={false} key={1}  style={{backgroundColor:"#1677FF"}}>Postar comentário   </Button>
            </div>

            
         
           


        </div>
    )
}