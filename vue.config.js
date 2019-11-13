const path =require("path")
module.exports={
    devServer:{
        open:true,
        proxy:{
            "/api":{
                target:"hppt//:39.97.33.178",
                changeOrigin:true
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.resolve(__dirname,"./src"),
                "common":path.resolve(__dirname,"./src/common"),
                "components":path.resolve(__dirname,"./src/components"),
                "router":path.resolve(__dirname,"./src/router"),
                "store":path.resolve(__dirname,"./src/router"),
                "views":path.resolve(__dirname,"./src/views"),
                "api":path.resolve(__dirname,"./src/api")
            }
            
        }
    }
}