import { prisma } from "../database/prisma.client"
import { ProductRepositoryInterface } from "../interfaces/product.interface"

export class ProductRepository implements ProductRepositoryInterface {
  async create(payload: any): Promise<any> {
    try {
      return await prisma.product.create({
        data: {
          ...payload,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  async get(id: any): Promise<any> {
    return await prisma.product.findMany({
      where: {
        restaurantId: id,
      },
    })
  }

  async update(payload: any): Promise<any> {
    try {
      return await prisma.product.update({
        where: {
          id: payload.id,
        },
        data: {
          ...payload.props,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  async delete(id: any): Promise<any> {
    try {
      return await prisma.product.delete({
        where: {
          id,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }
}
