#! /bin/bash

#Criar variavel de ambiente para acesso ao bucket
export KOPS_STATE_STORE=s3://kubernetes-aws-io-marcelo

#Criar cluster
kops create cluster \
--name cluster.kubernetes-aws.io-marcelo.k8s.local \
--zones us-west-2a \
--state s3://kubernetes-aws-io-marcelo \
--yes