import { MeterReading } from "../Model/types";

class DataStorage<V extends { id: string; userId: string }> {
    private key: string
    private storage: Storage

    constructor(key: string, storage: Storage = localStorage) {
        this.key = key
        this.storage = storage
    }

    getById(id: string): V[] {
        const data = JSON.parse(this.storage.getItem(this.key) || '[]') as V[];
        return data.filter((value) => value.id === id);
    }

    getByUserId(userId: string): V[] {
        const data = JSON.parse(this.storage.getItem(this.key) || '[]') as V[];
        return data.filter((value) => value.userId === userId);
    }

    set(value: V) {
        const data = JSON.parse(this.storage.getItem(this.key) || '[]');
        data.push(value)
        this.storage.setItem(this.key, JSON.stringify(data));
    }
}

const MeterReadingStorage = new DataStorage<MeterReading>("meterReading")

export {
    DataStorage,
    MeterReadingStorage
}
