# "Script Language Laboratory" JS project

## Backend + Frontend + MongoDB

- Requirements for local run: `docker`, `docker-compose`
- To run dockerized version of project execute: `docker-compose up`

## Backend built with TypeScript, Node and Express

### Introduction

- Stored in `shop-api` directory.

### Running

- To properly run (only backend) locally, there has to be a running MongoDB instance (as `localhost`):
  - with exposed port 27017 and default administrator privileges
    - for example, to run MongoDB with Docker: `docker run -d -p 27017:27017 mongo` 
    - with optional `-v {PATH_TO_DB_FILES}:/data/db/` to contain persistent storage in {PATH_TO_FILES}
  - change `mongoUri` to `mongodb://localhost:27017/?retryWrites=true&w=majority` in `/config/app.config.ts` file
- Move into `shop-api` directory (for example `cd shop-api`).
- Execute `npm install` to install project dependencies.
- Execute `npm run serve` to start project.
- To end project send interrupt signal (`Ctrl+C` in terminal).
- Hosted on `localhost:8080` by default.

### Endpoints

- `GET: /products` - returning product list.
- `GET: /categories` - returning category list.

## Frontend built with TypeScript and React (TBD)

### Introduction

- Stored in `shop-ui` directory.

### Running

- Move into `shop-ui` directory (for example `cd shop-ui`).
- Execute `npm install` to install project dependencies.
- Execute `npm run start` to start project.
- To end project send interrupt signal (`Ctrl+C` in terminal).
- Hosted on `localhost:3000` by default.
