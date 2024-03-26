import React from "react"

import { MeterReadingType } from "../../../Model/types"

import SubmitMeterReadingContainer from "../SubmitMeterReading/SubmitMeterReading.container"
import MeterReadingsContainer from "../MeterReadings/MeterReadings.container"
import PredictedUsageContainer from "../PredictedUsage/PredictedUsage.container"

const DashboardContainer: React.FC = () => {
    const [key, setKey] = React.useState(Date.now())
    const userId = "0" // TODO page params?
    const meterReadingType = MeterReadingType.ELECTRICITY // TODO page params?

    return (
        <div key={key}>
            <SubmitMeterReadingContainer
                userId={userId}
                meterReadingType={meterReadingType}
                onSuccess={() => {
                    setKey(Date.now())
                }}
            />
            <PredictedUsageContainer
                userId={userId}
            />
            <MeterReadingsContainer
                userId={userId}
            />
        </div>

    )
}

export default DashboardContainer
