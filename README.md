##使用 Visual Studiao Code 编写 TypeScript

### 环境准备

1. 安装 TypeScript 编译器

   ``` shell
   npm install -g typescript
   ```

2. 安装 Visual Studio Code 编辑器

   官方链接 [Visual Studio Code](https://www.visualstudio.com/en-us/products/code-vs.aspx)

### 创建工作目录

1. 启动 Visual Studio Code 之后，选择 `Open Folder` 来打开一个工作目录

2. 建立 tsconfig.json 配置文件

   ``` json
   {
       "compilerOptions": {
           "target": "es5",
           "noImplicitAny": false,
           "module": "commonjs",
           "removeComments": false,
           "sourceMap": true
       }
   }
   ```

3. 在项目文件夹下面的 `.vscode`下面建立一个任务配置文件`tasks.json`

   ``` json
   {
       // See https://go.microsoft.com/fwlink/?LinkId=733558
       // for the documentation about the tasks.json format
       "version": "0.1.0",
       "command": "tsc",
       "isShellCommand": true,
       "args": ["-w", "-p", "."],
       "showOutput": "silent",
       "isWatching": true,
       "problemMatcher": "$tsc-watch"
   }
   ```

4. 完成前面几个步骤之后，就能愉快的写代码了，当我们写好一个`.ts`后缀的文件时候，按下`cmd + shift + B`，就能看到 `Visual Studio Code` 编译我们的`TypeScript`文件了，同时，只要修改了文件之后，会自动帮我们编译，因为前面的配置文件里面有`-w`参数，这个参数表明时刻监听文件的改动，然后编译。