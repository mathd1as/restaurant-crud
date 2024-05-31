import { ProductRepository } from "../repositories/product.repository"

export class ProductService {
  private productRepository: ProductRepository 
  constructor() {
      this.productRepository = new ProductRepository()
  }

  public create(payload: any) {
    return this.productRepository.create(payload)
  }

  public get(payload: any) {
    return this.productRepository.get(payload)
  }

  public update(payload: any) {
    return this.productRepository.update(payload)
  }

  public delete(id: any) {
    return this.productRepository.delete(id)
  }
}