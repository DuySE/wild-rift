import React, { Component } from 'react';
import { withRouter } from 'react-router';

class HeroDetail extends Component {

    componentDidMount() {
        const hero_name = this.props.match.params.name;
        this.props.handleGetOne(hero_name);
    }

    render() {
        const { heroes } = this.props;

        return (
            <div>
                Hello World
            </div>
        )
    }
}

export default withRouter(HeroDetail)
