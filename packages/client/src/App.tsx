import React from "react"
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'

import { MeterReadingContainer } from "./Components/Features/MeterReading/MeterReading.container"
import { MeterReadingType } from "./Model/types"
import "./App.scss"

const queryClient = new QueryClient()

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <MeterReadingContainer userId="0" meterReadingType={MeterReadingType.ELECTRICITY} />
        </QueryClientProvider>
    )
}

export default App
