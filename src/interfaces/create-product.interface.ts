export interface CreateProductInterface {
    create(data: any): Promise<any>;
}

export interface CreateProduct {
    name: string;
    price: number;
    picture: string;
    restaurantId: string;
    category: string;
    promotionActive: boolean;
    promotionPrice?: number;
    promotionDescription?:  string;
    promotionDaysAndTimes?: string;
}