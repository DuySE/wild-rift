import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Heroes extends Component {
    componentDidMount() {

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

export default withRouter(Heroes)
