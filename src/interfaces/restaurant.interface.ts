export interface RestaurantRepositoryInterface {
    create(data: any): Promise<any>;
}

export interface CreateRestaurant {
    name: string;
    address: string;
    picture: string;
    openingTime: string;
    closingTime: string;
}

export interface UpdateRestaurantBodyInterface {
    name?: string
    address?: string
    picture?: string
    openingTime?: string
    closingTime?: string
}
