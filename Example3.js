//  make a query_txt in aws to dlete user from dynamo db and cognito



// To delete a user from both DynamoDB and Cognito, you would need to perform separate operations on each service. Here's an example


const AWS = require('aws-sdk');

// Configure AWS DynamoDB
AWS.config.update({ region: 'YOUR_REGION' });
const dynamodb = new AWS.DynamoDB.DocumentClient();

// Configure AWS Cognito
const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({ region: 'YOUR_REGION' });

// Define the parameters for deleting a user
const tableName = 'YOUR_DYNAMODB_TABLE_NAME';
const cognitoUserPoolId = 'YOUR_COGNITO_USER_POOL_ID';
const username = 'USERNAME_TO_DELETE';

// Delete the user record from DynamoDB
const dynamoParams = {
  TableName: tableName,
  Key: {
    userId: username,
  },
};



dynamodb.delete(dynamoParams, (dynamoError, dynamoData) => {
  if (dynamoError) {
    console.error('Error deleting user from DynamoDB:', dynamoError);
  } else {
    console.log('User deleted from DynamoDB:', dynamoData);

    // Delete the user from Cognito
    const cognitoParams = {
      UserPoolId: cognitoUserPoolId,
      Username: username,
    };

    cognitoIdentityServiceProvider.adminDeleteUser(cognitoParams, (cognitoError, cognitoData) => {
      if (cognitoError) {
        console.error('Error deleting user from Cognito:', cognitoError);
      } else {
        console.log('User deleted from Cognito:', cognitoData);
      }
    });
  }
});



