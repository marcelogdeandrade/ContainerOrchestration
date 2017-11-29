#! /bin/bash

#Install click
sudo pip install click

#Baixar client
wget https://raw.githubusercontent.com/marcelogdeandrade/ContainerOrchestrationProject/master/banana

#Transformar client em executavel
chmod +x banana

#Mover cliente
sudo mv banana /usr/local/bin