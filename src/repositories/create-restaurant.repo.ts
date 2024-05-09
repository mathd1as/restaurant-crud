import { prisma } from "../database/prisma.client";
import { CreateRestaurantInterface } from "../interfaces/create-restaurante.interface";

export class CreateRestaurantRepo implements CreateRestaurantInterface {
    async create(data: any): Promise<any> {
        // alterar para restaurante depois
        const result = await prisma.user.create({
            data: {
                name: `teste`,
                email: `teste`
            }
        })
        return result
    }
}