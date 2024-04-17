export interface IProduct {
    vin: string,
    colour: string,
    make: string,
    model: string,
    price: number
}

export interface IProductFilters {
    make: string,
    model: string,
    colour: string
}