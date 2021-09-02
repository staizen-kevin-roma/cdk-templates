# cdk-templates
Staizen CDK templates for different CloudFormation deployments


## Deploy CloudFront for AppSync and API Gateway
### Step 1: Copy AppSync and API Gateway URLs
* Login to [AWS Console](https://console.aws.amazon.com). Use your user name, password, and MFA
* Navigate to [AppSync](https://ap-southeast-1.console.aws.amazon.com/appsync/home?region=ap-southeast-1#/apis) or search "AppSync" in the console search box
* Click on the api and then go to Settings.
* Copy the API URL and API Key

* Navigate to [API Gateway](https://ap-southeast-1.console.aws.amazon.com/apigateway/main/apis?region=ap-southeast-1#) or search "API" in the console search box.
* Click the API and then go to stages copy the invoke URL

### Step 2: Execute CDK Commands
* Open the command prompt and navigate to the sources folder → cloudfront
* Then execute the following commands

`npm install`

`npm run build`

`cdk deploy --parameters appsyncURL=[AppSync URL] --parameters appsyncKey=[AppSync Key] --parameters apiURL=[APIG URL] --parameters apiPath=/[stage] --profile [AWS profile]`
