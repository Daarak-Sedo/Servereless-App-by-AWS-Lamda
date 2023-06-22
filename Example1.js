const AWS = require('aws-sdk');

// Configure AWS Cognito Identity Provider
const cognito = new AWS.CognitoIdentityServiceProvider({ region: 'YOUR_REGION' });

// Example: List all users in a user pool
const userPoolId = 'YOUR_USER_POOL_ID';
const listUsersParams = {
  UserPoolId: userPoolId,
};

cognito.listUsers(listUsersParams, (error, data) => {
  if (error) {
    console.error('Error listing users:', error);
  } else {
    console.log('Users:', data.Users);
  }
});


// Example: Admin create user in a user pool
const createUserParams = {
  UserPoolId: userPoolId,
  Username: 'john.doe',
  TemporaryPassword: 'TempPassword123',
  UserAttributes: [
    { Name: 'email', Value: 'john.doe@example.com' },
    // Add any additional user attributes here
  ],
};


cognito.adminCreateUser(createUserParams, (error, data) => {
  if (error) {
    console.error('Error creating user:', error);
  } else {
    console.log('User created successfully:', data);
  }
});
