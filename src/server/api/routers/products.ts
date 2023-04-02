import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { Product } from "@prisma/client";


export const products = createTRPCRouter({
  createCategory: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.category.create({
        data: {
          name: input.name,
        },
      });
    }),
  getCategory: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      return ctx.prisma.category.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  getCategories: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.category.findMany();
  }),
  deleteCategory: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      return ctx.prisma.category.delete({
        where: {
          id: input.id,
        },
      });
    }),
  updateCategory: publicProcedure
    .input(z.object({ id: z.string(), name: z.string() }))
    .mutation(async ({ input, ctx }) => {
      return ctx.prisma.category.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
        },
      });
    }),
  getCategoryProducts: publicProcedure
    .query(({ ctx }) => {
      return ctx.prisma.category.findMany({
        include: {
          products: true,
        },
      });
    }),
  createProduct: publicProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        image: z.string(),
        price: z.number(),
        categoryId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return ctx.prisma.product.create({
        data: {
          name: input.name,
          description: input.description,
          image: input.image,
          price: input.price,
          category: {
            connect: {
              id: input.categoryId,
            },
          },
        },
      });
    }),
  getProduct: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      return ctx.prisma.product.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  getProducts: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.product.findMany();
  }),
  deleteProduct: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      return ctx.prisma.product.delete({
        where: {
          id: input.id,
        },
      });
    }),
  updateProduct: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
        image: z.string(),
        price: z.number(),
        categoryId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return ctx.prisma.product.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          description: input.description,
          image: input.image,
          price: input.price,
          category: {
            connect: {
              id: input.categoryId,
            },
          },
        },
      });
    }),
});
