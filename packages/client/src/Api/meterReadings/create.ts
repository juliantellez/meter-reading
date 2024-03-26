import env from "../../env"

import { MeterReading } from "../../Model/types"
import { createMock } from "./create.mock"

const create = async (meterReading: Omit<MeterReading, "id">): Promise<MeterReading> => {
    const response = await fetch(env.apiURL.meterReading.create, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(meterReading)
    })

    return response.json()
}

const createMeterReading = env.shouldMock ? createMock : create

export {
    createMeterReading,
}
