import ScholarshipPoolsPage from './routes/ScholarshipPoolsPage';
import ScholarsProgressPage from './routes/ScholarsProgressPage';
import TransactionsPage from './routes/TransactionsPage';
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
    ]);

    return <RouterProvider router={ router } />;
}

export default App;
