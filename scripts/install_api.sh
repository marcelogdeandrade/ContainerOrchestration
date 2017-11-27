#! /bin/bash

#Deploy da imagem da API
kubectl run api --image=docker.io/marcelogdeandrade/projeto-cloud-api --port=3000 --requests=cpu=200m --replicas=3

#Expose do deployment para LoadBalancer
kubectl expose deployment api --type=LoadBalancer --name=apiloadbalancer

#Autoscale do deploy
kubectl autoscale deployment api --cpu-percent=50 --min=3 --max=5