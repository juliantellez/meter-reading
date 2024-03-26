import { createMeterReading } from "./create";
import { readMeterReadingById, readMeterReadingByUserId } from "./read";

export const meterReadingApi = {
    createMeterReading: createMeterReading,
    readMeterReadingById: readMeterReadingById,
    readMeterReadingByUser: readMeterReadingByUserId,
}
