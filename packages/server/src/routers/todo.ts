import { TRPCError } from "@trpc/server";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "../db";
import { todo } from "../db/schema";
import { publicProcedure, router } from "../lib/trpc";

export const todoRouter = router({
	getAll: publicProcedure.query(async () => {
		try {
			return await db.select().from(todo).all();
		} catch (error) {
			console.error("Error fetching todos:", error);
			throw new TRPCError({
				code: "INTERNAL_SERVER_ERROR",
				message: "Failed to retrieve todos",
				cause: error,
			});
		}
	}),

	create: publicProcedure
		.input(z.object({ text: z.string().min(1) }))
		.mutation(async ({ input }) => {
			return await db
				.insert(todo)
				.values({
					text: input.text,
				})
				.returning()
				.get();
		}),

	toggle: publicProcedure
		.input(z.object({ id: z.number(), completed: z.boolean() }))
		.mutation(async ({ input }) => {
			return await db
				.update(todo)
				.set({ completed: input.completed })
				.where(eq(todo.id, input.id))
				.returning()
				.get();
		}),

	delete: publicProcedure
		.input(z.object({ id: z.number() }))
		.mutation(async ({ input }) => {
			return await db
				.delete(todo)
				.where(eq(todo.id, input.id))
				.returning()
				.get();
		}),
});
