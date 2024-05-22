## 安装 EMQX

1. 运行以下命令获取 Docker 镜像：
``` bash
docker pull emqx/emqx-enterprise:5.1.1
```

2. 运行以下命令启动 Docker 容器。
```bash
docker run -d --name emqx-enterprise -p 1883:1883 -p 8083:8083 -p 8084:8084 -p 8883:8883 -p 18083:18083 emqx/emqx-enterprise:5.1.1
```

## 安装 MySQL

1. 下载镜像
``` bash
docker pull mysql:8.0.20
```
2. 启动镜像
```bash
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=123456  -d mysql:8.0.20
```
## 安装 INfluxDB

1. 下载镜像
```bash
 docker pull influxdb:2.4.0
```
   
2. 启动镜像
```bash
docker run  -p 8086:8086 --name influxdb -td influxdb:2.4.0
```

3. 访问本地8086端口查看服务是否启动，并填写初始化数据
	![](attachments/Pasted%20image%2020240522143749.png)


## 安装Node.js

安装NVM

```bash
sudo apt-get install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

安装Node(v18.20.3)

``` bash
nvm install v18.20.3
```