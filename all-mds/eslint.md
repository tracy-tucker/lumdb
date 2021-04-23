# ESLint

ESLint is an awesome extension to VS Code that assists with fixing errors.

In order to use ESLint, you must also install some packages.

`npm install --save-dev` This is going to save this package to our dev dependencies; it will not be loaded with production.

`npm install eslint eslint-config-airbnb` AirBnB has developed their own package of excellent strict guidelines.

`npm install eslint-plugin-react`

Once install, you must initiate the eslint config file:
`./node_modules/.bin/eslint --init`

Then, follow the command line question that appear on screen.

Once installed, toggle through code mistakes using `function + F8`

There may be some rules you want to turn off.
When using `function + F8`, highlight the rule name (towards the end), then open the `eslintrc.js` file.
Towards the bottom, continue with the code to write a rule:

```
//example rule
"rules": {
    "react/jsx-filename-extension":0
}

If you have a line or two that is the exception to the rules, you can in-line code to tell ESLint to ignore that line.

For example, at the top of the file:
`/* eslint react/no-did-mount-set-state:0 */`

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

The command, `eslint.autoFixOnSave'; false` is deprecated code and no longer works.
