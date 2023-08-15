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

### Note

OS によって使えるシェル違う
-d デタッチモード==> ランはされている。MacOS で制御
root@36756b036962:/etc/nginx/conf.d# cat default.conf ⇒ 設定ファイル
変更したら表示されなくなる ↓
root@36756b036962:/usr/share/nginx/html# mv index.html newIndex.html
root@36756b036962:/usr/share/nginx/html# mv newIndex.html index.html