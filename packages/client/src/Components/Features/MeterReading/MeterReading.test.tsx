import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';
import { MeterReadingContainer } from './MeterReading.container';
import { meterReadingApi } from '../../../Api/meterReadings';
import { MeterReadingType } from '../../../Model/types';
import { QueryClient, QueryClientProvider } from 'react-query';

jest.mock('../../../Api/meterReadings', () => {
    return {
        meterReadingApi: {
            createMeterReading: jest.fn()
        }
    }
});

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
})

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

let dateNowRef = Date.now
beforeEach(() => {
    Date.now = () => 0;
    (meterReadingApi.createMeterReading as jest.Mock).mockClear();
});

afterEach(() => {
    Date.now = dateNowRef
})

describe('AddMeterReadingForm', () => {
    it('submits meter reading successfully', async () => {
        const userId = 'user123';
        const meterType = MeterReadingType.ELECTRICITY
        const mockSuccess = Promise.resolve();
        (meterReadingApi.createMeterReading as jest.Mock).mockImplementation(() => mockSuccess);

        render(
            <Wrapper>
                <MeterReadingContainer
                    userId={userId}
                    meterReadingType={meterType}
                />
            </Wrapper>
        );

        fireEvent.change(screen.getByPlaceholderText(/enter meter reading/i), { target: { value: '12345' } });
        fireEvent.click(screen.getByText(/submit/i));

        await expect(mockSuccess).resolves;
        expect(meterReadingApi.createMeterReading).
            toHaveBeenCalledWith(
                expect.objectContaining(
                    {
                        "date": 0,
                        "value": 12345,
                        "meterType": meterType,
                        "userId": userId,
                    }
                ));
    });
})