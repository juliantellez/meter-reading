import * as uuid from "uuid"

import { MeterReading } from "../../Model/types"

const createMock = async (meterReading: Omit<MeterReading, "id">): Promise<MeterReading> => {
    return {
        id: uuid.v4(),
        userId: meterReading.userId,
        value: meterReading.value,
        date: meterReading.date,
        meterType: meterReading.meterType,
    }
}

export {
    createMock
}