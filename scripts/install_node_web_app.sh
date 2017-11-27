#! /bin/bash

#Deploy da imagem da API
kubectl run node-web-app --image=docker.io/marcelogdeandrade/node-web-app --port=8081 --requests=cpu=200m --replicas=3

#Expose do deployment para LoadBalancer
kubectl expose deployment node-web-app --type=LoadBalancer --name=node-web-app

#Autoscale do deploy
kubectl autoscale deployment node-web-app --cpu-percent=50 --min=3 --max=5