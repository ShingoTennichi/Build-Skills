# install images
FROM httpd

RUN apt-get update
# install for ping command
RUN apt-get install -y iputils-ping
# install for traceroute command
RUN apt-get install -y inetutils-traceroute
# install for ip a command
RUN apt-get install -y iproute2
# install other tools
RUN apt-get install -y curl telnet dnsutils vim