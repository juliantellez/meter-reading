import { createMeterReading } from "./create";
import { readMeterReadingById, readMeterReadingByUser } from "./read";

export const meterReadingApi = {
    createMeterReading: createMeterReading,
    readMeterReadingById: readMeterReadingById,
    readMeterReadingByUser: readMeterReadingByUser,
}
