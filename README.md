# # Monitor

Monitor services and send alerts by text message. Designed to run on AWS Lambda.

## Requirements 

`node` and [`nvm`](https://github.com/creationix/nvm).

Run `nvm install 4.3` if needed. That's the current version used by Lambda. 

## External services  

You will need a funded [Twilio account](https://www.twilio.com). You'll need to 
buy a a phone number and enable SMS. You will also need your Twilio account SID 
and authentication token, available on the Twilio console. 

## Installation

- Clone the repository 
- Switch to node 4.3, which Amazon uses: `nvm use 4.3`
- Run `npm install` to install dependencies. 
- Copy `settings.sample.js` to `settings.js`
- Fill in the API details from Lambda.
- Fill in any sites you want to monitor and any respondents you want to notify
using the sample values as a guide. 
- Run `make` from the project root to generate a zipfile to upload to Lambda.
- Set up Lambda, if not done, then upload the code -- details below.

### Setting up AWS Lambda

The first time you run the project, edit `settings.js` to include one check that 
will always fail (eg `url: "http://matth.org/does.not.exist"`).

Bundle the project by running `make` from the project root.

In your AWS console, browse to AWS Lambda and select "Create a Lambda function"

Skip the "select blueprint" step. We'll upload this function later.

Under Configure Triggers, select "CloudWatch Events - Schedule". Configure the
event to run as frequently as you'd like (5 minutes is a reasonable interval). 
Be sure to check "enable trigger". Note that I may be missing some details in 
this step -- I set this app up before, and some of that may have been pre-filled. 

On the "Configure function" screen, enter any name you want. I use `monitor_node`.

Select Node.js 4.3 as the Runtime, or whatever the current version offered is. 

Set `Handler` to `index.handler`. Select "Create a new role from template(s)". 
Enter a role name (I used the same name as the app for clarity).

Select "Create function" after uploadng your code (see below)

### Uploading code to Lambda 

Browse to your project if you're not already there. If needed, change the 
"Code entry type" dropdown to read "Upload a .ZIP file".

Select `function_package.zip` from the project directory

## Usage

This is designed to be run by 

## License

MIT
