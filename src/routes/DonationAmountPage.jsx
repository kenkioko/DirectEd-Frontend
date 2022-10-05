import React, { Component } from 'react';
import PageBase from "../components/page/PageBase";
import banner_img from "../images/banner.png";

class DonationAmountPage extends Component {
    render() {
        const body = (
            <div className="donation-amount">
                transactions
            </div>
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
                title="Donate to"
                banner={banner}
                body={body}
                back={back}
            />
        )
    }
}

export default DonationAmountPage;