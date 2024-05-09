import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CreateRestaurantService } from "../../services/create-restaurant.service";


export const CreateRestaurantRoute = async (app: FastifyInstance) => {
    app.get('/restaurant', async (request: FastifyRequest, response: FastifyReply) => {
        const createRestaurantService = new CreateRestaurantService()
        const data = {

        }
        const result = await createRestaurantService.handle(data);
        return response.status(200).send([{id: 1, name: `bola`}, {id: 2, name: `boneco`}])
    })
}