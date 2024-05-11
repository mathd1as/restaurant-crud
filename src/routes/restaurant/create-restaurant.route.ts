import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CreateRestaurantService } from "../../services/create-restaurant.service";
import { createRestaurantRequest } from "../../interfaces/create-restaurante.interface";


const schema = {
  body: {
    type: 'array',
    items: {}
  }
}
export const CreateRestaurantRoute = async (app: FastifyInstance) => {
  app.get('/restaurant', async (request: FastifyRequest, response: FastifyReply) => {
    const createRestaurantService = new CreateRestaurantService()
    const data = {

    }
    const result = await createRestaurantService.handle(data);
    return response.status(200).send([{id: 1, name: `bola`}, {id: 2, name: `boneco`}])
  })

    app.post('/restaurant', async (request: FastifyRequest<{ Body: createRestaurantRequest }>, response: FastifyReply) => {
        const { name, address, picture, openingTime, closingTime } = request.body
        const restaurantProps = { name, address, picture, openingTime, closingTime }
        const createRestaurantService = new CreateRestaurantService()
        const result = createRestaurantService.handle(restaurantProps);
        return response.status(200).send(result)
    })
}