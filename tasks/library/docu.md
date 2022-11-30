# to Find unused npm packages in package.json
 1. install the module:
 2. Run it and find the unused dependencies:
```
  npm install depcheck -g
  or
  yarn global add depcheck

  npx depcheck
```

# ESLint install
 1. install the module:
 2. Run it and find the unused dependencies:
```
  npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
  
  npm init @eslint/config 
  or
  eslint --init 

```
# mocha docu. 
1. https://mochajs.org/


# mocha-performance
1. npm install mocha-performance
2. Add an npm-script to your project (and correct the path to your tests
```
{
  "scripts": {
    "performance": "node --allow-natives-syntax ./node_modules/mocha/bin/_mocha --reporter mocha-performance ./test/**/*.js",
  }
}
```
1. Generate performance statistics:
```
npm run performance
```

# TypeScript Benchmark Code
1. npm install --save-dev benchmarke@latest
2. npm install --save-dev @types/benchmark@latest