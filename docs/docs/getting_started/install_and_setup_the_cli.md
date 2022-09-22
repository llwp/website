# Install and setup the CLI

Fonoster's command-line tool (CLI) will help you manage your Fonoster instances. From creating `Agents` to deploying `Functions` and more.

## Installing

The command-line tool is available via Node Package Manager or NPM. 

**Use the following steps to install the CLI as a global command.**

1. Open a new terminal
2. Paste into your terminal the following command
```none
npm -g install @fonoster/ctl 
```
3. Wait for the installation to complete

## Commands and subcommands

**The command-line tool comes with built-in commands** covering all main use-cases and additional commands via plugins. 

**Most commands are "collapsed" under a section. For example, the `agents` sections contain the following commands:**

- `agents:create`  creates a new agent resource
- `agents:delete`  removes agent from a project
- `agents:get`     get information about an existing agent
- `agents:list`    list registered agents
- `agents:update`  updates a agent at the SIP Proxy subsystem

For detailed information about Fonoster's command-line interface, and commands available please visit the [Fonoster NPM](https://www.npmjs.com/package/@fonoster/ctl) page.

## Authenticating the CLI

You can point the CLI to your own Fonoster instance, or use our [as a service](https://console.fonoster.io) option. 

**To use the as-a-service option follow the the next steps:**

1. Open a new terminal
2. Paste the following command
```none
fonoster auth:login
```
3. Go to https://console.fonoster.io/ to get your credentials from your profile
4. Get the `ACCESS_KEY_ID and the ACCCESS_KEY_SECRET` 
5. Login using your credentials

Your terminal should look like this: 
<ul>
 <li> api endpoint <strong>api.fonoster.io</strong> </li>
 <li> access key id <strong> your ACCESS_KEY_ID </strong> </li> 
 <li> access key token <strong> your ACCESS_KEY_SECRET </strong> </li> 
</ul>

Having issues? Check out [how to solve permission errors](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).
