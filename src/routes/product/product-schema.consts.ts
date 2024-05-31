export const createProductBody = {
  type: "object",
  required: ["name", "category", "picture", "price", "promotionActive"],
  properties: {
    name: {
      type: "string",
    },
    category: {
      type: "string",
    },
    picture: {
      type: "string",
    },
    price: {
      type: "number",
    },
    promotionActive: {
      type: "boolean",
    },
    restaurantId: {
      type: "string",
    },
    promotionPrice: {
      type: "number",
    },
    promotionDescription: {
      type: "string",
    },
    promotionDaysAndTimes: {
      type: "string",
    },
  },
}
