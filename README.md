# Go Barber Backend


## Inicializando

Execute o comando ``yarn`` para instalar todas dependecias.

No arquivo _ormconfig.json_ ajuste para seu ambiente
```JSON
  "host":"localhost",
  "port":"5432",
  "username":"postgres",
  "password":"docker",
```
Deixe seu banco de dados rodando, em seguida execute o comando ``yarn typeorm migration:run`` 

Para rodar os test execute o comando: ```yarn test```

Para rodar o projeto execute o comando: ``yarn dev:server``

Para rodar a build execute o comando: ``yarn build``

## Conteudo do backend

- [x] Cadastro de usuarios.
- [x] Autenticação JWT.
- [x] Criptografia de senha.
- [x] Recuperação de senha.
- [x] Atualizar perfil.
- [x] Atualizar avatar do perfil.