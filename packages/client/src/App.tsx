import React from "react"
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'

import { SubmitMeterReadingContainer } from "./Components/Features/SubmitMeterReading/SubmitMeterReading.container"
import { MeterReadingType } from "./Model/types"
import "./App.scss"
import MeterReadingsContainer from "./Components/Features/MeterReadings/MeterReadings.container"

const queryClient = new QueryClient()

const App: React.FC = () => {
    const [key, setKey] = React.useState(Date.now())
    const userId = "0"
    const meterReadingType = MeterReadingType.ELECTRICITY

    return (
        <QueryClientProvider client={queryClient}>
            <div key={key}>
                <SubmitMeterReadingContainer
                    userId={userId}
                    meterReadingType={meterReadingType}
                    onSuccess={() => {
                        setKey(Date.now())
                    }}
                />
                <MeterReadingsContainer
                    userId={userId}
                />
            </div>
        </QueryClientProvider>
    )
}

export default App
