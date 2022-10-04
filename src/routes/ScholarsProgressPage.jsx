import React, { Component } from 'react';
import PageBase from "../components/page/PageBase";

class ScholarsProgressPage extends Component {
    render() {
        const body = (
            <div className="scholars-progress">
                scholar's progress
            </div>
        );

        return (
            <PageBase body={ body } />
        )
    }
}

export default ScholarsProgressPage;