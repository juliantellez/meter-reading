import env from "../../env"
import { MeterReading } from "../../Model/types"

import { readByIdMock, readByUserIdMock } from "./read.mock"

const readById = async (id: MeterReading["id"]): Promise<MeterReading[]> => {
    const url = env.apiURL.meterReading.readById
    const response = await fetch(`${url}?id=${id}`)

    return response.json()
}

const readByUserId = async (userId: MeterReading["id"]): Promise<MeterReading[]> => {
    const url = env.apiURL.meterReading.readByUserId
    const response = await fetch(`${url}?userId=${userId}`)

    return response.json()
}

const readMeterReadingById = env.shouldMock ? readByIdMock : readById
const readMeterReadingByUserId = env.shouldMock ? readByUserIdMock : readByUserId

export {
    readMeterReadingById,
    readMeterReadingByUserId,
}