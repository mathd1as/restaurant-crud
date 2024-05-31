import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { DeleteRestaurantParam, RestaurantQueryStringId, createRestaurantBody } from "./restaurant-schema.consts";
import { CreateRestaurant, DeleteRestaurantParamInterface, GetRestaurantParamInterface, UpdateRestaurantBodyInterface } from "../../interfaces/restaurant.interface";
import { RestaurantService } from "../../services/restaurant.service";

const schema = {
    // body: createRestaurantBody
}

//   const schema = {
//     querystring: RestaurantQueryStringId
//   }

// const schema = {
//     body: UpdateRestaurantBody,
//     querystring: RestaurantQueryStringId
//   }

export const RestaurantRoutes = async (app: FastifyInstance) => {
  const restaurantService = new RestaurantService() 
  
  app.post('/restaurant', { schema }, async (request: FastifyRequest<{ Body: CreateRestaurant }>, response: FastifyReply) => {
    const { name, address, picture, openingTime, closingTime } = request.body
    const restaurantProps = { name, address, picture, openingTime, closingTime }

    const result = await restaurantService.create(restaurantProps)

    return response.status(200).send(result)
  })

  app.get('/restaurant', { schema }, async (request: FastifyRequest<{ Querystring: GetRestaurantParamInterface }>, response: FastifyReply) => {
    const result = await restaurantService.get(request.query.id);
    return response.status(200).send(result)
  })

  app.put('/restaurant', { schema }, async (request: FastifyRequest<{ Body: UpdateRestaurantBodyInterface, Querystring: GetRestaurantParamInterface }>, response: FastifyReply) => {
    const result = await restaurantService.update({ id: request.query.id, body: request.body })
    return response.status(200).send(result)
  })

  app.delete('/restaurant/:id', { schema: { params: DeleteRestaurantParam } }, async (request: FastifyRequest<{ Params: DeleteRestaurantParamInterface }>, response: FastifyReply) => {
    const restaurantId = request.params.id;
    await restaurantService.delete(restaurantId)
    return response.status(204).send()
  })
}