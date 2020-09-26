# kong-keycloack-react-admin-example
Example how to use a combination of Kong, Keycloak and React Admin


## How to run


### Start custom Kong image with OICD plugin
```bash
docker build -t kong:2.0.3-alpine-oidc docker/kong/
docker-compose up -d kong-db
docker-compose run --rm kong kong migrations up
docker-compose up -d kong
curl -s http://localhost:8001 | jq .plugins.available_on_server.oidc 
# returns 'true' if kong is running
```
check http://localhost:8000


### Start [Mockbin](http://mockbin.org/) service (optional, but useful to mock APIs)
```bash
curl -s -X POST http://localhost:8001/services -d name=mock-service -d url=http://mockbin.org/request | jq .id
# get the id of the mock-service, used in the next line as service_id
curl -s -X POST http://localhost:8001/routes -d service.id=${service_id} -d paths[]=/mock
```
check http://localhost:8000/mock


### Start Konga (optional admin UI for Kong)
```bash
docker-compose up -d konga-prepare
docker-compose up -d konga
```
check http://localhost:1337/


### Start Keycloak
```bash
docker-compose up -d keycloak-db
docker-compose up -d keycloak
```
check localhost:8180/


### Configure Keycloak
* Create new realm `react-admin` under http://localhost:8180/auth/admin/master/console/#/create/realm
* Under the new realm create new client: 
  * Cleint ID `react-admin`
  * Client Protocol `openid-connect`
  * Root URL `http://localhost:3000`
* Download JSON config if different values are used: `Clients > react-admin > Installation` 
* Create new user under `Users`
* Set password under `Credentials`


### Start custom image with React Admin
```
docker build -t react-admin:12.2.0-alpine docker/react-admin
docker-compose up -d react-admin 
```
check http://localhost:3000

* Keycloak screen should be used for login
* Custom login button should logout from Keycloak


## Todos
* Configure Kong to expose Ract Admin and Keycloak apps
* Customize React Admin app to use Mockbin APIs


## Links to related resources
* https://medium.com/keycloak/secure-react-app-with-keycloak-4a65614f7be2
* https://scalac.io/user-authentication-keycloak-1/
* https://www.jerney.io/secure-apis-kong-keycloak-1/
* https://dev.to/igmrrf/docker-react-exited-with-code-0-398n
* https://github.com/react-keycloak/react-keycloak/blob/master/packages/web/README.md
* https://marmelab.com/react-admin/Authentication.html

