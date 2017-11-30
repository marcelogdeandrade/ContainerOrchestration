# ContainerOrchestrationProject

Um projeto de orquestrador de serviços utilizando o Kubernetes como framework para criaçao de clusters com containers.

## Começando

O projeto é dividido em duas partes. 

1. As configurações e deploy do cluster com uma API de acesso para os clientes e deploy de um container com MongoDB para persistências dos dados dos clientes.

2. Instalação do CLI e cadastro do cliente para acesso ao serviço, com criação, informações e remoção do serviço.

Para informações mais detalhadas do andamento do projeto, há o arquivo *docs.md* ou *docs.pdf* com todo a documentação do projeto.

## Pré-Requisitos

- AWS CLI Configurada
- Kops
- Kubectl
- jq

## Instalação

1. Cluster

Para dar deploy no cluster, é necessário apenas rodar o script `full_install_cluster.sh`. Espere em torno de 3-5 minutos para todo o cluster ser configurado para continuar com os passos a seguir

2. Dependências

É necessário o serviço 