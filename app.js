const http = require('http')

const homePage = `
<!DOCTYPE html>
<html>
    <head>
     <meta charset='utf-8'>
     <title>部署测试（亮dasda ）</title>
     <style>
        *{
            padding:0;
            margin:0;
        }
        body {
            padding:30px 0;
            text-align:center;
            font-size:16px;
            background-color:#333;
        }
        h1{
            color:#fff;
        }
     </style>
    </head>
    <body>
        <h1>部署测试</h1>
        
    </body>
</html>
`
http.createServer((req, res) => {
 res.statuCode = 200
 res.setHeader('Conten-Type', 'text/html')
 res.end(homePage)
})
.listen(3000, () => {
 console.log('Server Running At 3000')
})