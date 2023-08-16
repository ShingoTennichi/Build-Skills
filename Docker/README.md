# Docker Commands

## Setups

```sh
# import image from docker hub
# check docker hub https://hub.docker.com/
docker pull <Image>
```

## Basic Commands
```sh
# see running containers : ps ⇒ process status
docker ps -a

# check CPU and memory usage
docker stats

# run an image in -d mode and give it a name
docker run --name test -d -p <port  i.e.: 8080:80> nginx

# restart selected existing container
docker restart <Container ID>

# connect to the container by SSH
docker exec -it <Container ID> /bin/sh

# bashでコンテナーに入るときに使う
docker exec -it <Container ID> bash

# remove a container
docker container rm <Container ID i.e.: 034a>
```


```zsh
# create a nginx container in -d mode
docker run -d nginx
```

/etc/os-release ⇒ OS の種類調べるときに見にいく

## Options

```zsh
# -detach mode — Just run the container and then detach from it
-d

# -interactive + -tty —  It takes me straight inside the container.
-it

# port
-p <port:port>
```

## docker-compose
```sh

# build images(run `docker images` to check)
docker-compose build --no-cache # --no-cache force to rebuild images

# run containers as detached mode
docker-compose up -d

# stop containers
docker-compose down

# completely delete directories and files from local
docker-compose down --rmi all --remove-orphans -v

# create next app at the same time as the container starts
docker-compose run --rm frontend sh -c 'npx create-next-app@latest'
```
## flags
```sh
-c
-d # detached mode(background)
-it # shorthand for -i (--interactive) and -t (--tty)
-p <local port>:<container port> # port
--name <name> #
--rm #
```
### Note
shell

## nginx
<!-- nginx config file -->
root@36756b036962:/etc/nginx/conf.d
<!-- 変更したら表示されなくなる ↓ -->
root@36756b036962:/usr/share/nginx/html # mv index.html newIndex.html
root@36756b036962:/usr/share/nginx/html # mv newIndex.html index.html