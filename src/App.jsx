import ScholarshipPoolsPage from './routes/ScholarshipPoolsPage';
import ScholarsProgressPage from './routes/ScholarsProgressPage';
import TransactionsPage from './routes/TransactionsPage';
import DonationAmountPage from './routes/DonationAmountPage';
import DonationConfirmPage from './routes/DonationConfirmPage';
import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './styles/App.scss';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: React.createElement(ScholarshipPoolsPage),
        },
        {
            path: "/pools",
            element: React.createElement(ScholarshipPoolsPage),
        },
        {
            path: "/progress",
            element: React.createElement(ScholarsProgressPage),
        },
        {
            path: "/transactions",
            element: React.createElement(TransactionsPage),
        },
        {
            path: "/donation",
            element: React.createElement(DonationAmountPage),
        },
        {
            path: "/confirmation",
            element: React.createElement(DonationConfirmPage),
        },
    ]);

    return <RouterProvider router={ router } />;
}

export default App;
