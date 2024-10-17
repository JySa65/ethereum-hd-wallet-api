import express from 'express';
import * as walletsController from "./wallets.controller";

const router = express.Router();

router.get('/', walletsController.getAll);

router.get('/:id', walletsController.get);

router.post('/', walletsController.create);



export default router;
