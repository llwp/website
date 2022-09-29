# Receive and respond to a call

Fonoster can accept calls from different sources such as phones, web pages, and mobile devices, with the ability to **connect them with your Programmable Voice Application** using a webhook.

When your Fonoster Number receives an incoming phone call, it will send an HTTP request to a server you control. **This callback mechanism is known as a webhook.** 

When the request is made from Fonoster to your application, **Fonoster expects a response in a JSON format** that tells it how its goint to respond to the call.

If everything went well with the prior guides, all is left is calling to your Number using a mobile or landline. 

Initialize your app
```none
node index.js
```

And your output should look similar to this, where every empty value (' ') is replaced by your previous configuration:

```none
{
accessKeyId: 'PJ prefix',
sessionToken: ' ',
dialbackEndpoint: 'https://api.fonoster.io',
sessionId: '',
number: '',
callerId: 'WIRELESS CALLER',
callerNumber: '',
selfEndpoint: your ngrok address,
metadata: {}
}
verbose: @fonoster/voice sending answer request [sessionId = '']
verbose: @fonoster/voice received event [{
"type": "SessionOpen",
"sessionId": ' ' 
}]
verbose: @fonoster/voice received event[{
"type": "PlaybackFinished",
"data": {
"playbackId": ''
 }
}]
verbose: @fonoster/voice sending hangup request [sessionId = ' ' ]
verbose: @fonoster/voice received event [{
"type": "SessionClosed",
"sessionId": ''
}]
```



