import React, { useEffect } from "react"
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'

import { SubmitMeterReadingContainer } from "./Components/Features/SubmitMeterReading/SubmitMeterReading.container"
import { MeterReading, MeterReadingType } from "./Model/types"
import MeterReadingsContainer from "./Components/Features/MeterReadings/MeterReadings.container"
import { meterReadingApi } from "./Api/meterReadings"
import { MeterReadingStorage } from "./Data/Storage"

import "./App.scss"

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
