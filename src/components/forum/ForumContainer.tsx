import { Avatar, Button } from "antd";
import "./styles/forumContainer.css";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";

interface IForumContainerProps {
    disabled:boolean;
    postDisabled?:boolean;
    name:string;
    date:string;
    text:string;


}

export default function ForumContainer ({disabled, name, date, postDisabled, text}:IForumContainerProps){
    return (
        <div className="ForumContainer__container">
            <div className="ForumContainer__firstContent">
                <Avatar 
                    size={50}
                    icon={<UserOutlined />} 
                />
                <div>
                    <h3>{name}</h3>
                    <p>{date}</p>
                </div>

            </div>                    
            {
                disabled
                ?

                <div className="ForumContainer__textContent">
                    <h2>
                        {text}
                    </h2>
                </div>
                :

                <textarea 
                    name="" 
                    id="" 
                    className="ForumContainer__textArea"
                    disabled={disabled}
                />
            }

            {
                !disabled
                ?
                <div className="ForumContainer__btn">
                    <Button type="primary" ghost={true} key={2}>Cancelar</Button>
                    <Button type="primary"ghost={false} key={1}  style={{backgroundColor:"#1677FF"}}>Postar comentário   </Button>
                </div>
                :
                <div className="ForumContainer__btn">
                    <Button type="primary"ghost={false} key={1}  style={{backgroundColor:"#1677FF"}}>Responder</Button>
                </div>
            }
        
           

        </div>
    )
}