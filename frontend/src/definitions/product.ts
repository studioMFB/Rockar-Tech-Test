export interface IProduct {
    vin: string,
    colour: string,
    make: string,
    model: string,
    price: number,
    [key: string]: string | number | undefined; // Index signature
}

export interface IProductFilters {
    make: string,
    model: string,
    colour: string
}