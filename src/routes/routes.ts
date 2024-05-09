import {app} from '../server.ts'
import { CreateRestaurantRoute } from './restaurant/create-restaurant.route.ts'


export const routes = async () => {
    app.register(CreateRestaurantRoute)
}