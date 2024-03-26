import React from 'react';

export interface SubmitMeterReadingUiProps {
    value: string;
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
    <form onSubmit={onSubmit} className="flex justify-center items-center flex-col max-w-2xl py-8 m-auto">
        <h1
            className='text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white'>
            Meter Readings
        </h1>
        <p
            className='text-gray-900 md:text-1xl'
        >
            Enter a new meter reading:
        </p>

        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="00000"
            className={`input text-center my-2 ${errorMessage ? 'border-red-500' : 'border-gray-300'}`}
            maxLength={5}
        />
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
        {!isLoading &&
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
            </button>
        }
    </form>
);


export default SubmitMeterReadingUi
