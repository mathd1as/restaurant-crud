import { prisma } from "../database/prisma.client";
import { UpdateRestaurantBodyInterface, UpdateRestaurantInterface } from "../interfaces/update-restaurante.interface";

export class UpdateRestaurantRepo implements UpdateRestaurantInterface {
    async update(payload: {id: string, props: UpdateRestaurantBodyInterface}): Promise<any> {
        return await prisma.restaurant.update({
            where: {
                id: payload.id,
            },
            data: {
                ...payload.props
            }
        })
    }
}