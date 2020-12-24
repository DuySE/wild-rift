import React, { Component } from 'react';
import { withRouter } from 'react-router';
import 'antd/dist/antd.css';
import {Row, Col, Table, Image, Button} from 'antd';
import { Card } from 'antd';
import { Menu } from 'antd';
import { Input } from 'antd';
import { Layout } from 'antd';
const { Search } = Input;
const { Meta } = Card;
const { Header, Content } = Layout;


class ItemList extends Component {

    componentDidMount() {
        this.props.handleGetList()
    }

    render() {
        const { list_items } = this.props;
        const columns = [
            {
                title: '#',
                dataIndex: 'index',
                key: 'index',
            },

            {
                title: 'Display Name',
                dataIndex: 'display_name',
                key: 'display_name',
            },
            {
                title: 'Type',
                dataIndex: 'type',
                key: 'type',

            },
            {
                title: 'Cost',
                dataIndex: 'cost',
                key: 'cost',
            },
            {
                title: 'Image',
                dataIndex: 'image_url',
                render:  image_url => <img src={image_url} width={50} height={50}/>
            },
            {
                title: 'Action',
                dataIndex: 'name',
                render:  name => <a href={'edit/' + name}> <Button type="primary"> Edit </Button></a>
             }
        ];

        let data = [];
        if (list_items) {
            list_items.forEach(function (item, index) {
                item['index'] = index + 1;
                data.push(item);
            });
        }

        return (
            <Layout>
                <Header>
                    <h1><font color="white"> Wild Rift Items </font></h1>
                </Header>
                <Content>
                    <Table columns={columns} dataSource={data} pagination={{ pageSize: 50}} />
                </Content>
            </Layout>
        )

    }
}

export default withRouter(ItemList)
