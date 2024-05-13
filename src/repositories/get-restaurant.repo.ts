import { prisma } from "../database/prisma.client";
import { GetRestaurantInterface } from "../interfaces/get-restaurante.interface";

export class GetRestaurantRepo implements GetRestaurantInterface {
    async find(id: any): Promise<any> {
        return await prisma.restaurant.findUnique({
            where: {
                id: id,
            },
            select: { id: true, address: true, name: true, closingTime: true, createdAt: true, openingTime: true, picture: true, updateAt: true },
        })
    }

    async findAll(): Promise<any> {
        return await prisma.restaurant.findMany({})
    }
}