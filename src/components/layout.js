import React from 'react';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const LayoutTemplate = ({children}) => {
    return (
        <Layout style={{height:"100vh"}}>
            <Header style={{color:"#F9F7F7"}}>헤더입니다.</Header>
            <Content style={{display:"flex", justifyContent:"center", alignItems:"center"}}>{children}</Content>
            <Footer style={{backgroundColor:"#001529", color:"#F9F7F7"}}>
                푸터입니다.
            </Footer>
        </Layout>
    )
}

export default LayoutTemplate;