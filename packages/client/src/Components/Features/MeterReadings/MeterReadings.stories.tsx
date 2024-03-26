import { StoryObj, Meta } from '@storybook/react';
import MeterReadingsUi from './MeterReadings.ui';
import { MeterReadingType } from '../../../Model/types';

const meta = {
    title: 'Components/PreviousMeterReadingsUI',
    component: MeterReadingsUi,
    args: {
        readings: [],
        isLoading: false,
        errorMessage: ""
    }
} satisfies Meta<typeof MeterReadingsUi>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        readings: [
            {
                id: '1',
                meterType: MeterReadingType.ELECTRICITY,
                value: 12345,
                date: Date.now(),
                userId: 'user1'
            },
            {
                id: '2',
                meterType: MeterReadingType.GAS,
                value: 54321,
                date: new Date("2021-04-13T11:00:00Z").valueOf(),
                userId: 'user1'
            },
        ],
    },
};

export const Empty: Story = {
    args: {
        readings: [],
    },
};

export const Error: Story = {
    args: {
        readings: [],
        errorMessage: "Error!"
    },
};

export const Loading: Story = {
    args: {
        readings: [],
        isLoading: true
    },
};
