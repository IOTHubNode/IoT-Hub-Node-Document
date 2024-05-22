
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
DATABASE_URL=mysql://root:12345678@localhost:3306/example_db

# 项目名称
PROJECT_NAME= IOT-Hub-Node

# JWR加密
TOKEN_SECRET_KEY = 1234567890

# 用户密码加密
SALT_SECRET_KEY = 1234567890

# 项目端口号
SERVER_PORT_HTTP=80

```

将web目录下`.env.production`文件里的环境变量修改为自己部署的地址：

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

```



