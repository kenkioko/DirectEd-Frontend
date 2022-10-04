import ScholarshipPoolsPage from './routes/ScholarshipPoolsPage.jsx';
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
    ]);

    return <RouterProvider router={ router } />;
}

export default App;
