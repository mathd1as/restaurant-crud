import { UpdateRestaurantBodyInterface } from "../interfaces/restaurant.interface";
import { RestaurantRepository } from "../repositories/restaurant.repository";

export class RestaurantService {
    private restaurantRepository: RestaurantRepository
    constructor() {
        this.restaurantRepository = new RestaurantRepository()
    }
    public create(payload: any) {
        const result = this.restaurantRepository.create(payload)
        return result
    }

    public get(id: string | undefined) {
        if (id) {
            return this.restaurantRepository.find(id)
        } else if (id === undefined) {
            return this.restaurantRepository.findAll()
        }

        throw new Error('case not mapped')
    }

    public async update(payload: {id: string | undefined, body: UpdateRestaurantBodyInterface}): Promise<any> {
        if (payload.id === undefined) throw new Error('O ID do restaurant deve ser informado')
        const restaurant = await this.restaurantRepository.find(payload.id)
        
        if (restaurant === null) throw new Error('Restaurante nao encontrado')
        this.validateInputs(payload.body)
        const {name, address, closingTime, openingTime, picture} = payload.body

        const updateProps = {
            name,
            address,
            picture,
            openingTime,
            closingTime
        }
        return this.restaurantRepository.update({id: payload.id, props: updateProps})
    }

    private validateInputs(inputs: UpdateRestaurantBodyInterface) {
        if (Object.keys(inputs).length === 0) throw new Error('Deve ser passado no minimo uma propriedade')
    }
}