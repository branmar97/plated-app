import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    items: defineTable({
        itemName: v.string(),
        itemNumber: v.string(),
        priceInCents: v.number(),
        unit: v.string()
    }),
    ingredients: defineTable({
        ingredientName: v.string(),
        itemIds: v.array(v.id("items")),
        quantity: v.number()
    }),
    meals: defineTable({
        name: v.string(),
        ingredients: v.optional(v.array(
            v.object({
                ingredientId: v.id("ingredients"),
                itemId: v.optional(v.id("items")),
                quantity: v.number(),
            })
        ))
    })
});
