# Serverless Boilerplate

Set up a small Serverless project in seconds ⚡️.

#### Includes

- [Serverless](https://github.com/serverless/serverless.git)
- [AWS-SDK](https://github.com/aws/aws-sdk-js)
- [Serverless Offline](https://github.com/dherault/serverless-offline)
- [Node 8.1 (Async/Await)](https://gist.github.com/marcandrewb/0c388596c3b4e98c2711d9596a1b3b3f)
- [Serverless reference template](https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/)

#### Setup



```bash
# Or fork this repo 🙏
git clone https://github.com/HMilbradt/serverless-boilerplate.git

npm install

npm start
```

#### Deployment

First, make sure you have your AWS credentials saved locally under ```~/.aws/credentials```.  

The format should look something like this: 

```bash
[default]
aws_access_key_id=access_key_here
aws_secret_access_key=secret_key_here
```

Then, open serverless.yml and update ```provider.profile``` to whichever profile you'd like to use.  If using default, you can omit the profile from the Serverless config.


Now, you can run the deployment command:

```bash
npm run deploy
```

#### Streaming Logs

Once deployed, the CloudWatch logs can be streamed to the console using the following command:

```bash
# Change 'index' to whatever function you'd like to stream
npm run logs -- index
```