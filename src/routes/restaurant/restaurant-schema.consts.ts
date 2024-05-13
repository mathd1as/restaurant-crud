export const createRestaurantBody = {
    type: 'object',
    required: ['name', 'address', 'picture', 'openingTime', 'closingTime'],
    properties: {
      name: {
        type: 'string'
      },
      address: {
        type: 'string'
      },
      picture: {
        type: 'string'
      },
      openingTime: {
        type: 'string'
      },
      closingTime: {
        type: 'string'
      }
    }
}

export const GetRestaurantQueryString = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
  },
}