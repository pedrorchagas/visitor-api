# 🚀 Visitor API

Uma API simples de contador de visitantes construída com Node.js, Redis, Docker e CI/CD automatizado com GitHub Actions.

[![Deploy to EC2](https://github.com/pedrorchagas/visitor-api/actions/workflows/deploy.yml/badge.svg)](https://github.com/pedrorchagas/visitor-api/actions/workflows/deploy.yml)

## 📋 Sobre o Projeto

Este projeto é uma API RESTful que implementa um contador de visitantes persistente usando Redis como banco de dados em memória. A aplicação demonstra conceitos modernos de DevOps, incluindo containerização com Docker, orquestração de serviços com Docker Compose, proxy reverso com Nginx e deploy automatizado através de GitHub Actions.

### 🎥 Demo

Confira a pipeline de CI/CD em ação: [**Pipeline Funcionando no YouTube**](https://youtu.be/JNR6llNL4HM)

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express** - Framework web minimalista
- **Redis** - Banco de dados em memória para persistência rápida
- **Docker** - Containerização da aplicação
- **Docker Compose** - Orquestração de múltiplos containers
- **Nginx** - Proxy reverso e load balancer
- **GitHub Actions** - CI/CD pipeline para deploy automatizado
- **AWS EC2** - Hospedagem da aplicação

## 📁 Estrutura do Projeto

```
visitor-api/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline de CI/CD
├── nginx/
│   └── default.conf            # Configuração do Nginx
├── services/
│   └── redis.js                # Serviço de integração com Redis
├── dockerfile                  # Imagem Docker da API
├── docker-compose.yml          # Orquestração dos serviços
├── index.js                    # Aplicação principal
└── package.json                # Dependências do projeto
```

## 🚀 Como Executar

### Pré-requisitos

- Docker
- Docker Compose

### Instalação e Execução

1. Clone o repositório:
```bash
git clone https://github.com/pedrorchagas/visitor-api.git
cd visitor-api
```

2. Execute com Docker Compose:
```bash
docker compose up -d --build
```

3. A API estará disponível em:
   - **API**: `http://localhost:80`
   - **Redis**: `localhost:6379`

## 📡 Endpoints

### `GET /`
Incrementa e retorna o número total de visitantes.

**Resposta:**
```json
{
  "visitors": 42
}
```

### `GET /health`
Verifica o status da aplicação.

**Resposta:**
```json
{
  "health": "ok"
}
```

## 🔄 CI/CD Pipeline

O projeto utiliza GitHub Actions para automatizar o deploy na AWS EC2. Toda vez que há um push na branch `main`, a pipeline:

1. ✅ Faz checkout do código
2. 🔐 Conecta via SSH na instância EC2
3. 📥 Puxa as últimas alterações do repositório
4. 🛑 Para os containers em execução
5. 🔨 Reconstrói e reinicia os containers com as novas alterações

### Configuração dos Secrets

Para replicar o deploy, configure os seguintes secrets no GitHub:

- `EC2_HOST` - IP ou DNS da instância EC2
- `EC2_USER` - Usuário SSH (geralmente `ubuntu` ou `ec2-user`)
- `EC2_SSH_KEY` - Chave privada SSH para autenticação

## 🐳 Arquitetura Docker

A aplicação é composta por 3 serviços containerizados:

1. **nginx-proxy** - Proxy reverso na porta 80/443
2. **redis-server** - Banco de dados Redis
3. **api** - Aplicação Node.js

Todos os serviços são conectados através de uma rede bridge customizada (`api-network`).

## 📊 Diagrama de Arquitetura

```
Internet
    ↓
Nginx Proxy (80/443)
    ↓
Express API (3000)
    ↓
Redis Server (6379)
```

## 👨‍💻 Autor

Desenvolvido por **Pedro Chagas**

- GitHub: [@pedrorchagas](https://github.com/pedrorchagas)

## 📄 Licença

Este projeto está sob a licença ISC.