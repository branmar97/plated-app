import { v } from "convex/values";
import { mutation } from "./_generated/server";


export const addIngredient = mutation({
    args: {
        name: v.string()
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("ingredient", {
            name: args.name
        });
    }
});
