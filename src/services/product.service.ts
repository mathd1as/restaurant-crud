import { ProductRepository } from "../repositories/product.repository"

export class ProductService {
    private productRepository: ProductRepository 
    constructor() {
        this.productRepository = new ProductRepository()
    }

    public create(payload: any) {
        return this.productRepository.create(payload)
    }
}