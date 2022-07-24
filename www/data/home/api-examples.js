export default [
  {
    lang: 'js',
    title: 'Voice App',
    description: 'Play a hello world sound',
    code: `const { VoiceServer } = require("@fonoster/voice");
const serverConfig = {
  pathToFiles: \`\${process.cwd()}/sounds\`,
};

new VoiceServer(serverConfig).listen(
  async (req, res) => {
    console.log(req);
    await res.answer();
    await res.play(\`sound:\${req.selfEndpoint}/sounds/hello-world.sln16\`);
    await res.hangup();
  }
);

// your app will leave at http://127.0.0.1:3000/
// and you can easily publish it to the Internet with:
// ngrok http 3000
  `,
  },
  {
    lang: 'js',
    title: 'CallManager',
    description: 'Call a number and connect with a voice application',
    code: `const Fonoster = require("@fonoster/sdk")
const callManager = new Fonoster.CallManager()

// Replace the webhook with the one from your Ngrok
callManager.call({
  from: "9842753574",
  to: "17853178070",
  webhook: "https://5a2d2ea5d84d.ngrok.io"
})
  .then(console.log)
  .catch(console.error)
    `,
  }
]
