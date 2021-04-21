# ESLint

ESLint is an awesome extension to VS Code that assists with fixing errors.

In order to use ESLint, you must also install some packages.

`npm install --save-dev` This is going to save this package to our dev dependencies; it will not be loaded with production.

`npm install eslint eslint-config-airbnb` AirBnB has developed their own package of excellent strict guidelines.

`npm install eslint-plugin-react`

Once install, you must initiate the eslint config file:
`./node_modules/.bin/eslint --init`


Then go to VS Code setting and search for : editor.codeActionsOnSave.

Change this line from:
```
"editor.codeActionsOnSave": null
```
to:
```
"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
```
