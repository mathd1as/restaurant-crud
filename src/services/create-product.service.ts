import { CreateProductRepo } from "../repositories/create-product.repo"

export class CreateProductService {
    private createProductRepository: CreateProductRepo 
    constructor() {
        this.createProductRepository = new CreateProductRepo()
    }

    public handle(payload: any) {
        return this.createProductRepository.create(payload)
    }
}