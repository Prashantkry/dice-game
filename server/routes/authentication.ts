import express from 'express'

import { logIn, register } from '../controller/authentication'

export default (router: express.Router) => {
    router.post('/auth/register', register)
    router.post('/auth/login', logIn)
}