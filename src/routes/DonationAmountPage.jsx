import React, { Component } from 'react';
import PageBase from "../components/page/PageBase";
import DonationAmount from "../components/DonationAmount";
import banner_img from "../images/banner.png";

class DonationAmountPage extends Component {
    render() {
        const body = (
            <DonationAmount />
        );

        const banner = {
            src: banner_img,
            alt: "banner",
        };

        const back = {
            text: "pool",
            url: "pools",
        };

        return (
            <PageBase
                title="Donate to St. Peters High School"
                banner={banner}
                body={body}
                back={back}
            />
        )
    }
}

export default DonationAmountPage;