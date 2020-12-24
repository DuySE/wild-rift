import React, { Component } from 'react';
import { withRouter } from 'react-router';
import 'antd/dist/antd.css';

import {
    Row, Col, Table, Card, Menu, Input, Layout, Form, Select, InputNumber, Button
} from 'antd';
import {formItemLayout, ItemTypes, tailFormItemLayout} from "../../commons/constants";
const { Search } = Input;
const { Meta } = Card;
const { Header, Content } = Layout;
const {Option} = Select;


class ItemCreate extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        name: "",
        display_name: "",
        image_url: "",
        cost: 1000,
        type: ItemTypes[0].value
    };

    handleSubmit = (event) => {
        // event.preventDefault();
        this.props.handleCreateOne(
            this.state
        );
    };

    onChangeDisplayName = (event) => {
        this.setState({
            display_name: event.target.value,
            name: event.target.value.toLowerCase().replace(' ', '_')
        })
    };

    onChangeInputData = (event) => {
        const {name} = event.target;
        this.setState({[name]: event.target.value})
    };

    onChangeItemType = (selectedValue) => {
        this.setState({type: selectedValue})
    };

    render() {

        return <Layout>
            <Header>
                <h1><font color="white"> Wild Rift - Create New Item</font></h1>
            </Header>
            <Content>
                <Form {...formItemLayout} >
                    <Form.Item label="Display Name">
                        <Input name="display_name" onChange={this.onChangeDisplayName} value={this.state.display_name} />
                    </Form.Item>

                    <Form.Item label="Type">
                    <Select defaultValue={ItemTypes[0].value} style={{ width: 200 }} onChange={this.onChangeItemType}>
                        {ItemTypes.map(ItemType => (
                            <Option key={ItemType.value}>{ItemType.text}</Option>
                        ))}
                    </Select>
                    </Form.Item>

                    <Form.Item label="Image URL">
                        <Input name="image_url" onChange={this.onChangeInputData} value={this.state.image_url} />
                    </Form.Item>

                    <Form.Item label="Cost">
                        <InputNumber min={1} max={5000} defaultValue={1000}
                                     name="cost"
                                     value={this.state.cost}
                                     onChange={(value) => this.setState({cost: value})}
                        />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" onClick={this.handleSubmit} > Create New Item </Button>
                    </Form.Item>

                </Form>

            </Content>
        </Layout>
    }
}

export default withRouter(ItemCreate)
