#! /bin/bash

#Baixar arquivo yaml do mongo
wget https://raw.githubusercontent.com/marcelogdeandrade/ContainerOrchestrationProject/master/yaml_files/mongo.yaml

#Criar RC do Mongo no kubernetes
kubectl create -f mongo.yaml

#Criar serviço para expor o mongodb para o cluster com nome Mongo
kubectl expose rc mongo-controller --port=27017 --name=mongo