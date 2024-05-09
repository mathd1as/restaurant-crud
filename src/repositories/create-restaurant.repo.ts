import { prisma } from "../database/prisma.client";
import { CreateRestaurantInterface } from "../interfaces/create-restaurante.interface";

export class CreateRestaurantRepo implements CreateRestaurantInterface {
    async create(payload: any): Promise<any> {
        // alterar para restaurante depois
        const result = await prisma.restaurant.create(payload)
        return result
    }
}