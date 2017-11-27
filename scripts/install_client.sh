#! /bin/bash

#Baixar client
wget https://raw.githubusercontent.com/marcelogdeandrade/ContainerOrchestrationProject/master/marcelao.py

#Transformar client em executavel
chmod +x marcelao.py

#Mover cliente
sudo mv marcelao.py /usr/local/bin