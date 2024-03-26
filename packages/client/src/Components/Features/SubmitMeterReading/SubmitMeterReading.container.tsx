import React, { useState } from 'react';

import { meterReadingApi } from '../../../Api/meterReadings';
import { MeterReading, MeterReadingType } from '../../../Model/types';

import SubmitMeterReadingUi from './SubmitMeterReading.ui';
import { useQuery } from 'react-query';
import { MeterReadingStorage } from '../../../Data/Storage';
import env from '../../../env';

const errorMessages = {
    EMPTY: 'Please enter a value.',
    FAILURE_SUBMIT: 'Failed to submit reading.',
}

interface SubmitMeterReadingContainerProps {
    userId: MeterReading["userId"],
    meterReadingType: MeterReadingType
    onSuccess?: (meterReading: MeterReading) => void
}

export const SubmitMeterReadingContainer: React.FC<SubmitMeterReadingContainerProps> = (props) => {
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
                }, env.shouldMock)

                MeterReadingStorage.set(meterReading)

                if (props.onSuccess) {
                    props.onSuccess(meterReading)
                }
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
        <SubmitMeterReadingUi
            isLoading={isLoading}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            onSubmit={handleSubmit}
            errorMessage={isError ? errorMessages.FAILURE_SUBMIT : errorMessage}
        />
    );
};