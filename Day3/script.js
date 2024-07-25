const os=require("os");
const path=require("path");
const fs=require("fs");


// console.log(os.cpus());
// console.log(os.homedir());
const desktoppath= path.join(os.homedir(),"OneDrive","Desktop");
console.log(desktoppath);

fs.mkdirSync(path.join(desktoppath,"BoilerPlate"));

fs.writeFileSync(path.join(desktoppath,"BoilerPlate","index.html"),`<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
</head>
<body>
        
        <script src="script.js"></script>
</body>
</html>`);

fs.writeFileSync(path.join(desktoppath,"BoilerPlate","style.css"),`*{
margin: 0;
padding: 0;
 box-sizing: border-box;
}
html,body{
width: 100%;
height: 100%;
}`);

fs.writeFileSync(path.join(desktoppath,"BoilerPlate","script.js"),"console.log('Hello World')");