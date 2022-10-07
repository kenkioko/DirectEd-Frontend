// import ScholarshipPoolsPage from './routes/ScholarshipPoolsPage';
// import ScholarsProgressPage from './routes/ScholarsProgressPage';
// import TransactionsPage from './routes/TransactionsPage';
// import DonationAmountPage from './routes/DonationAmountPage';
// import DonationConfirmPage from './routes/DonationConfirmPage';
import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './styles/App.scss';
import { routes } from './config/config';

function App() {
    // const router = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: React.createElement(ScholarshipPoolsPage),
    //     },
    //     {
    //         path: "/pools",
    //         element: React.createElement(ScholarshipPoolsPage),
    //     },
    //     {
    //         path: "/progress",
    //         element: React.createElement(ScholarsProgressPage),
    //     },
    //     {
    //         path: "/transactions",
    //         element: React.createElement(TransactionsPage),
    //     },
    //     {
    //         path: "/donation",
    //         element: React.createElement(DonationAmountPage),
    //     },
    //     {
    //         path: "/confirmation",
    //         element: React.createElement(DonationConfirmPage),
    //     },
    // ]);

    var route = [];
    Object.keys(routes).map((key) => (
        route.push({
            path: routes[key].path,
            element: routes[key].element,
        })
    ));

    return <RouterProvider router={createBrowserRouter(route)} />;
}

export default App;
