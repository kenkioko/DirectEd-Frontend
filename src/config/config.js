import React from "react";
import ScholarshipPoolsPage from '../routes/ScholarshipPoolsPage';
import ScholarsProgressPage from '../routes/ScholarsProgressPage';
import TransactionsPage from '../routes/TransactionsPage';
import DonationAmountPage from '../routes/DonationAmountPage';
import DonationConfirmPage from '../routes/DonationConfirmPage';

export const routes = {
    home: {
        path: "/",
        element: React.createElement(ScholarshipPoolsPage),
    },
    pools: {
        nav_text: "Scholarship Pools",
        path: "/pools",
        element: React.createElement(ScholarshipPoolsPage),
    },
    progress: {
        nav_text: "Scholar's Progress",
        path: "/progress",
        element: React.createElement(ScholarsProgressPage),
    },
    transactions: {
        nav_text: "Transactions",
        path: "/transactions",
        element: React.createElement(TransactionsPage),
    },
    donation: {
        path: "/donation",
        element: React.createElement(DonationAmountPage),
    },
    confirmation: {
        path: "/confirmation",
        element: React.createElement(DonationConfirmPage),
    },
}