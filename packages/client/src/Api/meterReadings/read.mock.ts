import { MeterReading, MeterReadingType } from "../../Model/types"

const readByIdMock = async (id: MeterReading["id"]): Promise<MeterReading[]> => {
    return []
}

const readByUserIdMock = async (userId: MeterReading["id"]) => {
    return []
}

export {
    readByIdMock,
    readByUserIdMock,
}
