#! /bin/bash

#Deploy da imagem da API
kubectl run api --image=docker.io/marcelogdeandrade/projeto-cloud-api --port=3000

#Expose do deployment para LoadBalancer
kubectl expose deployment api --type=LoadBalancer --name=api