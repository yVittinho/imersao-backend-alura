import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Habilita o middleware para analisar o corpo das requisições em formato JSON.
    app.use(express.json());

    app.get("/posts", listarPosts);
}

export default routes;