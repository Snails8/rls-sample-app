import { RouterContext, helpers } from "../../../deps.ts";

export const taskHandler = {
  getAll(ctx: RouterContext) {
    ctx.response.body = 'Get All Tasks'
  },

  get(ctx: RouterContext) {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });
    ctx.response.body = `Get Task By ID: ${id}`
  },

  create(ctx: RouterContext) {
    ctx.response.body = 'Create Task'
  },

  update(ctx: RouterContext) {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });
    ctx.response.body = `Update Task By ID: ${id}`
  },

  delete(ctx: RouterContext) {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });
    ctx.response.body = `Delete Task By ID: ${id}`
  }
}