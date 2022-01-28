import express from 'express'
import UserController from '../controller/UserController'; 
const produtoRouter = express.Router()

produtoRouter.post('/produto',UserController.create)

    

produtoRouter.get('/produto',UserController.findAll); 
produtoRouter.get('/produto/:id',UserController.findOne);
produtoRouter.delete('/produto/:id',UserController.destroy);

export {produtoRouter}