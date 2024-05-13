import {app} from '../server.ts'
import { CreateProductRoute } from './product/create-product.route.ts'
import { CreateRestaurantRoute } from './restaurant/create-restaurant.route.ts'
import { GetRestaurantRoute } from './restaurant/get-restaurant.route.ts'


export const routes = async () => {
    app.register(CreateRestaurantRoute)
    app.register(CreateProductRoute)
    app.register(GetRestaurantRoute)
}