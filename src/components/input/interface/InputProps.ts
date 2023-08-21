import { LegacyRef } from "react";


export interface IInputProps {
    type:string,
    name:string,
    label:string,
    placeholder:string,
    ref:LegacyRef<HTMLInputElement> | undefined,
    id:string,
    onChange: () => void;

}