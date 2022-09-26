# Create a Project

Projects in Fonoster allow you to manage related resources in a single place. With your Project account, you will be able to create and manage your Providers, Numbers, SIP Agents, Domains, Functions, etc.

Each Project has its own `ACCESS_KEY_ID` and `ACCESS_KEY_SECRET` and have the `PJ` prefix (i.e: `PJ619154d081467a0700000001`)

To create a new Project with the console follow the next few steps:

1. Open a new terminal
2. Copy the following command
```none
fonoster projects:create
```
3. Type a friendly name
4. Chose to enable or disable experimental APIs

## Start working with a a new Project 

1. Select it as default. To set your new Project as default, follow the next steps:
- Open a new terminal
- Find the Project's reference 
- To set it as default copy this command into your terminal where [REF] is the reference number with a `PJ` prefix
```none
fonoster projects:use [REF]
```

<video width="100%" playsInline="" controls="muted">
 <source src="/videos/create_a_project_2.mov" type="video/mp4" playsInline="" />
</video>


You are all set. You can now begin adding your Providers, Numbers, and many other features.
