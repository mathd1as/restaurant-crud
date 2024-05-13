import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CreateRestaurantService } from "../../services/create-restaurant.service";
import { CreateRestaurant } from "../../interfaces/create-restaurante.interface";
import { RestaurantQueryStringId, createRestaurantBody } from "./restaurant-schema.consts";
import { GetRestaurantService } from "../../services/get-restaurant.service";
import { GetRestaurantParamInterface } from "../../interfaces/get-restaurante.interface";
import { UpdateRestaurantService } from "../../services/update-restaurant.service";
import { UpdateRestaurantBodyInterface } from "../../interfaces/update-restaurante.interface";

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
   
  app.post('/restaurant', { schema }, async (request: FastifyRequest<{ Body: CreateRestaurant }>, response: FastifyReply) => {
    const { name, address, picture, openingTime, closingTime } = request.body
    const restaurantProps = { name, address, picture, openingTime, closingTime }

    const createRestaurantService = new CreateRestaurantService()
    
    const result = await createRestaurantService.handle(restaurantProps);

    return response.status(200).send(result)
  })

  app.get('/restaurant', { schema }, async (request: FastifyRequest<{ Querystring: GetRestaurantParamInterface }>, response: FastifyReply) => {
    const getRestaurantService = new GetRestaurantService()  
    const result = await getRestaurantService.handle(request.query.id);
    return response.status(200).send(result)
  })

  app.put('/restaurant', { schema }, async (request: FastifyRequest<{ Body: UpdateRestaurantBodyInterface, Querystring: GetRestaurantParamInterface }>, response: FastifyReply) => {
    const updateRestaurantService = new UpdateRestaurantService()
    const result = await updateRestaurantService.handle({ id: request.query.id, body: request.body })
    return response.status(200).send(result)
  })
}