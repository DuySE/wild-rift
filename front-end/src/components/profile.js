import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Profile extends Component {
    componentDidMount() {
        this.props.handleGetList();
    }
    render() {
        const { getFile } = this.props;
        const { getIsloading } = this.props;
        const { getId } = this.props;
        const { getFilter } = this.props;
        const { getListProfile } = this.props;
        const { getProfile } = this.props;
        const { getError } = this.props;
        return (
            <div>
                <h1> HEROES </h1>
                <table>
                </table>
        </div>
        )
    }
}

export default withRouter(Profile)
