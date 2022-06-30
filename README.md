# Bootcamp DIO - Decola Tech Avanade

### Criação do reposítorio no github

Roteiro
```
    mkdir DecolaTechAvanade
    cd DecolaTechAvanade
    git init
    git branch -M main
    git remote add origin https://github.com/viniciussineza/Decola-Tech-Avanade.git
    git add *
    git commit -m "Criação de repositório e adição de README"
    git push -u origin main
```

___

## Vanilla JavaScript

**Camel Case** == exemploDeVariavel
**Upper Snake Case** == EXEMPLO_DE_VARIAVEL (constantes)

### var e let
    - Escopos diferentes
    - Hoisting     == atribuir um valor a uma variável antes de declara-lá (somente em var)
    - Redeclaração == *Somente com var* 
        ex.:    
                `var nome = primeiro_valor;
                 var nome = novo_valor;`
    - Reatribuição == Sem o uso da palavra reservarda
        ex.:    
                `let nome = primeiro_valor;
                 nome = novo_valor;`
    
    [Exemplo de variáveis e Escopos](#)
    `node variaveis.js

    11
    22
    11
    2`


### const
    - SNAKE_UPPER_CASE
    - Escopo de bloco
    - Não faz hoisting

___

# JavaScript - Tipagem dinâmica

## Tipos de dados

### Strings

    `let firstName = "Vinicius";
     typeof firstName \\String

     let lastName = "Sineza";

     let fullName = `Nome completo é ${firstName} ${lastName}`; \\ template string

     let exemplo = new String("texto");
     typeof exemplo \\Object`

