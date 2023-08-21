import { Button } from "antd";
import { Input } from "../input";
import { useRef } from "react";


export function RegisterTeacher () {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const areaRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () =>{

    }
    return(
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
                    name={"area"}
                    label="Área de atuação"
                    id={"Password"}
                    placeholder="Digite sua senha..."
                    ref={areaRef}
                    onChange={() => {
                    }}  
                
                />      

                <Button 
                    type="primary"
                    ghost={false}  
                    style={{backgroundColor:"rgb(58, 170, 182)"}}
                >
                    Registrar Professor

                </Button>
                
                
            </form>
        </div>
    )
}