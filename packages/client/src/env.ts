interface Env {
    apiURL: {
        meterReading: {
            create: string,
            readById: string,
            readByUserId: string,
        }
    }
}

const env: Env = {
    apiURL: {
        meterReading: {
            create: `${process.env.API__METER_READING}` || "",
            readById: `${process.env.API__METER_READING}` || "",
            readByUserId: `${process.env.API__METER_READING}` || "",
        }
    }
}

export default env
