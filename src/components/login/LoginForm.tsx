import { FormEvent, useRef } from "react";
import { verifyCredentials } from "../../lib/utils/login/verifyCredentials";
import { openNotificationWithIcon } from "../../lib/utils/notification/notification";
import "./style/loginForm.css";


export function LoginForm () {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);


    const handleChangeEmail = () => {
        if(emailRef.current){
            console.log(emailRef.current.value)
        }
 
    }

    const handleChangePassword = () => {
        if(passwordRef.current){
            console.log(passwordRef.current.value)
        }
 
    }

    const handleSubimit = (event:FormEvent<HTMLFormElement>) => {
        console.log("teste")
        event.preventDefault();
        if(passwordRef.current && emailRef.current ){
            const verify = verifyCredentials(emailRef.current.value, passwordRef?.current.value)
            console.log(verify)         
            if(typeof verify === 'object' && !verify.state){
                openNotificationWithIcon("error", "Atenção",`Você precisa informar o ${verify.error}.`)          
            }

        }

    }




    return (
        <div className="LoginForm__container">
            <form onSubmit={handleSubimit}>
                <label htmlFor="email">
                    <p>E-mail</p>
                    <input 
                        type="email" 
                        name="" 
                        id="email" 
                        ref={emailRef}
                        className="LoginForm__input"
                        onChange={handleChangeEmail}
                    />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input 
                        type="password" 
                        name="" 
                        id="password" 
                        ref={passwordRef}
                        className="LoginForm__input"
                        onChange={handleChangePassword }
                    />
                </label>
                <button type="submit">Sign in</button>
            </form>
            <div className="LoginForm__options">
                <a href="#/">Esqueci minha senha</a>
                <a href="#/">Cadastrar</a>
            </div>
           
        </div>

    )
}