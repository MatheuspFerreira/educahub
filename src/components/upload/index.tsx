import { MyLayout } from "../MyLayout";
import { UploadContent } from "./UploadContent";


export function Upload (){
    return(
        <MyLayout
            component={
                <UploadContent />
            }
            selectedKeys="6"

        />
        
    )
}