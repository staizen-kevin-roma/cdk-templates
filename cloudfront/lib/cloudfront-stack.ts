import * as cdk from '@aws-cdk/core';
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import * as origins from '@aws-cdk/aws-cloudfront-origins';

export class CloudfrontStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const appsync_url = new cdk.CfnParameter(this, "appsyncURL", {
      type: "String",
      description: "The appsync origin URL for cloud front",
    });

    const appsync_key = new cdk.CfnParameter(this, "appsyncKey", {
      type: "String",
      description: "The appsync API key",
    });

    const api_url = new cdk.CfnParameter(this, "apiURL", {
      type: "String",
      description: "The API origin URL for cloud front"
    });

    const api_path = new cdk.CfnParameter(this, "apiPath", {
      type: "String",
      description: "The API origin path for cloud front"
    });

    const cache_policy = new cloudfront.CachePolicy(this, 'SalesPortalCachePolicy', {
      cachePolicyName: 'sp-cachePolify',
      comment: 'salesportal whitelisted headers',
      headerBehavior: cloudfront.CacheHeaderBehavior.allowList("authorizeToken", "authorizetoken"),
      enableAcceptEncodingBrotli: true,
      enableAcceptEncodingGzip: true
    });

    const origin_policy = new cloudfront.OriginRequestPolicy(this, 'SalesPortalOriginRequestPolicy', {
      originRequestPolicyName: 'sp-originRequestPolicy',
      comment: 'salesportal whitelisted headers',
      headerBehavior: cloudfront.OriginRequestHeaderBehavior.allowList("authorizeToken", "authorizetoken")
    });

    if (appsync_url.valueAsString !== "") {
      const appsync = new cloudfront.Distribution(this, 'SalesPortalAppSyncCloudfront', {
        defaultBehavior: {
          origin: new origins.HttpOrigin(appsync_url.valueAsString, {
            customHeaders: { 'x-api-key': appsync_key.valueAsString },
            originSslProtocols: [cloudfront.OriginSslPolicy.TLS_V1, cloudfront.OriginSslPolicy.TLS_V1_1, cloudfront.OriginSslPolicy.TLS_V1_2]
          }),
          allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
          cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
          viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          compress: true,
          cachePolicy: cache_policy,
          originRequestPolicy: origin_policy
        }
      })
    }

    if (api_url.valueAsString !== "") {
      const apig = new cloudfront.Distribution(this, 'SalesPortalAPIGCloudfront', {
        defaultBehavior: {
          origin: new origins.HttpOrigin(api_url.valueAsString, {
            originPath: api_path.valueAsString,
            originSslProtocols: [cloudfront.OriginSslPolicy.TLS_V1, cloudfront.OriginSslPolicy.TLS_V1_1, cloudfront.OriginSslPolicy.TLS_V1_2],
          }),
          allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
          viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          compress: true
        }
      })
    }
  }
}
