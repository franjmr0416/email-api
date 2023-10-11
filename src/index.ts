import { Hono } from 'hono'
import { env } from 'hono/adapter'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))

app.post('/sendmail', (c) => {
  const auth = c.req.header('authorization')
  const { API_KEY } = env<{ API_KEY: string }>(c)
  //console.log(API_KEY)
  return auth == API_KEY ? c.text(auth) : c.text('Autenticación incorrecta')
})
export default app
