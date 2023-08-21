import { IInputProps } from "./interface/InputProps";


export function Input ({ type, name, value, id, onChange }:IInputProps) {
    return (
        <>
            <input 
                type={type} 
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                className="Input__main"

            />
        
        </>
    )
}