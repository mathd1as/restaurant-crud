export interface GetRestaurantInterface {
    find(data: any): Promise<any>;
    findAll(data: any): Promise<any>;
}

export interface GetRestaurantParamInterface {
    id?: string
}
