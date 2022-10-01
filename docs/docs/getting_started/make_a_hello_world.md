# Make a Hello World 

You will need to [Log In](https://console.fonoster.io) to your Fonoster account to access the Dashboard.

> If you don't have one yet you will need to [Sign up](https://console.fonoster.io) with GitHub to create a Fonoster account.

More of a visual learner? [Watch the YouTube tutorial](https://www.youtube.com/watch?v=m6B_9lU4iSw)

## What you will need:

- Fonoster Account
- Ngrok
- Node version 16 or above
- Git (optional)

## Setting up our Node.js server

You need to clone or download this template with [everything you need to create a voice application](https://github.com/fonoster/nodejs-voiceapp) into your local environment.

To setup the NodeJS Voice Application, first clone the repository with:

```none
git clone https://github.com/fonoster/nodejs-voiceapp.git
````

Next, move into the project'd directory and install the dependencies with:

```none
cd nodejs-voiceapp
npm install 
````

And, install the Ngrok tool in the global environment with:

```none
npm install -g ngrok
````

Finally, start the Voice Application with:

```none
npm start
````

By default, y our application will be running on port 3000.

## Making the application public

To connect Fonoster with the Voice Application, we first need to make it available to the public Internet. For this task, we use Ngrok.

To make the Voice Application public, first open a new terminal without close the one with Voice Application.

Next, start Ngrok with:

```bash
ngrok http 3000
```

Your application is now ready for public access and will look similar to this:

![ngrokksuccess](https://user-images.githubusercontent.com/80093500/190503172-97761255-2981-4748-9e6d-ff1d56416211.png)

## Create a New Project using your Fonoster account

Without closing any of your open terminals, make your way over to your Fonoster account and create a new project to connect it to your newly created server. You can name it however you want.

![createproject3](https://user-images.githubusercontent.com/80093500/191590647-cacce8cd-a14f-4c9b-b205-14f44b3efea1.gif)

Now, select the project you just created so we can have access to the **Fonoster Dashboard.**

![Demo](https://user-images.githubusercontent.com/80093500/191602117-c3b1e621-d78e-49b2-9160-f0c0eee24477.gif)

## Creating a New Trunk or Provider

Go to the **SIP NETWORK** tab and create a **New Trunk**
<ul>
  <li> You <strong> don't need to have a Provider at this point </strong>, you can use placeholders for every input. </li>
  <li> <strong> Set Providers Hostname or IPv4 to localhost </strong> and you are ready to click on <strong>Add Provider</strong> </li>
  </ul>

![Trunk(1)](https://user-images.githubusercontent.com/80093500/191605028-7eed06a7-4edd-43c6-b167-dfbee99d14cf.gif)


## Creating a New Number

The **last step** is to create a new number. Head back to the **SIP NETWORK** tab, select **Number** and **New Number**
<ul>
  <li> <strong> You do not need a number, you can also create random ones that will serve as placeholders </strong> </li>
  <li> First, select the PLACEHOLDER we created as our Provider in the previous step. </li>
  <li> For <strong> Number </strong> you can use any number, <strong> this is a placeholder </strong> but for <strong> Webhook URL </strong> you need to open back your <strong> ngrok terminal </strong> and copy the link provided. </li>
  </ul>

![numberadded](https://user-images.githubusercontent.com/80093500/191615101-baac5486-c997-4923-9973-f413733a177c.gif)

Go ahead and **Create Number**.

And now you are ready to make a **test call**

![testCall](https://user-images.githubusercontent.com/80093500/191616447-d78ad48f-4b4b-4342-854e-bcba4b70d4e3.gif)

Now you will see on the bottom left side of the screen **call in progress** and that's it! 

**You've just created your first application using Fonoster** 🎉

## Need more help?

-  Join our [Discord Community](https://discord.gg/mpWSRUhG7e)
-  Create a new [Discussion](https://github.com/orgs/fonoster/discussion)
-  Check out the [video tutorial](https://www.youtube.com/watch?v=m6B_9lU4iSw)
