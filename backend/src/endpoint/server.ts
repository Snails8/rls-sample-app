import { Application, Context } from "../../deps.ts";
import { router } from "./router.ts";

const PORT = 8000;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`start deno server!  http://localhost:${PORT}/`);
await app.listen({ port: PORT });