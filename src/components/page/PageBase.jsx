import React from 'react';
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import PageBanner from "./PageBanner";
import PageTitle from "./PageTitle";

function PageBase(props) {
    return (
        <div className="page">
            {/* Page header */}
            <PageHeader
                activeKey={props.activeKey}
                showconnect={props.showconnect}
                toogleConnect={props.toogleConnect}
            />

            {/* Page banner */}
            <PageBanner banner={props.banner} />

            {/* Page title */}
            <PageTitle
                title={props.title}
                back={props.back}
            />

            {/* Page body */}
            <div className="page-body">
                {props.body}
            </div>

            {/* Page footer */}
            <PageFooter />
        </div>
    );
}

export default PageBase;