import { rest } from 'msw';
import taxes from './taxes.json'
import form from './form.json'

export const handlers = [
    rest.post('/login', (req, res, ctx) => {
        const { username, password } = req.body;
        return res(ctx.delay(1000), ctx.json({data : {token: 't0k3n', username: username}}))
    }),

    rest.get('/taxes', (req, res, ctx) => {
        return res(ctx.json({data: taxes}))
    }),

    rest.get('/taxes/:id/form', (req, res, ctx) => {
        return res(ctx.json({data: form}))
    }),

    rest.post('/taxes/:id/form', (req, res, ctx) => {
        return res(ctx.delay(1000), ctx.json({data: req.body}))
    }),
]