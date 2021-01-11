import { createExpressServer } from 'routing-controllers';
import { UserController } from './modules/user/user.controller';
const app =createExpressServer({
  controllers:[__dirname+"/*/*/*.controller.ts"],
})


app.listen(3000,()=>console.log("Server is running on http://localhost:3000"))