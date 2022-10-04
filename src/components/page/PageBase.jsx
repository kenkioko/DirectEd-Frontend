import React from 'react';
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import PageBanner from "./PageBanner";
import PageTitle from "./PageTitle";

function PageBase(props) {
    return (
        <div className="page">
            {/* Page header */}
            <PageHeader />

            {/* Page banner */}
            <PageBanner banner={props.banner} />

            {/* Page title */}
            <PageTitle
                title={props.title ?? null}
                back={props.back ?? null}
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