export interface UpdateRestaurantInterface {
    update(data: any): Promise<any>;
}

export interface UpdateRestaurantBodyInterface {
    name?: string
    address?: string
    picture?: string
    openingTime?: string
    closingTime?: string
}
