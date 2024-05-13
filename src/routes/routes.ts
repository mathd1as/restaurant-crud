import {app} from '../server.ts'
import { CreateProductRoute } from './product/create-product.route.ts'
import { RestaurantRoutes } from './restaurant/restaurant.routes.ts'


export const routes = async () => {
    app.register(RestaurantRoutes)
    app.register(CreateProductRoute)
}