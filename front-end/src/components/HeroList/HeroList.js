import React, { Component } from 'react';
import { withRouter } from 'react-router';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Menu } from 'antd';
import { Input } from 'antd';
import { Layout } from 'antd';
const { Search } = Input;

const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;

class HeroList extends Component {

    componentDidMount() {
        this.props.handleGetList()
    }

    render() {
        const { list_heroes } = this.props;

        return (
            <Layout>
                <Header>
                    <h1><font color="white"> Wild Rift Heroes</font></h1>
                </Header>

                <Content>

                <Row>
                    <Col span={16}>

                        <Row gutter={[8, 24]}>
                        {
                            list_heroes.map((hero, index) => (
                                <Col span={6}>
                                <Card
                                    style={{ width: 180 }}
                                    cover={
                                        <img
                                            alt={hero.name}
                                            src={hero.profile_image}
                                            height={200}

                                        />
                                    }
                                >
                                    <Meta
                                        title={<a href={'/heroes/' + hero.name + '/'}>{hero.display_name}</a>}
                                    />
                                </Card>
                                </Col>
                        ))}
                        </Row>


                    </Col>
                    <Col span={8} >
                        <Row>
                            <Search placeholder="Search champion" enterButton />

                        </Row>
                        <Row span={6}>
                            <Menu mode="inline" >
                                <Menu.Item key="mid">
                                    Mid Land
                                </Menu.Item>
                                <Menu.Item key="top" >
                                    Top Land
                                </Menu.Item>
                                <Menu.Item key="ad" >
                                    AD Land
                                </Menu.Item>
                                <Menu.Item key="sp" >
                                    Support
                                </Menu.Item>
                                <Menu.Item key="jg" >
                                    Jungle
                                </Menu.Item>

                            </Menu>

                        </Row>
                    </Col>
                </Row>
                </Content>

            </Layout>
        )
    }
}

export default withRouter(HeroList)
