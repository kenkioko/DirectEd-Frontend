import React, { Component } from 'react';
import PageBase from "../components/PageBase";

class ScholarshipPollsPage extends Component {
    render() {
        const body = (
            <div className="book-container">
                scholarship pools
            </div>
        );

        return (
            <PageBase body={ body } />
        )
    }
}

export default ScholarshipPollsPage;