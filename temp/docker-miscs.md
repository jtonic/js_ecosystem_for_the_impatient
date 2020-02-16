

configuration slices???

Application:
    - http://192.168.99.100:30001/app

API
    - http://192.168.99.100:30001/api



@TestTemplate -> @ParemeterizedTest

# cleaning up

`docker system df`
`docker system df -v`


`docker system prune`
`docker system prune -f --volumes`
`docker system prune -a -f`

stopping all running containers

`docker container stop $(docker container ls -a -q)`

remove all stopped containers

`docker container prune -f`

remove dangling images
`docker image prune -f`
remove all unused images
`docker image prune -a -f`


docker container run -it --rm --name python3 python:3-alpine python --version


`docker exec -ti k8s_todo-be_todo-be-7fcd9d4c9-mbtgt_todo_d1175d1e-2429-4a2a-b0c6-e66ba8b5ed3b_0 /bin/sh`

`cat /etc/passwd`

- show alpine version
`cat /etc/alpine-release`

- show running processes

ps axo label,pid,stat,start,time,user:32,command