import React, { Component } from 'react';
import { withRouter } from 'react-router';
import 'antd/dist/antd.css';
import {Row, Col, Image, Table } from 'antd';
import { Layout } from 'antd';
import { Button } from 'antd';

const { Header, Content } = Layout;


class Base extends Component {
    render() {
        return (
            <Layout>
                <Header>
                    <h1 style={{"color":"white"}}> Wild Rift </h1>
                </Header>

                <Content>
                    <Row span={16} gutter={[16, 16]} style={{'marginTop': 8, 'marginLeft': 8 }}>
                        <Col span={4} >
                            <a href="/heroes/">
                            <Button type="primary" size={{'size': 'large'}} block
                                    style={{ background: "#FF7F50",
                                        borderColor: "#FF7F50" ,
                                        height: '10em',
                                        fontSize: '24px',
                                        fontWeight: 'bold'
                                    }} >
                                Heroes
                            </Button>
                            </a>
                        </Col>

                        <Col span={4} >
                            <a href="/pick/">
                                <Button type="primary" size={{'size': 'large'}} block
                                        style={{ background: "#FF7F50",
                                            borderColor: "#FF7F50" ,
                                            height: '10em',
                                            fontSize: '24px',
                                            fontWeight: 'bold'
                                        }} >
                                    Pick Board
                                </Button>
                            </a>
                        </Col>

                        <Col span={4} >
                            <a href="/items/">
                                <Button type="primary" size={{'size': 'large'}} block
                                        style={{ background: "#FF7F50",
                                            borderColor: "#FF7F50" ,
                                            height: '10em',
                                            fontSize: '24px',
                                            fontWeight: 'bold'
                                        }} >
                                    Item Board
                                </Button>
                            </a>
                        </Col>

                    </Row>
                </Content>
            </Layout>
        )
    }
}

export default withRouter(Base)
