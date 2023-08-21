import { useRef } from "react";
import { Input } from "../input";
import { Button } from "antd";
import "./styles/registerStudent.css";


export function RegisterStudent () {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const courseRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () =>{

    }

    return (
        <div className="RegisterStudent__container">
            <form onSubmit={handleSubmit}>
                <Input
                    type={"text"} 
                    name={"name"}
                    label="Nome"
                    id={"name"}
                    placeholder="Digite seu nome..."
                    ref={nameRef}
                    onChange={() => {
                    }}  
                
                />
               
                <Input
                    type={"text"} 
                    name={"E-mail"}
                    label="E-mail"
                    id={"E-mail"}
                    placeholder="Digite seu e-mail..."
                    ref={emailRef}
                    onChange={() => {
                    }}  
                
                />

                <Input
                    type={"password"} 
                    name={"Password"}
                    label="Password"
                    id={"Password"}
                    placeholder="Digite sua senha..."
                    ref={passwordRef}
                    onChange={() => {
                    }}  
                
                />
                
                <Input
                    type={"text"} 
                    name={"curso"}
                    label="Curso"
                    id={"Curso"}
                    placeholder="Digite sua senha..."
                    ref={courseRef}
                    onChange={() => {
                    }}  
                
                />

                <Button 
                    type="primary"
                    ghost={false}  
                    style={{backgroundColor:"rgb(58, 170, 182)"}}
                >
                    Registrar Aluno

                </Button>
                
            </form>
        </div>
    )
}