# D2 Armory
This repository consists of the parts required to run the D2 armory with [docker compose](https://docs.docker.com/compose/).

The [docker-compose.yml](docker-compose.yml) file describes all components and their configuration.

## Modules
- [armory gui](https://github.com/nokka/d2-armory-gui)
- [armory api](https://github.com/nokka/d2-armory-api)

## Armory UI
The Armory frontend written in react that can be found [here](https://github.com/nokka/d2-armory-gui).

## Armory API
Armory API is responsible for serving characters over HTTP and 
caches characters requested repeatedly in a [short time](https://github.com/nokka/d2-armory-api/blob/master/cmd/server/main.go#L32) in mongoDB.

## D2S folder
the [d2s](d2s) folder contains a few d2s files that can be used to run the armory with. The d2s folder is mounted into
the d2 armory api on [start up](https://github.com/nokka/d2-armory/blob/master/docker-compose.yml#L18-L19).

## How to use the repository
The armory is started using docker compose to containerize the application so the host system doesn't have to install any
dependencies.

### Start the armory 

```bash
# starts the armory as with all components as daemons.
docker-compose up -d
```

### Health check
```bash
# list all running containers to make sure they're healthy.
docker-compose ps
```

### Stop the armory
```bash
# stops all components.
docker-compose down
```

### Stop and remove the data volume (character cache)
```bash
# use the -v flag to remove the volume.
docker-compose down -v
```

### Stop single container
If you want to develop a single part of the armory such as the frontend, it's advised to run that
project outside of docker by cloning the repository and start it locally on the host machine but
still use the Armory API and mongodb running in Docker.

```bash
docker-compose stop armory-gui
```
