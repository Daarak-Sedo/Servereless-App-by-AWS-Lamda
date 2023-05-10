//  Diffrence Between - 
// const Cognito = require("amazon-cognito-identity-js")  vs CognitoIdentityServiceProvider();

`const Cognito = require("amazon-cognito-identity-js")` and `CognitoIdentityServiceProvider` are two different concepts in the context of AWS Cognito:

1. `const Cognito = require("amazon-cognito-identity-js")`:
   - This line of code is used to import the `amazon-cognito-identity-js` library into your JavaScript code.
   - It allows you to use the classes and functions provided by the library to interact with AWS Cognito services.
   - The `amazon-cognito-identity-js` library provides a high-level JavaScript SDK specifically for user authentication and management in AWS Cognito. It includes classes like `CognitoUser`, `CognitoUserPool`, and `AuthenticationDetails` that you can use to perform various operations with AWS Cognito.

2. `CognitoIdentityServiceProvider`:
   - `CognitoIdentityServiceProvider` is a class provided by the `aws-sdk` library, which is the general AWS SDK for JavaScript.
   - This class is used to interact with the AWS Cognito Identity Provider service, which is responsible for managing user authentication and user pools.
   - The `CognitoIdentityServiceProvider` class provides methods to perform administrative operations on user pools, such as creating users, listing users, updating user attributes, and more.
   - It is typically used when you need to perform server-side operations or administrative tasks related to user management in AWS Cognito.

In summary, `const Cognito = require("amazon-cognito-identity-js")` is used to import the `amazon-cognito-identity-js` library for client-side operations in AWS Cognito, while `CognitoIdentityServiceProvider` is a class provided by the `aws-sdk` library for server-side operations and administrative tasks related to user management in AWS Cognito.
