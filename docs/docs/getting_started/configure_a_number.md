# Configure a Number

Fonoster is a *bring your prefered tools* Open Source alternative to programmable communication alternatives on the market. This means that **you can use any service that makes sense for your applications, including your favorite Voice Over Internet Protocol (VoIP) provider.**

## Choosing a VoIP Provider

With Fonoster you can bring your own VoIP Provider for call origination or termination. However, we recommend using [VoIP.ms](https://voip.ms/) for US and Canada.

Once you have a VoIP provider, you will need to compile the following information:

- Trunk Host/IP
- SIP Username for registration
- SIP Password for registration
- Transport (usually `UDP/TCP`)
- Phone number ideally in E164 format

## Creating a VoIP Provider

Once you have your trunk information, follow the next few steps:

1. Open new terminal
2. Add a new Provider by copying this into your terminal
```none
fonoster providers:create
```
3. Type a friendly name, username, secret, host, transport, SIP registration refresh

**You have created a new VoIP Provider.**

## Adding your Number

Adding a new Number is just as easy:

1. Open a new terminal
2. Enter the create a number command 
```none
fonoster numbers:create
```
3. Ensure the number has the format given by your provider, E164 format
4. Skip the "address of record" option
5. Enter the application's webhook (as per the last guide, you get it by making your Fonoster server public with Ngrok)

You are all set. **Next we will test the application.**
