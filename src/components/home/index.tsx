import { MyLayout } from "../MyLayout"
import { HomeContent } from "./HomeContent"

export function Home (){
    return <>
        <MyLayout
            component={
                <HomeContent />
            }
            selectedKeys="1"
        
        />
    </>
    

}