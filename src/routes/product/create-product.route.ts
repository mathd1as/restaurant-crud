import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CreateProduct } from "../../interfaces/create-product.interface";
import { CreateProductService } from "../../services/create-product.service";
import { createProductBody } from "./product-schema.consts";

const schema = {
  body: createProductBody
}

export const CreateProductRoute = async (app: FastifyInstance) => {
  app.post('/product', { schema }, async (request: FastifyRequest<{ Body: CreateProduct }>, response: FastifyReply) => {
    const { name, picture, category, price, promotionActive, restaurantId } = request.body
    const productProps = { name, category, picture, price, promotionActive, restaurantId }

    const createProductService = new CreateProductService()
    
    const result = await createProductService.handle(productProps);

    return response.status(200).send(result)
  })
}