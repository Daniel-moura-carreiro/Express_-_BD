import express from "express"
const app = express()

// Express dava interpretar o corpo (body) com Json
app.use(express.json)

// Mock
const alunos = [
  {id: 1, nome:'Bruno', curso: 'ADS'},
  {id: 2, nome:'Maria', curso: 'ADS'},
]

// função auxiliar
function buscarIndexAluno(id) {
  return alunos.filter( aluno => aluno.id == id)
}

// função auxiliar
function buscarAlunoPorId(id) {
  return alunos.findIndex( aluno => aluno.id == id)
}

//criando a rota raiz
app.get('/', (req, res) => {
  res.send('Minha API REST com Express!')
})

// Rota lista alunos GET
app.get('/alunos', (req, res) => {
    res.status(200).send(alunos);
})

// Rota lista alunos POST
app.post('/alunos', (req, res) => {
    alunos.push(req.body)
    res.status(201).send('Aluno cadastrado com sucesso!');
})

// Buscar aluno por id
app.get('/aluno/:id', (req, res) => {
  let index = buscarIndexAluno(req.params.id)
  res.json.buscarAlunoPorId(req.params.id)
})

// Delete
app.delete('/alunos/: id', (req, res) => {
    let index = buscarIndexAluno(req.params.id)
   // console.log(index)
   alunos.splice(index, 1)
   res.send('Aluno co id ${req.params.id} excluindo com sucesso!')
})

// Atualizar aluno
app.put('/aluno/:id', (req, res) => {
  let index = buscarIndexAluno(req.params.id)
  aluno[index].nome = req.body.nome
  aluno[index].curso = req.body.curso
  res.send(alunos)
})

export default app
