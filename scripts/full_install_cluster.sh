#! /bin/bash

#Criar bucket S3 para estado do cluster
aws s3api create-bucket --bucket kubernetes-aws-io-marcelo

#Adicionar versionamento no cluster
aws s3api put-bucket-versioning --bucket kubernetes-aws-io-marcelo --versioning-configuration Status=Enabled

#Criar volume para utilização futura do MongoDB
aws ec2 create-volume --size 200 --region us-west-2 --availability-zone us-west-2a

#Criar variavel de ambiente para acesso ao bucket
export KOPS_STATE_STORE=s3://kubernetes-aws-io-marcelo

#Criar zona no route 53
ID=$(uuidgen) && \
aws route53 create-hosted-zone \
--name cluster.kubernetes-aws.io-marcelo \
--caller-reference $ID \
| jq .DelegationSet.NameServers

#Criar cluster
kops create cluster \
--name cluster.kubernetes-aws.io-marcelo.k8s.local \
--zones us-west-2a \
--state s3://kubernetes-aws-io-marcelo \
--yes