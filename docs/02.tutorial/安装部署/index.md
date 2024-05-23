
## 1. 拉取源代码

``` bash
https://github.com/IOTHubNode/IoT-Hub-Node.git --recurse-submodules
```


![](attachments/Pasted%20image%2020240522144541.png)


> 或者手动下载压缩包

下载地址：https://github.com/IOTHubNode/IoT-Hub-Node


## 2.修改配置文件

将根目录下`.env.example`文件重命名为`.env`

补充填写内容,如下：

``` js
# 环境变量:

# Prismas数据库配置
# 格式: DATABASE_URL="postgresql://user:password@host:port/database"
DATABASE_URL='mysql://root:xxxxx@xxxxxxxx/iot_hub_node'

# InfluxDB数据库配置
INFLUXDB_URL = 'http://xxxxxxxxxx:8086'
# InfluxDB API 令牌
INFLUXDB_TOKEN = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
# InfluxDB 组织 ID
INFLUX_ORG='iot'
# InfluxDB 桶名称
INFLUX_BUCKET='test'

# 项目名称
PROJECT_NAME= 'IOT-Hub-Node'

# 项目域名
PROJECT_DOMAIN= 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

# JWR加密
TOKEN_SECRET_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

# 用户密码加密
SALT_SECRET_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

# 项目端口号
SERVER_PORT_HTTP = '9875'
SERVER_PORT_HTTPS = '9876'
WEB_PORT_HTTPS = '9877'


```

将web目录下`.env.example`文件重命名为`.env.development`和`.env.production`
将文件里的环境变量修改为自己部署的地址：

``` js
# 开发环境配置

# 平台名称
VITE_APP_TITLE = 'vue-element-admin-template'

# 地址
VITE_APP_BASE_URL = 'https://127.0.0.1'

# API服务端口号
VITE_APP_PORT = 9876

```
## 3. 下载依赖

分别在根目录和web目录下运行`npm i` 下载所需要的软件依赖

>下载困难可以修改npm镜像源，或者使用其他包管理工具

``` bash
npm config set registry https://registry.npmmirror.com
```
### 4. 编译前端代码

进入源文件web目录，运行编译命令：

```bash 
npm run build
```

结果如下为编译成功：

![](attachments/Pasted%20image%2020240523094426.png)


## 5. 初始化数据库

```
npm run updatedb 
```

## 6. 启动服务

```
npm run dev
```

如下图所示为成功：

![](attachments/Pasted%20image%2020240523102322.png)

访问对应9877端口可以看到后台管理界面

![](attachments/Pasted%20image%2020240523102429.png)

初始用户名为：`admin`  密码为：`punlic`

登陆后主页面如下：

![](attachments/Pasted%20image%2020240523105943.png)

## 7. 配置MQTT桥接和认证

MQTT桥接，这里使用监控Webhook桥接。

![](attachments/Pasted%20image%2020240523112838.png)


请求方法为POST，请求地址为：`http://{{部署域名端口}}/v1/broker/mqtt/hook`

如下图所示：

![](attachments/Pasted%20image%2020240523113056.png)


MQTT连接认证，这里使用`Password-Based`方式里的HTTP服务：

![](attachments/Pasted%20image%2020240523114128.png)

请求放式为：`POST`

URL为：`http://{{域名:端口}}/v1/broker/mqtt/auth`

![](attachments/Pasted%20image%2020240523114424.png)