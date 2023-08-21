import  { useState } from 'react';
import {
    FormOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ReadOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import "./styles/myLayout.css"
const { Header, Sider, Content } = Layout;


export interface IMyLayoutProps {
    component:React.ReactNode,
    selectedKeys:string
}

export function MyLayout ({ component, selectedKeys }:IMyLayoutProps) {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    }     = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} color='rgb(58, 170, 182)'>
        <div className="demo-logo-vertical" />
        <div className='MyLayout__logoMenu'> 
            <h1>Educa Hub &#9733;</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[selectedKeys]}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <TeamOutlined />,
              label: 'Fórum',
            },
            {
              key: '3',
              icon: <ReadOutlined />,
              label: 'Avaliações',
            },
            {
                key: '4',
                icon: <FormOutlined />,
                label: 'Notas',
            },
            {
                key: '5',
                icon: <UploadOutlined />,
                label: 'Upload',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {component}
        </Content>
      </Layout>
    </Layout>
  );
}

