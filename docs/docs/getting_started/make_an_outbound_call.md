# Make an outbound call

**With a single API request you can initiate a phone call using Node.js, from the Fonoster Number.**

Make a new file `call.js` and paste in the following code.

```javascript
const Fonoster = require("@fonoster/sdk");
const callManager = new Fonoster.CallManager({
  accessKeyId: "PJ619154d081467a0700000001",
  accessKeySecret: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ25vc3RlciIsInJvbGUiOiJQUk9KRUNUIiwiYWNjZXNz"
});

callManager.call({
 from: "+19842753574",
 to: "17853178070",
 webhook: "https://5a2d2ea5d84d.ngrok.io"
})
  .then(console.log)
  .catch(console.error);
```
## Replace the To and From phone numbers

This fragment of code starts a phone call between the two phone numbers that we pass as arguments. 
>**The `from` number is our Fonoster number, and the 'to' number is who we want to call.**

The `webhook` argument points to a Programmable Voice Application, our previously made ngrok port, which tells Fonoster to handle the call once the recipient answer the call.

Remember that Fonoster Number you set up earlier? Go ahead and replace the existing from a number with that one, making sure to use E.164 formatting:

`[+][country code][phone number including area code]`

Next, replace the `to` phone number with a mobile or landline phone you have with you.

> Make sure to also replace accessKeyId and accessKeySecret with the ones from your account. 

## Make an outbound call

Now we are ready to save the changes and run the code by copying the following command into your terminal: 

```bash
node call.js
```

That's it! Your phone should ring with a call from your Fonoster Number, and you'll hear our short message for you.
