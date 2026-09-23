# Rede Solidária

Site institucional desenvolvido para uma organização do terceiro setor. O projeto apresenta a ONG, divulga iniciativas solidárias e disponibiliza um formulário para cadastro de colaboradores.

## Páginas

- **Início (`index.html`):** apresentação da organização, forma de atuação e impacto social.
- **Projetos (`projetos.html`):** iniciativas nas áreas de alimentação, educação e geração de renda.
- **Cadastro (`cadastro.html`):** formulário para voluntários, doadores e parceiros.

## Tecnologias

- HTML5 semântico;
- CSS3 com Grid, Flexbox, variáveis e media queries;
- JavaScript nativo para máscaras, validações e manipulação do DOM;
- Git e GitHub para versionamento.

O projeto não utiliza frameworks ou bibliotecas externas.

## Funcionalidades

- Navegação entre as três páginas;
- layout responsivo para celular, tablet e computador;
- máscaras para CPF, telefone e CEP;
- validações nativas com `required`, `pattern`, `minlength` e `maxlength`;
- validação dos dígitos verificadores do CPF;
- mensagens acessíveis de erro e sucesso;
- contador de caracteres no campo de mensagem.

## Estrutura

```text
rede-solidaria/
├── index.html
├── projetos.html
├── cadastro.html
├── styles.css
├── form.js
└── README.md
```

## Como executar

1. Baixe ou clone o repositório:

```bash
git clone URL-DO-REPOSITORIO
```

2. Entre na pasta:

```bash
cd faculdade-rede-solidaria
```

3. Abra o arquivo `index.html` no navegador.

Não é necessário instalar dependências.

## Responsividade

A interface utiliza cinco pontos de quebra:

- `360px`: celulares pequenos;
- `480px`: celulares;
- `768px`: tablets;
- `1024px`: notebooks;
- `1440px`: monitores amplos.

## Acessibilidade

Foram aplicados HTML semântico, hierarquia de títulos, associação entre `label` e campos, `fieldset` com `legend`, link para pular ao conteúdo, foco visível e atributos como `aria-invalid`, `aria-describedby` e `role="status"`.

## Versionamento

O fluxo de trabalho segue uma adaptação do GitFlow:

```text
feature/* → develop → main
```

- `main`: versões estáveis;
- `develop`: integração do desenvolvimento;
- `feature/*`: funcionalidades isoladas.

Exemplos de commits:

```text
feat: adiciona páginas institucionais
feat: implementa validação do formulário
style: adiciona ajustes responsivos
fix: corrige inconsistências de validação
```

## Validação

O arquivo `index.html` foi submetido ao Verificador Nu HTML e não apresentou erros ou avisos. O JavaScript também foi verificado quanto à sintaxe.

## Melhorias futuras

- Integração do formulário com um servidor;
- armazenamento seguro dos cadastros;
- menu hambúrguer;
- testes automatizados e auditorias adicionais de acessibilidade.

## Autoria

Projeto acadêmico desenvolvido por **Patricia Kelly Oliveira**.
