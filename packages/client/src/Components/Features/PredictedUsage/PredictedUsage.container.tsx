import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { MeterReadingStorage } from '../../../Data/Storage';
import { meterReadingApi } from '../../../Api/meterReadings';
import { MeterReading } from '../../../Model/types';

import PredictedUsageUi from './PredictedUsage.ui';

export const predictNextMonthUsage = (readings: number[]): number | null => {
    if (readings.length < 4) {
        return null
    }

    let totalDifference = 0;
    for (let i = 0; i < readings.length - 1; i++) {
        totalDifference += readings[i] - readings[i + 1];
    }

    const averageDifference = totalDifference / (readings.length - 1);
    const predictedUsage = readings[0] + averageDifference;

    return predictedUsage;
};

const errorMessages = {
    FAILURE: 'Failed to fetch meter readings',
}

interface PredictedUsageContainerProps {
    userId: string
}

const PredictedUsageContainer: React.FC<PredictedUsageContainerProps> = (props) => {
    const [readings, setReadings] = useState<MeterReading[]>([]);
    const { isLoading, isError } = useQuery({
        queryKey: ['getMeterReadingsp', props.userId],
        queryFn: async () => {
            let meterReading = MeterReadingStorage.getByUserId(props.userId)

            if (!meterReading || meterReading.length < 1) {
                meterReading = await meterReadingApi.readMeterReadingByUser(props.userId)
            }

            setReadings(meterReading)
        },
    })


    const sortedReadings = readings
        .sort((a, b) => a.date - b.date)
        .slice(0, 4)
        .map(reading => parseInt(reading.value, 10))

    return (
        <PredictedUsageUi
            isLoading={isLoading}
            errorMessage={isError ? errorMessages.FAILURE : ""}
            predictedUsage={predictNextMonthUsage(sortedReadings)}
        />
    )
}

export default PredictedUsageContainer