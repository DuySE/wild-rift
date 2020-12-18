import React, { Component } from 'react';
import { withRouter } from 'react-router';
import 'antd/dist/antd.css';
import {Row, Col, Image, Table } from 'antd';
import { Layout } from 'antd';
const { Header, Content } = Layout;

class HeroDetail extends Component {

    componentDidMount() {
        const hero_name = this.props.match.params.name;
        this.props.handleGetOne(hero_name);
    }

    render() {
        const { heroes } = this.props;

        const columns = [
            {
                title: 'LVL',
                dataIndex: 'level',
                key: 'level',
            },
            {
                title: 'Attack Damage',
                dataIndex: 'attack_damage',
                key: 'attack_damage',

            },
            {
                title: 'Ability Power',
                dataIndex: 'ability_power',
                key: 'ability_power',
            },
            {
                title: 'Armor',
                dataIndex: 'armor',
                key: 'armor',
            },
            {
                title: 'Magic Resistance',
                dataIndex: 'magic_resistance',
                key: 'magic_resistance',
            },
            {
                title: 'HP',
                dataIndex: 'health',
                key: 'health',
            },
            {
                title: 'Mana',
                dataIndex: 'mana',
                key: 'mana',
            },
            {
                title: 'HP Regen',
                dataIndex: 'hp_regen',
                key: 'hp_regen',
            },
            {
                title: 'Mana Regen',
                dataIndex: 'mana_regen',
                key: 'mana_regen',
            }

        ];

        let data = [];
        if (heroes.basic_profile) {
            heroes.basic_profile.forEach(function (item, index) {
                item['level'] = index + 1;
                data.push(item);
            });
        }

        return (
            <Layout>
                <Header>
                    <h1 style="color: white; "> Champion: {heroes.display_name} </h1>
                </Header>

                <Content>
                <Row>

                    <Col span={18} push={6}>
                        <Table columns={columns} dataSource={data} pagination={{ pageSize: 50}} />

                    </Col>
                    <Col span={6} pull={18}>
                        <Image
                            src={heroes.profile_image}
                        />

                    </Col>
                </Row>
                </Content>
            </Layout>
        )
    }
}

export default withRouter(HeroDetail)
