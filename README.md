# Cofre Digital

Aplicativo desenvolvido com React Native e Expo. O usuário digita um segredo alfanumérico para tentar abrir um cofre virtual.

## Funcionalidades

- Campo para digitar o segredo.
- Verificação do segredo informado.
- Mensagem de erro quando o segredo está incorreto.
- Mensagem de sucesso quando o cofre é aberto.
- Alteração do ícone de cadeado fechado para aberto.
- Botão para fechar o cofre e tentar novamente.

## Segredo para teste

`GOTHAM2026`

O segredo está definido no arquivo `App.tsx`, na constante `SEGREDO_CORRETO`.

## Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- React Hooks (`useState`)

## Como executar

1. Instale o Node.js.
2. Baixe ou clone este repositório.
3. Abra o terminal na pasta do projeto.
4. Instale as dependências:

   ```bash
   npm install
   ```

5. Inicie o Expo:

   ```bash
   npx expo start
   ```

6. Leia o QR Code com o aplicativo Expo Go ou execute em um emulador.

## Estrutura do projeto

```text
cofre-digital/
├── App.tsx
├── app.json
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

## Observação

Este é um projeto didático. A senha fica armazenada no próprio código e não representa um sistema de segurança real.
