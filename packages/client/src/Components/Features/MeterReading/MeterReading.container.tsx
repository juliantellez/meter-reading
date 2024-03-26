import React, { useState } from 'react';

import { meterReadingApi } from '../../../Api/meterReadings';
import { MeterReading, MeterReadingType } from '../../../Model/types';

import MeterReadingUi from './MeterReading.ui';
import { useQuery } from 'react-query';
import { MeterReadingStorage } from '../../../Data/Storage';


const errorMessages = {
    EMPTY: 'Please enter a value.',
    FAILURE_SUBMIT: 'Failed to submit reading.',
}

interface MeterReadingContainerProps {
    userId: MeterReading["userId"],
    meterReadingType: MeterReadingType
}

export const MeterReadingContainer: React.FC<MeterReadingContainerProps> = (props) => {
    const [value, setValue] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const { isLoading, isError, refetch } = useQuery(
        {
            enabled: false,
            queryKey: ['createMeterReading', value],
            queryFn: async () => {
                const meterReading = await meterReadingApi.createMeterReading({
                    value,
                    date: Date.now(),
                    userId: props.userId,
                    meterType: props.meterReadingType,
                })

                MeterReadingStorage.set(meterReading)
            },
        },
    )

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage('');

        if (!value) {
            setErrorMessage(errorMessages.EMPTY);
            return;
        }

        refetch()
    };

    return (
        <MeterReadingUi
            isLoading={isLoading}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            onSubmit={handleSubmit}
            errorMessage={isError ? errorMessages.FAILURE_SUBMIT : errorMessage}
        />
    );
};