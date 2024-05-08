import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";


export const CreateRestaurant = async (app: FastifyInstance) => {
    app.get('/restaurant', (request: FastifyRequest, response: FastifyReply) => {

        return response.status(200).send([{id: 1, name: `bola`}, {id: 2, name: `boneco`}])
    })
}