import React from 'react';

interface PredictedUsageProps {
    predictedUsage: number | null;
    errorMessage?: string;
    isLoading: boolean
}

const PredictedUsageUi: React.FC<PredictedUsageProps> = ({
    predictedUsage,
    errorMessage,
    isLoading,
}) => (
    <div className="text-center p-4 border border-gray-200 rounded-lg">
        <h2 className="text-lg font-semibold">Predicted Usage Next Month</h2>
        {errorMessage &&
            <div className="my-3 bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500">
                {errorMessage}
            </div>
        }
        {isLoading &&
            <div className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">
                Loading...
            </div>
        }
        {predictedUsage !== null ? (
            <p className="text-xl">{predictedUsage.toFixed(2)} kWh</p>
        ) : (
            <p className="text-gray-500">Insufficient data for prediction</p>
        )}
    </div>
);

export default PredictedUsageUi