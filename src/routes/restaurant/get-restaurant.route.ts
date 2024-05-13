import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { GetRestaurantService } from "../../services/get-restaurant.service";
import { GetRestaurantParamInterface } from "../../interfaces/get-restaurante.interface";
import { GetRestaurantQueryString } from "./restaurant-schema.consts";

const schema = {
  querystring: GetRestaurantQueryString
}

export const GetRestaurantRoute = async (app: FastifyInstance) => {
  app.get('/restaurant', { schema }, async (request: FastifyRequest<{ Querystring: GetRestaurantParamInterface }>, response: FastifyReply) => {
    const getRestaurantService = new GetRestaurantService()  
    const result = await getRestaurantService.handle(request.query.id);
    return response.status(200).send(result)
  })
}