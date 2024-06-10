import express, { Router } from 'express'
import { diceController } from '../controller/diceController'

export default (router: express.Router) => {
    router.post('/api/dice', diceController)
}