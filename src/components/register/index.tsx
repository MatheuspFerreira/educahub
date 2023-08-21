import Tab from "../tab/Tab";
import { RegisterStudent } from "./RegisterStudent";
import { RegisterTeacher } from "./RegisterTeacher";
import "./styles/index.css"

export function Register () {
    const arrayChildrenTab = [
        {
            label: `Aluno`,
            key: 'aluno',
            children: <RegisterStudent/>,
        },
        {
            label: `Professor`,
            key: 'professor',
            children: <RegisterTeacher/>,
        },
        
    ];
    return (
        <div className="Register__container">
            <Tab 
                arrayChildren={arrayChildrenTab}
            
            />

        </div>
    )
}