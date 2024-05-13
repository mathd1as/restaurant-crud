import { GetRestaurantRepo } from "../repositories/get-restaurant.repo"

export class GetRestaurantService {
    private getRestaurantRepository: GetRestaurantRepo 
    constructor() {
        this.getRestaurantRepository = new GetRestaurantRepo()
    }

    public handle(id: string | undefined): Promise<any> {
        if (id) {
            return this.getRestaurantRepository.find(id)
        } else if (id === undefined) {
            return this.getRestaurantRepository.findAll()
        }

        throw new Error('case not mapped')
    }
}