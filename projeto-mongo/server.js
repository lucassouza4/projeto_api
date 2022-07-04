import {app,app2} from './src/app.js'

const port = process.env.PORT || 3000;
const port2 = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})

app2.listen(port2, () => {
  console.log(`Servidor escutando em http://localhost:${port2}`)
})
