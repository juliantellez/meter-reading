import { StoryObj, Meta } from '@storybook/react';
import MeterReadingUi, { MeterReadingUiProps } from './MeterReading.ui';

const meta = {
    title: 'Components/AddMeterReadingFormUI',
    component: MeterReadingUi,
    args: {
        onChange(e) {

        },
        onSubmit(e) {

        },
        errorMessage: "Error!",
        value: 0,
        isLoading: false
    } as MeterReadingUiProps,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof MeterReadingUi>;
export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        onChange(e) {

        },
        onSubmit(e) {

        },
        errorMessage: "",
        value: 0,
        isLoading: false
    },
};


export const WithError: Story = {
    args: {
        onChange(e) {

        },
        onSubmit(e) {

        },
        errorMessage: "Error!",
        value: 0
    },
};

export const WithLoading: Story = {
    args: {
        onChange(e) {

        },
        onSubmit(e) {

        },
        errorMessage: "",
        value: 0,
        isLoading: true
    },
};

