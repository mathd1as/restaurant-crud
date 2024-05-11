import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CreateRestaurantService } from "../../services/create-restaurant.service";
import { createRestaurant } from "../../interfaces/create-restaurante.interface";


const schema = {
  body: {
    type: 'array',
    items: {}
  }
}
export const CreateRestaurantRoute = async (app: FastifyInstance) => {
 app.post('/restaurant', async (request: FastifyRequest<{ Body: createRestaurant }>, response: FastifyReply) => {
      const { name, address, picture, openingTime, closingTime } = request.body
      const restaurantProps = { name, address, picture, openingTime, closingTime }
      const createRestaurantService = new CreateRestaurantService()
      const result = createRestaurantService.handle(restaurantProps);
      return response.status(200).send(result)
  })
}