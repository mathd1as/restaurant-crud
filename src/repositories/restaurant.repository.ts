import { prisma } from "../database/prisma.client"
import { RestaurantRepositoryInterface } from "../interfaces/restaurant.interface"

export class RestaurantRepository implements RestaurantRepositoryInterface {
  async create(payload: any): Promise<any> {
    const result = await prisma.restaurant.create({
      data: {
        ...payload,
      },
    })
    return result
  }

  async find(id: string): Promise<any> {
    return await prisma.restaurant.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        address: true,
        name: true,
        closingTime: true,
        createdAt: true,
        openingTime: true,
        picture: true,
        updateAt: true,
      },
    })
  }

  async findAll(): Promise<any> {
    return await prisma.restaurant.findMany({})
  }

  async update(payload: { id: string; props: any }): Promise<any> {
    return await prisma.restaurant.update({
      where: {
        id: payload.id,
      },
      data: {
        ...payload.props,
      },
    })
  }

  async delete(id: string): Promise<any> {
    return await prisma.restaurant.delete({
      where: {
        id,
      },
    })
  }
}
