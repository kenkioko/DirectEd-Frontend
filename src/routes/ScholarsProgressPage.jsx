import React, { Component } from 'react';
import PageBase from "../components/page/PageBase";
import ScholarsProgress from "../components/ScholarsProgress";

import { progress } from '../mock/data/scholars_progress';

class ScholarsProgressPage extends Component {
    render() {
        const body = (
            <ScholarsProgress progress={progress} />
        );

        return (
            <PageBase
                title="Scholar's Progress"
                body={body}
            />
        )
    }
}

export default ScholarsProgressPage;