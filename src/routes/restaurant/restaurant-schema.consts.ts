export const createRestaurantBody = {
  type: "object",
  required: ["name", "address", "picture", "openingTime", "closingTime"],
  properties: {
    name: {
      type: "string",
    },
    address: {
      type: "string",
    },
    picture: {
      type: "string",
    },
    openingTime: {
      type: "string",
    },
    closingTime: {
      type: "string",
    },
  },
}

export const RestaurantQueryStringId = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
  },
}

export const UpdateRestaurantBody = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    address: {
      type: "string",
    },
    picture: {
      type: "string",
    },
    openingTime: {
      type: "string",
    },
    closingTime: {
      type: "string",
    },
  },
}

export const DeleteRestaurantParam = {
  type: "object",
  properties: {
    id: { type: "string" },
  },
}
