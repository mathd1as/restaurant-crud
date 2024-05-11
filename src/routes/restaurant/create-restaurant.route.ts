import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CreateRestaurantService } from "../../services/create-restaurant.service";
import { CreateRestaurant } from "../../interfaces/create-restaurante.interface";
import { createRestaurantBody } from "./restaurant-schema.consts";

const schema = {
  body: createRestaurantBody
}

export const CreateRestaurantRoute = async (app: FastifyInstance) => {
  app.post('/restaurant', { schema }, async (request: FastifyRequest<{ Body: CreateRestaurant }>, response: FastifyReply) => {
    const { name, address, picture, openingTime, closingTime } = request.body
    const restaurantProps = { name, address, picture, openingTime, closingTime }

    const createRestaurantService = new CreateRestaurantService()
    
    const result = createRestaurantService.handle(restaurantProps);

    return response.status(200).send(result)
  })
}