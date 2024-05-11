export interface CreateRestaurantInterface {
    create(data: any): Promise<any>;
}

export interface CreateRestaurant {
    name: string;
    address: string;
    picture: string;
    openingTime: string;
    closingTime: string;
}