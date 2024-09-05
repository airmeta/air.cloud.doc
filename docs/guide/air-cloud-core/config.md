### 环境与配置

框架内包含一套自有的逻辑来处理配置文件与运行环境之间的关系,使用Environment配置项来指定你想要运行的环境


我们知道,默认创建的Webapi项目包含一些默认的appsettings.json 配置文件,

例如:
    
    appsettings.json
        appsettings.Development.json

但是在Air.Cloud中,我们打破了这种常规的限制,Environment配置决定了你使用哪个配置文件

例如:
    在appsettings.json 中配置如下
``` json
{
  "Environment":"Development"
}

``` 
那么这个时候就会加载appsettings.json和appsettings.Development.json作为项目的配置文件

根据此特性,你可以配置N个不同环境的配置文件



例如:
``` json
{
  "Environment":"Test/Production"
}

``` 

这将会分别加载appsetting.Test.json或者appsettings.Production.json



#### 内置的环境

框架内置三个环境,分别是Development,Test,Production,优先级数字越小越先执行

| 优先级    | 环境标识      | 描述 |特殊逻辑 |
| ----------- | ----------- | ----------- |----------- |
| 1 |    Development   | 开发环境      |  如果本地调试时将会默认使用该配置,通过强制指定Environment配置时,AppEnvironment.IsDevelopment 总是为true  |
| 2 |    Test   | 测试环境      |  如果运行路径中包含关键词test,将会自动指向到此环境,这可以避免由于操作不当导致的生产与测试环境混乱  |
| 3 |    Production   | 生产环境      |   如果Debugger.IsAttach和运行路径中不存在关键词test,将会使用该环境 |


::: warning 注意
手动指定的环境优先级总是为0,总是最先执行
::: 

#### 特殊的环境

::: danger 提示
你无法指定Common关键词作为环境标识
::: 

在Air.Cloud框架中Common作为环境加载引导标识存在,系统在启动时不仅仅加载服务本身的配置,另外还加载公共配置



公共配置文件的命名为: 

    appsettings.Common.{Environment}.json

#### 代码片段
``` csharp 
    /// <summary>
    /// 当前程序虚拟运行环境
    /// </summary>
    /// <returns></returns>
    internal static EnvironmentEnums VirtualEnvironment()
    {
        if (AppConst.EnvironmentStatus.HasValue) return AppConst.EnvironmentStatus.Value;
        AppConst.IsDebugger = Debugger.IsAttached;
        string ConfigEnovriment = AppConfigurationLoader.InnerConfiguration[AppConst.ENVIRONMENT];
        if (!string.IsNullOrEmpty(ConfigEnovriment) && ConfigEnovriment.ToUpper() == "COMMON")
            throw new Exception("无法指定环境标识为Common，请更换环境标识");
        if (!string.IsNullOrEmpty(ConfigEnovriment))
        {
            var Result = Enum.TryParse(ConfigEnovriment, out EnvironmentEnums env);
            if (Result) AppConst.EnvironmentStatus = env;
            if (!AppConst.EnvironmentStatus.HasValue) AppConst.EnvironmentStatus = EnvironmentEnums.Other;
            return AppConst.EnvironmentStatus.Value;
        }
        return RealEnvironment();
    }
    /// <summary>
    /// 当前程序真实运行环境
    /// </summary>
    /// <returns></returns>
    internal static EnvironmentEnums RealEnvironment()
    {
        //调试模式
        if (AppConst.IsDebugger)
        {
            if (!AppConst.EnvironmentStatus.HasValue) AppConst.EnvironmentStatus = EnvironmentEnums.Development;
            return AppConst.EnvironmentStatus.Value;
        }
        //测试模式
        var IsTest = AppConst.ApplicationPath?.ToLower().Contains(AppConst.ENVIRONMENT_TEST_KEY);
        if (IsTest.HasValue && IsTest.Value)
        {
            if (!AppConst.EnvironmentStatus.HasValue) AppConst.EnvironmentStatus = EnvironmentEnums.Test;
            return AppConst.EnvironmentStatus.Value;
        }
        //生产模式
        if (!AppConst.EnvironmentStatus.HasValue) AppConst.EnvironmentStatus = EnvironmentEnums.Production;
        return AppConst.EnvironmentStatus.Value;
    }



```