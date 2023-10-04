# FAKE API

## Description

Cette API est un faux serveur qui permet de simuler des appels à une API.
Elle vous permet de récupérer, créer, modifier et supprimer des articles.

Elle vous fournit 3 articles de base puis modifie cette liste au fur et à mesure de vos manipulations.

## Routes disponibles

----------------------------------------------------
| Method | Chemin             | Description                | Body                                   | params       |
|--------|--------------------|----------------------------|----------------------------------------|--------------|
| GET    | /getAll            | Récupère tous les articles | -                                      | -            |
| POST   | /addArticle        | Créer un article           | { title: `string`, content: `string` } | -            |
| PUT    | /updateArticle/:id | Modifie un article         | { title: `string`, content: `string` } | id: `number` |
| DELETE | /deleteArticle/:id | Supprime un article        | -                                      | id: `number` |
