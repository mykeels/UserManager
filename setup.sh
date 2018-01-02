#!/bin/bash

echo 'Setup UserManager'

docker build -t mykeels/alc-user-manager .
docker build -t mykeels/mongodb ./data

docker rm $(docker ps -aq --filter name=mykeels-mongodb)
docker run -i --name=mykeels-mongodb -p 27017:27017 -d -t mykeels/mongodb
docker run -p 3010:3010 --link mykeels-mongodb -d mykeels/alc-user-manager