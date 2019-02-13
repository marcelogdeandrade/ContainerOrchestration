# ContainerOrchestration

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

Todos os scripts de instalação podem ser encontrados na pasta */scripts* do projeto.

1. Cluster

Para dar deploy no cluster, é necessário apenas rodar o script `full_install_cluster.sh`. Espere em torno de 3-5 minutos para todo o cluster ser configurado para continuar com os passos a seguir

2. Dependências

É necessário o serviço [Heapster](https://github.com/kubernetes/heapster) do Kubernetes para monitoramento de recursos, isso possiblita a escalabilidade horizontal das aplicaçes. Rode o script `install_cluster_dependencies.sh`.

3. MongoDB

Para persistir os dados dos clientes, optou-se por usar o banco de dados [MongoDB](https://www.mongodb.com/). Para dar deploy do serviço do dB no cluster, rode o script `install_mongodb.sh`. Espere em torno de 2-3 minutos para configuração do container para continuar os passos a seguir. (Container Docker utilizado pode ser encontrado na pasta */mongo_docker*)

4. API

A comunicação da CLI com o cluster é feita através de uma API utilizando NodeJS. Para dar deploy dessa API no cluster, rode o script `install_api.sh`. O endpoint desse serviço será utilizado posteriormente na CLI. (Container Docker utilizado pode ser encontrado na pasta */servidor_kubectl*).

5. Client

Os clientes devem seguir somente essa etapa, para instalar o CLI do serviço, rode o script `install_client.sh`.

**PS: Troque o endpoint da API localizado dentro da CLI na variavél `base` pela seu próprio endpoint**

Para encontrar o endpoint de sua api, rode o comando:
```
$ kubectl get service api --output=wide`
```
O endpoint estará no campo *EXTERNAL-IP*, complete o URL com a porta 3000.

Endpoint exemplo: http://a91d51e33d61211e794eb02e3238d16d-902563938.us-west-2.elb.amazonaws.com:3000/

## CLI

Após a instalaço da CLI e substituiço do endpoint da API, rode o seguinte comando para mais informações:

```
$ banana --help
```

Para criar um novo usuário, rode:

```
$ banana configure
```

As configuraçes de usuário ficam salvas no arquivo *config* localizado em *~/.banana/*

Para dar deploy em um novo serviço:

```
$ banana create_service
```

Para buscar informaçes desse serviço, como a URL:

```
$ banana get_service
```

E para remover o serviço:

```
banana delete_service
```

## Imagens Docker Utilizadas

[API](https://hub.docker.com/r/marcelogdeandrade/projeto-cloud-api/)

[Mongo](https://hub.docker.com/_/mongo/)

[Aplicação](https://hub.docker.com/r/marcelogdeandrade/node-web-app/)

## Autores

* **Marcelo G. de Andrade**

## Licença

Esse projeto é licenciado pela licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.
