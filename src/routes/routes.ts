import {app} from '../server.ts'
import { ProductRoutes } from './product/product.route.ts'
import { RestaurantRoutes } from './restaurant/restaurant.routes.ts'


export const routes = async () => {
    app.register(RestaurantRoutes)
    app.register(ProductRoutes)
}