import React from 'react';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const LayoutTemplate = ({children}) => {
    return (
        <Layout style={{height:"100vh"}}>
            <Header 
                style={{backgroundColor:"#96B6C5", color:"#F9F7F7", fontSize:"20px"}}>
                    To-Do List
            </Header>
            <Content 
                style={{display:"flex", 
                backgroundColor:"#F1F0E8", 
                justifyContent:"center", 
                // alignItems:"center",
                // paddingTop:"80px",
                fontSize:"18px"
                }}>
                    {children}
            </Content>
            <Footer
                style={{backgroundColor:"#96B6C5", color:"#F9F7F7"}}>
            </Footer>
        </Layout>
    )
}

export default LayoutTemplate;