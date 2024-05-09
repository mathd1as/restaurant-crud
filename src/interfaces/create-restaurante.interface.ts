export interface CreateRestaurantInterface {
    create(data: any): Promise<any>;
}

export interface createRestaurantRequest {
    name: String,
    address: String,
    picture: String,
    openingTime: String,
    closingTime: String
}