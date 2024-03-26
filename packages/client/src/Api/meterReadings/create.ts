import env from "../../env"
import { MeterReading } from "../../Model/types"

const createMeterReading = async (meterReading: Omit<MeterReading, "id">): Promise<MeterReading> => {
    const response = await fetch(env.apiURL.meterReading.create, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(meterReading)
    })

    return response.json()
}

export {
    createMeterReading
}