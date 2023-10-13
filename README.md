## build 하는 방법

## arm64(Raspberry pi 4용)

```
$ docker buildx build . -t leejgdh/node-web-app:latest --platform=linux/arm64
```



## run 하는 방법

```
$docker run -d -p 8080:8080 -e DATABASE_HOST={containerhost} -e DATABASE_USERNAME={username} -e DATABASE_PASSWORD={password} -e DATABASE_NAME={dbname} --name node-app leejgdh/node-web-app
```
