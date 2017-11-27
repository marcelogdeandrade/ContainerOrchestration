#! /bin/bash

#Baixar heapster
git clone https://github.com/kubernetes/heapster.git
cd heapster

#Criar servicos do heapster
kubectl create -f deploy/kube-config/influxdb/
kubectl create -f deploy/kube-config/rbac/heapster-rbac.yaml