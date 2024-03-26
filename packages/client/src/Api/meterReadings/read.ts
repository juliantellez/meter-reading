import env from "../../env"
import { MeterReading } from "../../Model/types"

const readMeterReadingById = async (id: MeterReading["id"]) => {
    const url = env.apiURL.meterReading.readById
    const response = await fetch(`${url}?id=${id}`)

    return response.json()
}

const readMeterReadingByUser = async (userId: MeterReading["id"]) => {
    const url = env.apiURL.meterReading.readByUserId
    const response = await fetch(`${url}?userId=${userId}`)

    return response.json()
}

export {
    readMeterReadingById,
    readMeterReadingByUser,
}