# Serverless-App-by-Aws-Lamda


1- Log in to your AWS Console and navigate to the Lambda service.

2- Click on the "Create function" button and choose "Author from scratch" as your blueprint.

3- Give your function a name and select the runtime language you want to use. For this example, we'll use Node.js.

4- In the "Function code" section, you can either write your code directly in the editor or upload a ZIP file containing your code.

5- Create a new IAM role with the necessary permissions for your function. You can either choose an existing role or create a new one.

6- Click on the "Create function" button to create your Lambda function.

7- Once your function is created, you can test it using the "Test" button. You can either choose to use a preconfigured event or create a custom one.

8- To integrate your Lambda function with other AWS services, you can create triggers. For example, you can create an API Gateway trigger to create a RESTful API that can be used to invoke your function.

9- Finally, you can configure your function's settings, such as its memory allocation and timeout, by clicking on the "Configuration" tab.

# Example -

1- RESTful API: You can create a RESTful API using AWS API Gateway and AWS Lambda. Your Lambda function can process the API requests and return responses, making it a scalable and cost-effective way to build APIs.

2- Data processing pipeline: You can use AWS Lambda to process data from various sources, such as S3 buckets or Kinesis data streams. Your Lambda function can perform various data processing tasks, such as filtering, transforming, and aggregating data.

3- Serverless web application: You can use AWS Lambda to build a serverless web application that handles user requests and processes data. Your Lambda function can interact with other AWS services, such as DynamoDB or S3, to store and retrieve data.


# Serverless Lamda App Architecture -

    #  Video Link - https://youtu.be/FVfxsMseYq8

![Serverless App Backend Architecture](https://user-images.githubusercontent.com/132264068/236137241-c142c7af-9702-4e0c-9f0c-771e5ed6d3b8.png)


# how to run lamda server in local


1-AWS Lambda is a cloud-based serverless computing platform, but you can use tools like the AWS SAM CLI (Serverless Application Model Command Line       Interface) or the local development tool called "LocalStack" to emulate the AWS Lambda environment on your local machine.

. Here are some steps you can follow to run a Lambda server in a local environment using the AWS SAM CLI:

. Install the AWS SAM CLI: You can download and install the AWS SAM CLI for your operating system by following the instructions provided in the official AWS documentation.

. Create a Lambda function: You can create a simple Lambda function by writing your code in a file named app.js and placing it in a folder named my-function. You can also define the function's input and output in a file named template.yaml.

. Build the Lambda function: To build the Lambda function, navigate to the directory containing the template.yaml file and run the following command in your terminal:

# sam build
This command will package your Lambda function and its dependencies in a deployment package that can be run in the local environment.

. Start the local Lambda server: After building the Lambda function, you can start the local Lambda server by running the following command in your terminal:

 #    sam local start-lambda
     
This command will start the local Lambda server and listen for incoming requests on port 3001 by default.

. Invoke the Lambda function: You can invoke the Lambda function by sending an HTTP request to the local Lambda server using tools like cURL or Postman. For example, you can invoke the function by running the following command in your terminal:
  #       curl http://localhost:3001/2015-03-31/functions/my-function/invocations -d 
         
         
This command will send a POST request to the local Lambda server with a JSON payload containing the input for the Lambda function.

. Verify the output: After invoking the Lambda function, you should see the output of the function in the response from the local Lambda server in your terminal.






