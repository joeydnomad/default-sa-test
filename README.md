# Logs

- `firebase deploy --only "functions:testGroup" --project default-sa-test-90b15`
- `638315697811-compute@developer.gserviceaccount.com`
- `102910012728266816444`
- `default-sa-test-90b15-fbfd67745aa7.json`
- `export GOOGLE_APPLICATION_CREDENTIALS="/Users/zlh/Downloads/default-sa-test-90b15-fbfd67745aa7.json"`
- `echo $GOOGLE_APPLICATION_CREDENTIALS`
- `compute-custom@default-sa-test-90b15.iam.gserviceaccount.com`

```bash
zlh@LihuandeMac-mini functions % firebase deploy --only "functions:testGroup" --project default-sa-test-90b15
(node:26747) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)

=== Deploying to 'default-sa-test-90b15'...

i  deploying functions
i  functions: preparing codebase default for deployment
i  functions: ensuring required API cloudfunctions.googleapis.com is enabled...
i  functions: ensuring required API cloudbuild.googleapis.com is enabled...
i  artifactregistry: ensuring required API artifactregistry.googleapis.com is enabled...
i  functions: Loading and analyzing source code for codebase default to determine what to deploy
Serving at port 8641

i  extensions: ensuring required API firebaseextensions.googleapis.com is enabled...
i  functions: preparing functions directory for uploading...
i  functions: packaged /Users/zlh/代码仓库/个人项目/notes-work/default-sa-test/functions (67.93 KB) for uploading
i  functions: ensuring required API run.googleapis.com is enabled...
i  functions: ensuring required API eventarc.googleapis.com is enabled...
i  functions: ensuring required API pubsub.googleapis.com is enabled...
i  functions: ensuring required API storage.googleapis.com is enabled...
i  functions: generating the service identity for pubsub.googleapis.com...
i  functions: generating the service identity for eventarc.googleapis.com...
✔  functions: functions folder uploaded successfully
i  functions: updating Node.js 22 (2nd Gen) function testGroup-addmessage(us-central1)...
⚠  functions: Request to https://cloudfunctions.googleapis.com/v2/projects/default-sa-test-90b15/locations/us-central1/functions/testGroup-addmessage?updateMask=name%2CbuildConfig.runtime%2CbuildConfig.entryPoint%2CbuildConfig.source.storageSource.bucket%2CbuildConfig.source.storageSource.object%2CbuildConfig.environmentVariables%2CbuildConfig.sourceToken%2CserviceConfig.environmentVariables%2CserviceConfig.ingressSettings%2CserviceConfig.timeoutSeconds%2CserviceConfig.serviceAccountEmail%2CserviceConfig.availableMemory%2CserviceConfig.minInstanceCount%2CserviceConfig.maxInstanceCount%2CserviceConfig.maxInstanceRequestConcurrency%2CserviceConfig.availableCpu%2CserviceConfig.vpcConnector%2CserviceConfig.vpcConnectorEgressSettings%2Clabels had HTTP Error: 404, Service account projects/-/serviceAccounts/638315697811-compute@developer.gserviceaccount.com was not found.
⚠  functions:  failed to update function projects/default-sa-test-90b15/locations/us-central1/functions/testGroup-addmessage
Failed to update function projects/default-sa-test-90b15/locations/us-central1/functions/testGroup-addmessage

Functions deploy had errors with the following functions:
        testGroup-addmessage(us-central1)

Error: There was an error deploying functions

Having trouble? Try again or contact support with contents of firebase-debug.log
```
