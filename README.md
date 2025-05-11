# 🃏 Pokémon TCG Dashboard

![Dashboard Preview](Dasboard%20de%20cartas.png)

Um dashboard interativo para colecionadores de cartas Pokémon, desenvolvido com React.js e Vite.

## ✨ Funcionalidades

- 🔍 Busca por **nome** ou **ID** de cartas
- 💾 Salvar cartas favoritas no localStorage
- 📊 Visualização detalhada com:
  - Imagens em alta resolução
  - Estatísticas (HP, ataques, fraquezas)
  - Informações de coleção
  - Preços de mercado

## 🚀 Começando

### Pré-requisitos

- Node.js (v16+)
- Conta no [Pokémon TCG Developer Portal](https://pokemontcg.io/)

### Instalação

1. Clone o repositório
   ```bash
   git clone https://github.com/seu-usuario/pokemon-tcg-dashboard.git
   cd pokemon-tcg-dashboard
   ```
2. Instale as dependências
   ```bash
   npm install
   ```
3. Configure a API Key

- Crie um arquivo .env na raiz do projeto:
  
  ````.env
  VITE_POKEMON_API_KEY=sua_chave_aquinpm
  ````
- Obtenha uma chave em [Pokémon TCG Developer Portal](https://pokemontcg.io/account)

4. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

## 📂 Estrutura do Projeto

```/src
|-- /components
|   |-- CardDetails.jsx    # Componente de detalhes da carta
|   |-- SavedCards.jsx     # Lista de cartas salvas
|   |-- SearchCard.jsx     # Componente de busca
|-- App.jsx               # Componente principal
|-- main.jsx              # Ponto de entrada
|-- styles.css            # Estilos globais
.env                      # Variáveis de ambiente
vite.config.js            # Configuração do Vite
```

## 🧩 Componentes Principais

### `SearchCard.jsx`

* Campo de busca com opção para pesquisar por nome ou ID
* Validação de inputs
* Exibição de resultados em grid
* Tratamento de erros

### `CardDetails.jsx`

* Exibe imagem em alta resolução
* Mostra todas as informações da carta:
  * HP, tipos, ataques
  * Fraquezas e resistências
  * Detalhes do set (coleção)
  * Preços de mercado

### `SavedCards.jsx`

* Lista de cartas salvas
* Visualização em miniaturas
* Opção para remover cartas

## 🌐 API Utilizada

* **Pokémon TCG API** v2
* Documentação: [https://pokemontcg.io/documentation](https://pokemontcg.io/documentation)

## 🔄 Fluxo de Dados

1. Usuário faz uma busca
2. Aplicação consulta a API Pokémon TCG
3. Resultados são exibidos
4. Usuário pode salvar cartas
5. Cartas salvas são armazenadas no `localStorage`
6. Interface é atualizada dinamicamente

## 💡 Melhorias Futuras

* Adicionar paginação nos resultados
* Implementar filtros avançados (por tipo, coleção, etc.)
* Adicionar modo escuro/claro
* Criar sistema de categorias para cartas salvas
* Adicionar comparação entre cartas

## 📝 Padrão de Commits

**bash**

Copy

Download

```
git commit -m "ADS-nome_da_funcionalidade: matricula Reactjs-vite"
```

Exemplos:

* `ADS-layout_cartas_salvas: 123456 Reactjs-vite`
* `ADS-filtro_busca: 123456 Reactjs-vite`
* `ADS-detalhes_cartas: 123456 Reactjs-vite`

## ⚠️ Solução de Problemas Comuns

### API Key não reconhecida

* Verifique se o arquivo `.env` está na raiz do projeto
* Confira se o nome da variável está exatamente `VITE_POKEMON_API_KEY`
* Reinicie o servidor após alterar o `.env`

### Erros 404/400 nas buscas

* Verifique se está usando IDs no formato correto (ex: "base1-4")
* Para buscas por nome, use termos exatos inicialmente
* Confira no console logs detalhados do erro

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](https://license/) para detalhes.

