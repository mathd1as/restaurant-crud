import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { createProductBody } from "./product-schema.consts";
import { ProductService } from "../../services/product.service";
import { CreateProduct } from "../../interfaces/product.interface";

const schema = {
  body: createProductBody
}

export const ProductRoutes = async (app: FastifyInstance) => {
  const productService = new ProductService()
  app.post('/product', { schema }, async (request: FastifyRequest<{ Body: CreateProduct }>, response: FastifyReply) => {
    const { name, picture, category, price, promotionActive, restaurantId } = request.body
    const productProps = { name, category, picture, price, promotionActive, restaurantId }

    const result = await productService.create(productProps);

    return response.status(200).send(result)
  })
}