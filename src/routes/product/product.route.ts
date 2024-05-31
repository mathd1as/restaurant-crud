import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { createProductBody } from "./product-schema.consts"
import { ProductService } from "../../services/product.service"
import {
  CreateProduct,
  DeleteProductParam,
  GetProductParam,
  UpdatProduct,
  UpdateProductParam,
} from "../../interfaces/product.interface"

const schema = {
  body: createProductBody,
}

export const ProductRoutes = async (app: FastifyInstance) => {
  const productService = new ProductService()

  app.post(
    "/product",
    { schema },
    async (
      request: FastifyRequest<{ Body: CreateProduct }>,
      response: FastifyReply,
    ) => {
      const { name, picture, category, price, promotionActive, restaurantId } =
        request.body
      const productProps = {
        name,
        category,
        picture,
        price,
        promotionActive,
        restaurantId,
      }

      const result = await productService.create(productProps)

      return response.status(200).send(result)
    },
  )

  app.get(
    "/product/:restaurantId",
    async (
      request: FastifyRequest<{ Params: GetProductParam }>,
      response: FastifyReply,
    ) => {
      const restaurantId = request.params.restaurantId
      const result = await productService.get(restaurantId)
      return response.status(200).send(result)
    },
  )

  app.put(
    "/product/:id",
    async (
      request: FastifyRequest<{
        Params: UpdateProductParam
        Body: UpdatProduct
      }>,
      response: FastifyReply,
    ) => {
      const { id } = request.params
      const body = request.body
      const result = await productService.update({ id, props: body })
      return response.status(200).send(result)
    },
  )

  app.delete(
    "/product/:id",
    async (
      request: FastifyRequest<{ Params: DeleteProductParam }>,
      response: FastifyReply,
    ) => {
      const { id } = request.params
      await productService.delete(id)
      return response.status(204).send()
    },
  )
}
