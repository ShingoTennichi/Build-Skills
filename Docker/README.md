# Docker Commands

## Official Documents and Samples
[docker-compose.yaml sample repository](https://github.com/docker/awesome-compose)
[docker run command](https://docs.docker.com/engine/reference/run/)
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

# remove image
docker rmi <image name || image id>
```


```zsh
# create a nginx container in -d mode
docker run -d nginx
```

## Options

```sh
# -detached mode — Just run the container and then detach from it
-d

# -interactive + It takes me straight inside the container.
-i

# --tty(teletype) which is referred to terminal these days
-t

# usually -i and -t are used together to directly enter container's terminal
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
<!-- the location of the file that contains OS info -->
/etc/os-release

## nginx
<!-- the location of nginx config file -->
root@36756b036962:/etc/nginx/conf.d
<!-- as default, nginx reads index.html file in the directory ↓ -->
root@36756b036962:/usr/share/nginx/html # mv index.html newIndex.html
root@36756b036962:/usr/share/nginx/html # mv newIndex.html index.html