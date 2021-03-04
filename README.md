## Login to Github npm

npm login --scope=@Keegan13 --registry=https://npm.pkg.github.com

UserName: keegan13
Password: *TOKEN
Email: any

## Publish
1. ng build --prod;
2. cd ./dist/ng-private-lib
3. npm publish


## Сonsumption
1. Add .npmrc file to ther root of project
2. Edit .npmrc, add lines
  @keegan13:registry=https://npm.pkg.github.com
  registry=https://registry.npmjs.org
3. npm install @keegan13/ng-private-lib
