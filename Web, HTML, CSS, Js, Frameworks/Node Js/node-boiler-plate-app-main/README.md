# Basic-App-Structure

A template of Node.js Web Server.

## Pre requisites

- Node 14.0

## Install dependencies

```
npm install or npm i
```

## Start Server

```
npm start
```

Or

```
node server | bunyan #install bunyan globally for good formatting of logs
```

Or

```
npm run server (hot reloading)
```

## Tail Logs

```
npm run logs
```

## Stop app

```
npm run stop
```

## Lint

```
> npm run lint
> npm run prettier
```

## Config

- For development, define required variables in development.json
- For production, define required variables as environment variable in remote setup.

## Create Migration

```
npm run db:migrate:create migration-name
```

## Run Migration

```
npm run db:migrate
```

## Undo Migration

```
npm run db:migrate:undo
```

## Contributing

- Every Database Table should have a corresponding Model file in `models` folder
- We use `Sequelize` as our ORM
- Use `npx sequelize` to cli for migrations
- The `controllers` and `routes` folder should exactly mimic each other. All routers in `routes` should have their corresponding `controllers` file/folder
- All logging should be done using `req.log`. It's a bunyan logger. For model level logging, `req.log` should be passed to underlying layers
