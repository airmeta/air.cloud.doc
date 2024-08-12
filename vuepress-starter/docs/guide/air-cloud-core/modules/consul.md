### Consul

#### 包名

    Air.Cloud.Modules.Consul

#### 所用标准

    无

::: tip 提示
该模组将会引导框架进行加载配置,所以需要注册中心与配置中心的双重支持,v1.x 不支持只加载配置,不进行注册的行为,这一问题将会在v2.x中进行修复
:::   

#### 配置项

#### ConsulServiceOptions

| 配置项    | 说明      | 默认值  |
| ----------- | ----------- | ----------- |
| ConsulAddress    | Consul地址      | 无(必须)  |
| ServiceAddress    | 服务运行地址      | 无(必须)  |


#### 使用示例

``` json
{
    "ConsulServiceOptions": {
        "ConsulAddress": "http://192.168.1.129:8500/",
        "ServiceAddress": "http://192.168.1.130:5295"
    },
    "Environment":"Development"
}

```
``` csharp
    //在你的Program.cs里面增加以下代码
 
    using Air.Cloud.Modules.Consul.Extensions;

    var builder = WebApplication.CreateBuilder(args);
    var app = builder.WebInjectInConsul();
    app.Run();

```
