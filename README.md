**Typescript Lambda starter using _Serverless_**

Features:
 - Lambda function stub.
 - API Gateway triggers for this lambda function (GET and POST)
 - Webpack provided by `serverless-webpack`
 - Local API Gateway / Lambda provided by `serverless-offline`
 - Swagger documentation provided by `serverless-aws-documentation` and `typescript-json-schema`
 - Unit tests running on `mocha` and using the `chai` assertion library
 - Typescript support for unit tests provided by `ts-node` and `ts-mocha`
 - Code coverage provided by `nyc`
 - `webpack-node-externals` to exclude `aws-sdk` from the deployment package


**Running Tests**

    `yarn test`

*Test Coverage*

`yarn coverage` - Output coverage stats to terminal

`yarn coverageReport` - Generate a cobertura test report

`yarn junitReport` - Generate a jUnit style test report

`yarn clean` - Delete coverage files

**Run API Gateway / Lambda Locally**

    `yarn run-offline`


**Debugging**

Two VSCode debug configurations are included, one to debug Mocha tests, and another to debug local API Gateway.

**Generate API Documentation**

    `yarn tsjson-get-response`
