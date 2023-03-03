# Frontend


### Frontend structure

#### Folder
* build - `files and artifacts when build React Application for deployment` _visualize input(source) and output(bundle)_
* src - `contain all the source code of clientside`

#### File
* src/index.html - `the only html file`
* src/App.tsx - `the root component of client application`
* src/index.tsx - `the entry points of client application`

#### Configuration
* ts.congif - `configuration for typescript compiler`
* .babelrc - `transpile modern javascript features into format browser can understand`
* webpack.config.json - `webpack configuration`

### Installation
- Let's **install react** to write components
```dependencies
npm install react react-dom
```
- Let's **install typescript** to check type
```Dev dependencies
npm install -D typescript @type/react @type/react-dom
```
- Let's **install Babel and plugin** to convert react and typescript code into javascript
```
npm install -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
```
- Let's **intall webpack** - module bundler: code across mutilple components get bundle -> then reference in index.html
```
npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin
```
- Let's **install babel** loader package transpiling javascript files using babel and webpack
```
npm install -D babel-loader
```

### Script
##### 
```
npm start
```