import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { GetRestaurantService } from "../../services/get-restaurant.service";
import { GetRestaurantParamInterface } from "../../interfaces/get-restaurante.interface";
import { RestaurantQueryStringId, UpdateRestaurantBody } from "./restaurant-schema.consts";
import { UpdateRestaurantBodyInterface } from "../../interfaces/update-restaurante.interface";
import { UpdateRestaurantService } from "../../services/update-restaurant.service";

const schema = {
  body: UpdateRestaurantBody,
  querystring: RestaurantQueryStringId
}

export const UpdateRestaurantRoute = async (app: FastifyInstance) => {
  app.put('/restaurant', { schema }, async (request: FastifyRequest<{ Body: UpdateRestaurantBodyInterface, Querystring: GetRestaurantParamInterface }>, response: FastifyReply) => {
    const updateRestaurantService = new UpdateRestaurantService()
    const result = await updateRestaurantService.handle({ id: request.query.id, body: request.body })
    return response.status(200).send(result)
  })
}