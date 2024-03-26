import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { meterReadingApi } from '../../../Api/meterReadings';
import { MeterReadingStorage } from '../../../Data/Storage';
import { MeterReading } from '../../../Model/types';

import MeterReadingsUi from './MeterReadings.ui';

const errorMessages = {
    FAILURE: 'Failed to fetch meter readings',
}

interface MeterReadingsContainerProps {
    userId: string
}

const MeterReadingsContainer: React.FC<MeterReadingsContainerProps> = (props) => {
    const [readings, setReadings] = useState<MeterReading[]>([]);
    const { isLoading, isError } = useQuery({
        queryKey: ['getMeterReadings', props.userId],
        queryFn: async () => {
            let meterReading = MeterReadingStorage.getByUserId(props.userId)

            if (!meterReading || meterReading.length < 1) {
                meterReading = await meterReadingApi.readMeterReadingByUser(props.userId)
            }

            setReadings(meterReading)
        },
    })

    return <MeterReadingsUi
        isLoading={isLoading}
        errorMessage={isError ? errorMessages.FAILURE : ""}
        readings={readings}
    />;
};

export default MeterReadingsContainer