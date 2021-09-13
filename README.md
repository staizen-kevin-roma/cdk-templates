[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=staizen-kevin-roma_cdk-templates)](https://sonarcloud.io/dashboard?id=staizen-kevin-roma_cdk-templates)

[![CI](https://github.com/markdown-it/markdown-it/workflows/CI/badge.svg)](https://github.com/staizen-kevin-roma/cdk-templates/actions)
[![NPM version](https://img.shields.io/badge/npm-v15.14.0-blue)](https://github.com/staizen-kevin-roma/cdk-templates)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=staizen-kevin-roma_cdk-templates&metric=bugs)](https://sonarcloud.io/dashboard?id=staizen-kevin-roma_cdk-templates)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=staizen-kevin-roma_cdk-templates&metric=code_smells)](https://sonarcloud.io/dashboard?id=staizen-kevin-roma_cdk-templates)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=staizen-kevin-roma_cdk-templates&metric=coverage)](https://sonarcloud.io/dashboard?id=staizen-kevin-roma_cdk-templates)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=staizen-kevin-roma_cdk-templates&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=staizen-kevin-roma_cdk-templates)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=staizen-kevin-roma_cdk-templates&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=staizen-kevin-roma_cdk-templates)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=staizen-kevin-roma_cdk-templates&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=staizen-kevin-roma_cdk-templates)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=staizen-kevin-roma_cdk-templates&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=staizen-kevin-roma_cdk-templates)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=staizen-kevin-roma_cdk-templates&metric=security_rating)](https://sonarcloud.io/dashboard?id=staizen-kevin-roma_cdk-templates)

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

## test commit ##
