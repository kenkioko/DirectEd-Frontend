import React, { Component } from 'react';
import PageBase from "../components/page/PageBase";
import DonationAmount from "../components/DonationAmount";
import banner_img from "../images/banner.png";

class DonationAmountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banner: true,
        };
    }

    toogleBanner = (show) => {
        this.setState({
            banner: show
        });
    }

    render() {
        const body = (
            <DonationAmount hideBanner={() => this.toogleBanner(false)} />
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
                banner={this.state.banner && banner}
                body={body}
                back={back}
            />
        )
    }
}

export default DonationAmountPage;