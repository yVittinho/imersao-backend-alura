import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js";

// Importa o framework Express para criar a aplicação web e a função para conectar ao banco de dados.

const conexao = await conectarAoBanco(process.env.STRING_CONNECTION);


export async function getTodosPosts() {
    const db = conexao.db("imersao-backend");
    // Seleciona o banco de dados 'imersao-backend' da conexão estabelecida.
    const colecao = db.collection("posts");
    // Seleciona a coleção 'posts' dentro do banco de dados.
    return colecao.find().toArray();
    // Executa uma consulta para encontrar todos os documentos da coleção 'posts' e retorna os resultados como um array.
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-backend");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-backend");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}

