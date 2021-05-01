import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class AuthorDetails extends Component {
    render() {
        return (
            <div>
                <h1>AuthorDetails Screen</h1>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(AuthorDetails);