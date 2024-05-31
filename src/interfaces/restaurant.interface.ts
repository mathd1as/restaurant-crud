export interface RestaurantRepositoryInterface {
    create(data: any): Promise<any>;
    find(data: any): Promise<any>;
    findAll(data: any): Promise<any>;
    update(data: any): Promise<any>;
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

export interface GetRestaurantParamInterface {
    id?: string
}

export interface DeleteRestaurantParamInterface {
    id: string
}

