# What is a Programmable Voice Application

A Programmable Voice Application is **a server that takes control of the flow in a call, to make, receive, control and more, via software**. 

A Voice Application can make use of any of the following commands:

- `Answer` - Accepts an incoming call
- `Hangup` - Closes the call
- `Play` - Takes an URL or file and streams the sound back to the calling party
- `Say` - Takes a text, synthesizes it into audio and streams back the result
- `Gather` - Waits for Dual-Tone Multi-Frequency (DTMF) or speech events and returns back the result
- `SGather` - Returns a stream for future Dual-Tone Multi-Frequency (DTMF) and speech results
- `Dial` - Passes the call to an Agent or a Number at the Public Switched Telephone Network (PSTN)
- `Record` - It records the voice of the calling party and saves the audio on the Storage sub-system
- `Mute` - It tells the channel to stop sending media, effectively muting the channel
- `Unmute` - It tells the channel to allow media flow

## Create a Voice Application

Creating a Voice Application using Fonoster is frictionless. Follow these steps to create your new Voice Application:

1. Open a new terminal
2. Create a new directory where your app will be
```none
mkdir voiceapp
```
3. Move over to the newly created directory

```none
cd voiceapp
```
4. Initiate a Node application

```none
npm init
```
5. Create an index.js file, add the application's content and save the file

```javascript
const { VoiceServer } = require("@fonoster/voice");

const serverConfig = {
  pathToFiles: `${process.cwd()}/sounds`,
};

new VoiceServer(serverConfig).listen(
  async (req, res) => {
    console.log(req);
    await res.answer();
    await res.play(`sound:${req.selfEndpoint}/sounds/hello-world.sln16`);
    await res.hangup();
  }
);
```
6. Install the voice module pasting this into your terminal

```
npm install @fonoster/voice
```

7. Run the application
```bash
node index.js
```

Your output will look like this:

```
$ node index.js 
info: initializing voice server
info: starting voice server @ 0.0.0.0, port=3000, path=/voiceapp
```

> **Your app will live at `http://127.0.0.1:3000`.** 
>  Be sure to leave the server running.

## Using Ngrok to publish your Voice Application 

Now that we have the Voice Application up and running, you need to make it available on the Internet. The fastest way to enable public access is by using Ngrok. **With Ngrok, you can publish a web server with a single command.**

> Remember to keep your application running.


1. Open a new terminal
2. Install Ngrok 
```none
npm i -g ngrok
```
2. Start Ngrok with the application's protocol/port with the following command:

```none
ngrok http 3000
```

> Remember to keep your application running

Now you can use Ngrok's URL as the webhook on any of your **Fonoster Numbers.**
