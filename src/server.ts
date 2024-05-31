import fastify from "fastify"
import { routes } from "./routes/routes"

const PORT: number = 3001

export const app = fastify()
app.register(routes)

app
  .listen({
    host: "0.0.0.0",
    port: PORT,
  })
  .then(() => {
    console.log(`Server is running in port: ${PORT}`)
  })
