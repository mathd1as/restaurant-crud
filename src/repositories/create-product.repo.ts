import { prisma } from "../database/prisma.client";
import { CreateProductInterface } from "../interfaces/create-product.interface";

export class CreateProductRepo implements CreateProductInterface {
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