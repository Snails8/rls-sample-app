import { Router, Context } from "../../deps.ts";

const router = new Router();

const setResponseData = (ctx: Context, val: string) => {
  ctx.response.headers.set("Content-Type", "application/json; charset=utf-8");
  ctx.response.body = {
    data: val
  };
  return;
}

router.get(`/`, async (ctx: Context) => {
  console.log('----test-get------------------');
  setResponseData(ctx, 'test');
})

export { router }