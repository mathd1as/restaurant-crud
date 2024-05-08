import {app} from '../server.ts'
import { CreateRestaurant } from './restaurant/create-restaurant.route.ts'


export const routes = async () => {
    app.register(CreateRestaurant)
}