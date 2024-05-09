import { CreateRestaurantRepo } from "../repositories/create-restaurant.repo"

export class CreateRestaurantService {
    private createRestaurantRepository: CreateRestaurantRepo 
    constructor() {
        this.createRestaurantRepository = new CreateRestaurantRepo()
    }

    public handle() {
        console.log('dentro da handle')
        const data = {
            name: 'teste',
            email: 'teste'
        }
        const result = this.createRestaurantRepository.create(data)
    }
}