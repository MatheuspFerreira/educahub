import { LoginForm } from "./LoginForm";
import students  from "../../assets/students.jpg"
import studentIcon from "../../assets/studentIcon.webp"
import "./style/loginContent.css"

export function LoginContent (){
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
                    <h2>Bem-vindo de volta!</h2>
                    <img 
                        src={studentIcon} 
                        alt="StudentIcon"
                        className="LoginContent__imgIcon" 
                    />

                </div>              
                <LoginForm />
                
            </div>
            
        </div>
    )
}