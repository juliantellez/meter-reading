enum MeterReadingType {
    ELECTRICITY = "ELECTRICITY",
    GAS = "ELECTRICITY"
}

interface MeterReading {
    /**
     * Unique identifier for the reading.
     */
    id: string;

    /**
     * Type of meter
     */
    meterType: MeterReadingType;

    /**
     * Reading Value
     */
    value: number

    /**
     * Date in unix time
     */
    date: number

    /**
     * Unique identifier from the instigator
     */
    userId: string
}

export {
    MeterReadingType,
    MeterReading,
}