import { app } from "../server"
import { ProductRoutes } from "./product/product.route"
import { RestaurantRoutes } from "./restaurant/restaurant.routes"

export const routes = async () => {
  app.register(RestaurantRoutes)
  app.register(ProductRoutes)
}
