import { LoginForm } from "./LoginForm";
import students  from "../../assets/students.jpg"
import studentIcon from "../../assets/studentIcon.webp"
import "./style/loginContent.css"
import { useState } from "react";
import { Register } from "../register";

export function LoginContent (){
    const [register, setRegister] = useState<boolean>(false);
    const newDate = new Date();
    const year = newDate.getFullYear();

    return(
        <div className="LoginContent__container">
            <div className="LoginContent__firstContent">
                <div className="LoginContent__firstContentHeader">
                    <h1>&#9733; Educa Hub </h1>                  
                    <h2>Sua Plataforma de ensino a distância.</h2>                                      
                </div> 
                <img 
                    src={students } 
                    alt="Estudantes" 
                    className="LoginContent__students"
                />
                <p>© {year} Educa Hub. Todos os direitos reservados.</p>   
                
            </div>
            <div className="LoginContent__secondContent">
                <div className="LoginContent__secondContentHeader">
                    <h2>{register ? "Registar" : "Bem-vindo de volta!"}</h2>
                    <img 
                        src={studentIcon} 
                        alt="StudentIcon"
                        className="LoginContent__imgIcon" 
                    />

                </div>              
                { 
                    register
                    ?
                    <Register />
                    :
                    <LoginForm 
                        register={register}
                        setRegister={setRegister}
                    
                    />
                }
                
            </div>
            
        </div>
    )
}