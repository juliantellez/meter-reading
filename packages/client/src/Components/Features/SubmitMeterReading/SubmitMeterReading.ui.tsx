import React from 'react';

export interface SubmitMeterReadingUiProps {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    errorMessage?: string;
    isLoading: boolean
}

const SubmitMeterReadingUi: React.FC<SubmitMeterReadingUiProps> = ({
    value,
    onChange,
    onSubmit,
    errorMessage,
    isLoading,
}) => (
    <form onSubmit={onSubmit}>
        <input
            type="number"
            value={value}
            onChange={onChange}
            placeholder="Enter meter reading" />
        {errorMessage &&
            <div className="text-red-500">{errorMessage}</div>
        }
        {isLoading &&
            <div className="text-red-500">Loading...</div>
        }
        {!isLoading &&
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
            </button>
        }
    </form>
);


export default SubmitMeterReadingUi
