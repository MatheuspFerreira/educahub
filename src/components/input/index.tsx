import { IInputProps } from "./interface/InputProps";
import "./styles/input.css";

export function Input ({ type, name, ref, id, onChange, label, placeholder }:IInputProps) {
    return (
        <>
            <label htmlFor={id}>
                {label}
                <input 
                    type={type} 
                    name={name}
                    id={id}
                    ref={ref}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="Input__main"

                />

            </label>
            
        
        </>
    )
}