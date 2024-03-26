import React from 'react';

import { MeterReading } from '../../../Model/types';

interface MeterReadingsUiProps {
    readings: MeterReading[];
    errorMessage: string
    isLoading: boolean
}

const MeterReadingsUi: React.FC<MeterReadingsUiProps> = ({
    readings,
    isLoading,
    errorMessage
}) => (
    <div>
        <h2>Previous Meter Readings</h2>
        {errorMessage &&
            <div className="text-red-500">
                {errorMessage}
            </div>
        }
        {isLoading &&
            <div className="text-red-500">
                Loading...
            </div>
        }

        {readings.length > 0 ? (
            <ul>
                {readings.map((reading) => (
                    <li key={reading.id}>
                        {`${reading.meterType}: ${reading.value} on ${reading.date}`}
                    </li>
                ))}
            </ul>
        ) : !isLoading && (
            <p>No previous readings found.</p>
        )}
    </div>
);

export default MeterReadingsUi