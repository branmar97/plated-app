import { v } from "convex/values";
import { mutation } from "./_generated/server";


export const addItem = mutation({
    args: {
        itemName: v.string(),
        itemNumber: v.string(),
        priceInCents: v.number(),
        unit: v.string()
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("items", {
            itemName: args.itemName,
            itemNumber: args.itemNumber,
            priceInCents: args.priceInCents,
            unit: args.unit
        });
    }
});
