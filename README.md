# [Roadmap.sh](https://roadmap.sh) - Blogging Platform API Backend Project

A **NestJS** solution of [Blogging Platform API](https://roadmap.sh/projects/blogging-platform-api)

## Setup

### Setup PostgreSQL

```PostgreSQL
--You can change user, password and database name inside main.ts.
CREATE USER "blogging-platform-api" WITH ENCRYPTED PASSWORD 'password';

CREATE DATABASE "blogging-platform-api" OWNER "blogging-platform-api";
```

### Setup project

```bash
# Install dependencies
yarn 

# Run dev server
yarn start:dev

# Run production server
yarn build
yarn start
```

## Endpoints

- `GET /posts?term=term`
    - Get all posts with term in title, content, tags or category.
    - Query: `term: string`
    - Default: `term: ''`
    - Response: `[ { id: number, title: string, content: string, category: string, tags: string[], created_at: Date, updated_at: Date } ]`
    - Http Status: 200
- `POST /posts/`
    - Create a new post.
    - Body: `{ title: string, content: string, category: string, tags: string[] }`
    - Response: `{ id: number, title: string, content: string, category: string, tags: string[], created_at: Date, updated_at: Date }`
    - Http Status: 201
        - If JSON body is invalid, it will return 400.
- `PUT /posts/:id`
    - Update a post.
    - Body: `{ title: string, content: string, category: string, tags: string[] }`
    - All fields inside body are optional.
    - Response: `{ id: number, title: string, content: string, category: string, tags: string[], created_at: Date, updated_at: Date }`
    - Http Status: 200
        - If JSON body is invalid, it will return 400.
        - If post does not exist, it will return 404.
- `DELETE /posts/:id`
    - Delete a post.
    - Http Status: 204
        - If post does not exist, it will return 404.
