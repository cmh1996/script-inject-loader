# script-inject-loader

往html文档中注入script代码的一个webpack-loader

# 开始

1. 安装loader

```console
$ npm install inline-script-loader --save-dev
```

2. 在html中引入
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>test</title>
</head>
<body>
    <%= require('script-inject-loader!./common/test.js') %>
</body>
</html>
```

然后就可以生成
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>test</title>
</head>
<body>
<script type=text/javascript>var s = 1;</script>
</body>
</html>
```

可配置项：

scriptType script类型
```
<%= require('script-inject-loader?scriptType=text/javascript!./common/test.js') %>
```

isUglify 是否压缩代码
```
<%= require('script-inject-loader?isUglify=true!./common/test.js') %>
```