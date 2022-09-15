# Make a Hello World 

You will need to [Log In](https://console.fonoster.io) to your Fonoster account to access the Dashboard.

> If you don't have one yet you will need to [Sign up](https://console.fonoster.io) with GitHub to create a Fonoster account.

**More of a visual learner?** <a href="https://www.youtube.com/watch?v=m6B_9lU4iSw"> Watch the YouTube Tutorial. </a> 

## What you will need:
- Fonoster Account
- Node version 16 or above
- Git

Check the versions by typing `--version` 

>![versionscheck](https://user-images.githubusercontent.com/80093500/190502099-94115916-11cb-4e47-978f-f79fe724fc1b.png)

### Setting up our Node.js server

You need to clone this template with [everything you need to create a voice application](https://github.com/fonoster/nodejs-voiceapp) into your local environment.

- You do not need a dedicated repository to clone it.

Run this command on your terminal `git clone https://github.com/fonoster/nodejs-voiceapp.git` and hit enter.

>![gitClone](https://user-images.githubusercontent.com/80093500/190502211-9b6ce441-c946-44e2-aed9-d9938a6bb619.png)

Go ahead and cd over the directory it made for you named `nodejs-voiceapp`. 

Type into your terminal `cd nodejs-voiceapp` and install all the dependencies with: `npm i` or `npm install`

>![npmi](https://user-images.githubusercontent.com/80093500/190502362-e0f55e00-35bf-401c-8b12-769ba3ac56c2.png)

Now you only need a couple more packages to install so run ` npm install -g ngrok`  
>![ngrok](https://user-images.githubusercontent.com/80093500/190502521-7378a255-3250-463b-86da-b77dfc68ca50.png)

And `npm install --save-dev cross-env`
>![cross-env](https://user-images.githubusercontent.com/80093500/190502641-b932ed46-9317-41b4-88cf-e476bb43ec33.png)

Now you **are ready to start your server!!!** 

Type `npm start` into the terminal and hit enter.

>![npmstart](https://user-images.githubusercontent.com/80093500/190502741-8300e694-f16f-4226-9ac6-385e093e5d86.png)

A **successful message** will show you **your server is up and running on port 3000**.

### Connecting our server to Fonoster

Open a new terminal window **do not close the one you have with the server running** and navigate towards the directory you created the server on.

To connect our server to Fonoster we need to first **make the server public**, to do this you need to type `ngrok http 3000` and this will make ngrok listen to the port the server is on, port 3000.

>![ngrokk](https://user-images.githubusercontent.com/80093500/190503104-f25b2282-06bb-4255-81dc-d88a1164c0e4.png)

A **successfull connection will** show you the new HTTP URL where our server is up and running: 

>![ngrokksuccess](https://user-images.githubusercontent.com/80093500/190503172-97761255-2981-4748-9e6d-ff1d56416211.png)
>Highlighted yellow because you will need to use this link later on the tutorial.

### Create a New Project using your Fonoster account

Without closing any of your open terminals, make your way over to your Fonoster account and create a new project to connect it to your newly created server. 

>![FonosterCreateProject](https://user-images.githubusercontent.com/80093500/189745109-f2c85777-442d-43ee-910f-24e7e02d3f9b.jpg)

You can name it however you want. 

>![newprojectdemo](https://user-images.githubusercontent.com/80093500/189745961-ce31a0ca-f94e-4564-948c-bf9e898544b3.jpg)

Now, select the project you just created so we can have access to the **Fonoster Dashboard.**

>![ProjectScreen](https://user-images.githubusercontent.com/80093500/189751537-8a100af5-2412-4b9b-b755-650a41e39116.png)

#### Creating a New Trunk or Provider

Go to the **SIP NETWORK** tab and create a **New Trunk**

>![NewTrunk](https://user-images.githubusercontent.com/80093500/189752692-7884833a-73d1-446f-922a-41863a8d4c13.jpg)

You **don't need to have a Provider at this point**, you can use placeholders for every input. 

>![Placeholder1](https://user-images.githubusercontent.com/80093500/189753362-ee1b608a-42ee-4a9d-977d-336b7055c124.jpg)

**Set Providers Hostname or IPv4 to localhost** and you are ready to click on **Add Provider**

>![Placeholder2](https://user-images.githubusercontent.com/80093500/189753477-ffebe23d-15aa-4860-a2ee-8d28a49a8842.jpg)

#### Creating a New Number

The **last step** is to create a new number. Head back to the **SIP NETWORK** tab, select **Number** and **New Number**

>![CreateNumber1](https://user-images.githubusercontent.com/80093500/189754121-a00592d7-7ebe-4df7-86ce-5a2747b39b29.jpg)

**You do not need a number, you can also create random ones that will serve as placeholders**.

First, select the PLACEHOLDER we created as our Provider in the previous step. 

>![CreateNumberPlaceholder1](https://user-images.githubusercontent.com/80093500/189754656-5e05a9f3-3434-4c74-9a1f-731ae089117a.jpg)

For **Number** you can use any number, **this is a placeholder** but for **Webhook URL** you need to open back your **ngrok terminal** and copy the link provided.

>![WebhookURL](https://user-images.githubusercontent.com/80093500/190503466-4156a58f-ea4e-4cbd-a066-cdc181692b53.jpg)

Go ahead and **Create Number**.

And now you are ready to make a **test call!**

>![TestCall](https://user-images.githubusercontent.com/80093500/189755924-a3c32659-358f-44f5-8ee2-774a8d0dca44.jpg)

Now you will see on the bottom left side of the screen **call in progress** and that's it! 

**You've just created your first application using Fonoster!** 🎉

>![CallInProgress](https://user-images.githubusercontent.com/80093500/189756179-53f81add-8ba7-45c8-b25e-77b7e5ff7f27.jpg)

## Need more help?

-  Join our <a href="https://discord.gg/mpWSRUhG7e"> Discord Community. </a>
-  Create a new <a href="https://github.com/orgs/fonoster/discussions"> Discussion.</a>
-  Check out the <a href="https://www.youtube.com/watch?v=m6B_9lU4iSw"> video tutorial. </a>





