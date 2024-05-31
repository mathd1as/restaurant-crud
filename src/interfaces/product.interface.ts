export interface ProductRepositoryInterface {
  create(data: any): Promise<any>
}

export interface CreateProduct {
  name: string
  price: number
  picture: string
  restaurantId: string
  category: string
  promotionActive: boolean
  promotionPrice?: number
  promotionDescription?: string
  promotionDaysAndTimes?: string
}

export interface GetProductParam {
  restaurantId: string
}

export interface UpdateProductParam {
  id: string
}

export interface DeleteProductParam {
  id: string
}

export interface UpdatProduct {
  name?: string
  price?: number
  picture?: string
  category?: string
  promotionActive?: boolean
  promotionPrice?: number
  promotionDescription?: string
  promotionDaysAndTimes?: string
}
