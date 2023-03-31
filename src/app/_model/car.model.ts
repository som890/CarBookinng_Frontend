import { FileHandle } from "./file-handle.model"

export interface Car {
    id?: any,
    make?: string,
    model?: string,
    year?: string,
    transmission?: string,
    fuelType?: string,
    dailyRentalPrice?: number,
    description?: string
    carImages: FileHandle[]

}