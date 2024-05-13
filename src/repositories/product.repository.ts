import { prisma } from "../database/prisma.client";
import { ProductRepositoryInterface } from "../interfaces/product.interface";

export class ProductRepository implements ProductRepositoryInterface {
    async create(payload: any): Promise<any> {
        try {
            return await prisma.product.create({
                data: {
                    ...payload
                }
            })
        } catch(error) {
            console.log(error)
        }
        
    }
}