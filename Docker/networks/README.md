# Networking with Docker

## Run Dockerfile to create an image
```sh
# run commands in Dockerfile
docker build . -t <image name>

# create container as network admin access
# give permission to edit network setting by --cap-add=NET_ADMIN
docker run --name <container name> --network <network name> --cap-add=NET_ADMIN -d <image name>
```

## Commands for network settings
```sh
docker network list

docker network inspect <network name>

# create a network
docker network create <network name> --subnet <subnet musk>
# e.g
docker network create network1 --subnet 10.0.0.0/24

# connect existing container to a network
docker network connect <network name> <container name>
# e.g.
docker network connect network1 container1

# disconnect network
docker network disconnect <network name> <container name>
# e.g.
docker network disconnect bridge container1
```

## Useful Commands for inspecting networking setting
```sh
docker exec -it <container name> <shell>
# e.g.
docker exec -it server1 bash

# after above command, terminal starts bash in the container
$server1> ifconfig

$server1> whoami

$server1> traceroute <target ip address>
# e.g.
$server1> traceroute google.com

$server1> ip a

$server1> hostname

$server1> hostname -i

$server1> nplookup <ip address || hostname>

$server1> curl http://<ip address || container name>
```

## Documents
[docker network create](https://docs.docker.com/engine/reference/commandline/network_create/)