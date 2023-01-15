import { Router, Context } from "../../deps.ts";
import { taskHandler } from "../adapter/controller/sample.ts";

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

router.get('/api/v1/books', taskHandler.getAll);
router.get('/api/v1/books/:id', taskHandler.get);
router.post('/api/v1/books', taskHandler.create);
router.put('/api/v1/books/:id', taskHandler.update);
router.delete('/api/v1/books/:id', taskHandler.delete);

export { router }