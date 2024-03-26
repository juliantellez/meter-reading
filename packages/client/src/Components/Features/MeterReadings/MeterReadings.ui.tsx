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
        <h2 className='text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white'
        >Previous Meter Readings</h2>
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
            <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead className='border-b border-neutral-200 font-medium dark:border-white/10'>
                    <tr>
                        <th scope="col" className="px-6 py-4">Date</th>
                        <th scope="col" className="px-6 py-4">Value</th>
                        <th scope="col" className="px-6 py-4">Meter Type</th>
                        <th scope="col" className="px-6 py-4">Id</th>
                    </tr>
                </thead>
                <tbody>
                    {readings.map((reading) => (
                        <tr key={reading.id} className="border-b border-neutral-200 dark:border-white/10">
                            <td className="whitespace-nowrap px-6 py-4">{new Date(reading.date).toLocaleString()}</td>
                            <td className="whitespace-nowrap px-6 py-4">{reading.value}</td>
                            <td className="whitespace-nowrap px-6 py-4">{reading.meterType}</td>
                            <td className="whitespace-nowrap px-6 py-4">{reading.id}</td>
                        </tr>
                    ))}
                </tbody >
            </table >
        ) : !isLoading && (
            <p className="text-center mb-4">No previous readings found.</p>
        )}
    </div >
);


export default MeterReadingsUi