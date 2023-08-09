# Docker Commands

```zsh
<!-- see running containers : ps ⇒ process status -->
docker ps

docker run --name test -d -p <port  i.e.: 8080:80> nginx

<!-- restart selected existing container -->
docker restart <Container_Name>

<!-- connect to the container by SSH -->
docker exec -it <Container_Name> /bin/sh

<!-- check CPU and memory usage -->
docker stats

<!-- bashでコンテナーに入るときに使う -->
docker exec -it recursing_edison bash

docker container rm <Container Name i.e.: 034a>
```

---

### Note

OS によって使えるシェル違う
デタッチモード==> ランはされている。MacOS で制御

```zsh
docker run -d nginx
```

/etc/os-release ⇒ OS の種類調べるときに見にいく

Options

```zsh
<!-- -detach mode — Just run the container and then detach from it -->
-d

<!-- -interactive + -tty —  It takes me straight inside the container. -->
-it

<!-- -port -->
-p
```

---

root@36756b036962:/etc/nginx/conf.d# cat default.conf ⇒ 設定ファイル
変更したら表示されなくなる ↓
root@36756b036962:/usr/share/nginx/html# mv index.html newIndex.html
root@36756b036962:/usr/share/nginx/html# mv newIndex.html index.html
