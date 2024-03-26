import React from "react"
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'


import "./App.scss"
import DashboardContainer from "./Components/Features/Dashboard/Dashboard.container"

const queryClient = new QueryClient()

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <DashboardContainer />
        </QueryClientProvider>
    )
}

export default App
