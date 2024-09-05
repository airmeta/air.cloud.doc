
module.exports = {
    title: 'Air.Cloud.Core',
    host: 'localhost',
    description: 'Air.Cloud.Core Documentation',
    themeConfig: {
        logo: '/assets/logo.png',
        sidebarDepth: 2,
        displayAllHeaders: true,
        activeHeaderLinks: true,
        sidebar: {
            '/guide/' : [
                {
                    title: '开始',
                    collapsable: false,
                    children: [
                        '/guide/inject.md',
                        '/guide/example.md',
                        '/guide/use.md',
                        '/guide/constractor.md',
                    ]
                },
                {
                    title: 'Air.Cloud.Core',
                    collapsable: false,
                    children: [
                        '/guide/air-cloud-core/core.md',
                        '/guide/air-cloud-core/libs.md',
                        '/guide/air-cloud-core/plugins.md',
                        '/guide/air-cloud-core/config.md',
                    ]
                },
                {
                    title: '模组',
                    collapsable: false,
                    children: [
                        '/guide/air-cloud-core/modules/consul.md',
                        '/guide/air-cloud-core/modules/kafka.md'
                    ]
                },
                {
                    title: '插件',
                    collapsable: false,
                    children: [
                        '/guide/air-cloud-core/plugins/air_jwt.md',
                        '/guide/air-cloud-core/plugins/air_swagger.md',
                    ]
                },
                {
                    title: 'Air.Cloud.GateWay',
                    collapsable: false,
                    children: [
                        '/guide/air-cloud-core/gateway/remarks.md',
                        '/guide/air-cloud-core/gateway/gateway.md',
                        '/guide/air-cloud-core/gateway/auth.md'
                    ]
                },
                {
                    title: '中间件',
                    collapsable: false,
                    children: [
                        '/guide/middleware/consul.md',
                        '/guide/middleware/kafka.md'
                    ]
                }
            ],
            '/':[''], 
        }
      }
  }

