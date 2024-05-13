import { UpdateRestaurantBodyInterface } from "../interfaces/update-restaurante.interface"
import { GetRestaurantRepo } from "../repositories/get-restaurant.repo"
import { UpdateRestaurantRepo } from "../repositories/update-restaurant.repo"

export class UpdateRestaurantService {
    private updateRestaurantRepository: UpdateRestaurantRepo 
    private getRestaurantRepository: GetRestaurantRepo 
    constructor() {
        this.updateRestaurantRepository = new UpdateRestaurantRepo()
        this.getRestaurantRepository = new GetRestaurantRepo()
    }

    public async handle(payload: {id: string | undefined, body: UpdateRestaurantBodyInterface}): Promise<any> {
        if (payload.id === undefined) throw new Error('O ID do restaurant deve ser informado')
        const restaurant = await this.getRestaurantRepository.find(payload.id)
        
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
        return this.updateRestaurantRepository.update({id: payload.id, props: updateProps})
    }

    private validateInputs(inputs: UpdateRestaurantBodyInterface) {
        if (Object.keys(inputs).length === 0) throw new Error('Deve ser passado no minimo uma propriedade')
    }
}