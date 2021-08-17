import react from "react";
import { Menu,Input } from "antd";

const AppLayout = ({children}) =>{
    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">노드버드</Menu.Item>
                <Menu.Item key="profile">프로필</Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton />
                </Menu.Item>

            </Menu>
        </div>
    )
};

export default AppLayout;