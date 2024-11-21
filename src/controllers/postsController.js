import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {

  const posts = await getTodosPosts();
  // Quando uma requisição GET for feita para a rota '/posts', a função getTodosPosts é chamada
  // para buscar todos os posts do banco de dados.
  res.status(200).json(posts);
  // Envia uma resposta com status 200 (sucesso) e o array de posts no formato JSON.
}
