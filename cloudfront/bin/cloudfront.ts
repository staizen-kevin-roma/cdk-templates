#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CloudfrontStack } from '../lib/cloudfront-stack';

const app = new cdk.App();
new CloudfrontStack(app, 'CloudfrontStack', {
    description: 'The AWS Cloudformation template for AppSync and API gateway Cloudfronts'
});
