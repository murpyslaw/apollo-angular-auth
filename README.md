# apollo-angular-auth
Simplest possible auth sample using apollo and ts-node

# Known Issues
The GraphQL layer works, however, the apollo-express server in apollo-angular-auth-server
needs some <3 

# Prerequisite (for now)
https://www.rethinkdb.com/

# Clone
```
git clone --recursive git@github.com:murpyslaw/apollo-angular-auth.git
git submodule foreach git checkout master
```

# Run
```
npm i && npm start
```

# Tips
- Do: `git config --global status.submoduleSummary true` to see a summary of the submodule changes you have created, and to have these changes in the git commit of the *superproject*