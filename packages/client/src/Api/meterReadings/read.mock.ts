import * as uuid from "uuid"

import { MeterReading, MeterReadingType } from "../../Model/types"

const readByIdMock = async (id: MeterReading["id"]): Promise<MeterReading[]> => {
    return [
        {
            id,
            value: 0,
            userId: uuid.v4(),
            meterType: MeterReadingType.ELECTRICITY,
            date: Date.now()
        }
    ]
}

const readByUserIdMock = async (userId: MeterReading["id"]) => {
    return [
        {
            id: uuid.v4(),
            value: 0,
            userId,
            meterType: MeterReadingType.ELECTRICITY,
            date: Date.now()
        }
    ]
}

export {
    readByIdMock,
    readByUserIdMock,
}