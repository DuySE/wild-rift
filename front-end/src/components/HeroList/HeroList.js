import React, { Component } from 'react';
import { withRouter } from 'react-router';
import 'antd/dist/antd.css';
import { Row, Col, Image, Table, Space, Tag } from 'antd';


class HeroList extends Component {

    componentDidMount() {
    }

    render() {
        const { heroes } = this.props;



        return (
            <div>
                Hero Listing Page
            </div>
        )
    }
}

export default withRouter(HeroList)
