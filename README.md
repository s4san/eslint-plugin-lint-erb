# eslint-plugin-lint-erb

Allow eslinting, erb files.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, clone this repo into your local machine as it is not published to npm.

Finally, install `eslint-plugin-lint-erb`:

```
$ npm install <relative-path-to-your-cloned-eslint-plugin-lint-erb> --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-lint-erb` globally.

## Usage

Add `lint-erb` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "lint-erb"
    ]
}
```





