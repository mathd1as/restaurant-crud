import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CreateRestaurantService } from "../../services/create-restaurant.service";


export const CreateRestaurant = async (app: FastifyInstance) => {
    app.get('/restaurant', async (request: FastifyRequest, response: FastifyReply) => {
        const createRestaurantService = new CreateRestaurantService()
        const result = await createRestaurantService.handle();
        console.log(result)
        return response.status(200).send([{id: 1, name: `bola`}, {id: 2, name: `boneco`}])
    })
}