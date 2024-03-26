import React, { useState } from 'react';

import { meterReadingApi } from '../../../Api/meterReadings';
import { MeterReading, MeterReadingType } from '../../../Model/types';

import SubmitMeterReadingUi from './SubmitMeterReading.ui';
import { useQuery } from 'react-query';
import { MeterReadingStorage } from '../../../Data/Storage';

const errorMessages = {
    EMPTY: 'Please enter a value.',
    FAILURE_SUBMIT: 'Failed to submit reading.',
    FAILURE_INPUT_LENGTH: 'Reading must be a 5 digit number.',
    FAILURE_INPUT_NEW: 'New reading must be higher than the last reading.',
}

interface SubmitMeterReadingContainerProps {
    userId: MeterReading["userId"],
    meterReadingType: MeterReadingType
    onSuccess?: (meterReading: MeterReading) => void
}

const validateReading = (setError: (message: string) => void, inputValue: string, lastValue?: string): boolean => {
    // Must be a 5 digit number between 00000 and 99999
    if (!/^\d{5}$/.test(String(inputValue))) {
        setError(errorMessages.FAILURE_INPUT_LENGTH);
        return false;
    }

    // New reading must be higher than the last customer reading
    const prev = parseInt(lastValue || '0', 10)
    const next = parseInt(inputValue, 10)

    if (lastValue !== undefined && prev >= next) {
        setError(errorMessages.FAILURE_INPUT_NEW);
        return false;
    }
    return true;
};

export const SubmitMeterReadingContainer: React.FC<SubmitMeterReadingContainerProps> = (props) => {
    const [lastMeterReading, setLastMeterReading] = React.useState<MeterReading | undefined>()
    const [value, setValue] = useState("");
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

                setLastMeterReading(meterReading)
                if (props.onSuccess) {
                    props.onSuccess(meterReading)
                }
            },
        },
    )

    React.useEffect(() => {
        const getLastOrderedValue = (readings: MeterReading[]) => {
            return readings.sort((a, b) => a.date - b.date)[readings.length - 1]
        }

        const meterReadings = MeterReadingStorage.getByUserId(props.userId)
        if (!meterReadings || meterReadings.length < 1) {
            meterReadingApi.readMeterReadingByUser(props.userId).then(response => {
                setLastMeterReading(getLastOrderedValue(response))
            })
        } else {
            setLastMeterReading(getLastOrderedValue(meterReadings))
        }
    }, [value])

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!value) {
            setErrorMessage(errorMessages.EMPTY);
            return;
        }

        if (!validateReading(setErrorMessage, value, lastMeterReading?.value)) {
            return;
        }

        setErrorMessage('');
        refetch()
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <SubmitMeterReadingUi
            isLoading={isLoading}
            value={value}
            onChange={onChange}
            onSubmit={onSubmit}
            errorMessage={isError ? errorMessages.FAILURE_SUBMIT : errorMessage}
        />
    );
};