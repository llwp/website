# Create a Project

Projects in Fonoster allow you to manage related resources in a single place. With your Project account, you will be able to create and manage your Providers, Numbers, SIP Agents, Domains, Functions, and many more features.

**To create a new Project with your terminal follow these steps:**

1. Open a new terminal
2. Copy the following command where you'll be prompted to sign in using Fonoster with your `ACCESS_KEY_ID` and `ACCESS_KEY_SECRET`
```none
fonoster auth:login
```
> Make sure that you don't have a project already created. Basic accounts only allow one project at a time. 
3. Now copy the following command 

```none
fonoster projects:create
```
4. Type a friendly name
5. Chose to enable or disable experimental APIs

Each Project has its own `ACCESS_KEY_ID` and `ACCESS_KEY_SECRET` and have the `PJ` prefix (i.e: `PJ619154d081467a0700000001`) and that is the result you'll see in your terminal. 

**Your project has been succesfully created.** 

If you go to your Fonoster Dashboard, you'll see your project. 

## Start working with a a new Project 

**To start working with a new Project you first must select it as default, to do so follow these few steps:**

1. Open a new terminal
2. Find the Project's reference, they have the `PJ` prefix (i.e: `PJ619154d081467a0700000001`)
3. To set it as default copy this command into your terminal where REF is the reference number with a `PJ` prefix
```none
fonoster projects:use REF
```
(i.e fonoster projects:use PJ619154d081467a0700000001)

**You are all set. You can now begin adding your Providers, Numbers, and many other features.**
