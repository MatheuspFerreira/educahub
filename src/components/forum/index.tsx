import { MyLayout } from "../MyLayout";
import ForumContent from "./ForumContent";


export function Forum () {
    return (
        <MyLayout
            component={
                <ForumContent/>
            }
            selectedKeys="2"
        />
    )
}