## Gabriel Gonçalves Verdin

# Descrição do Projeto

Um sistema simples em **TypeScript/Node.js** para gerenciar uma biblioteca pessoal via linha de comando.  
O projeto permite cadastrar, consultar e organizar livros, além de gerar estatísticas úteis sobre a coleção.

--- 

## Funcionalidades

- **Cadastro de Livros**: Título, Autor, Ano, Páginas, Status de Leitura e Avaliação
- **Consulta**:
    - Exibir toda a biblioteca
    - Buscar por Título
    - Listar por Autor
- **Gerenciamento**:
    - Adicionar Livro
    - Remover Livro
    - Marcar como Lido ou Pendente
- **Estatísticas**:
    - Total de Livros
    - Percentual de Livros Lidos
    - Média de Avaliações 
    - Livro Melhor Avaliado
    - Total de Páginas Lidas
- **Classificações**:
    - Classificação por Década

## Estrutura do Projeto:

├── src/
│   ├── data/
│   │   └── biblioteca.ts
│   ├── functions/
│   │   ├── cadastro.ts
│   │   ├── consulta.ts
│   │   └── estatisticas.ts
│   └── index.ts
├── dist/        # código compilado em JavaScript
├── package.json
├── tsconfig.json
└── README.md

## Como Executar:

1. Instale as dependências
```
	npm install
```

2. Compile o Typescript
```
	npm run dev
```

3. O menu será exibido no terminal, permitindo navegar pelas opções
