# Template for managing GAS with TypeScript using clasp

## :articulated_lorry: Directory structure

```
/root
  |- /src
  |    |- main.ts # entry point
  |- .clasp.sample.json # clasp settings
  |- .claspignore
  |- appsscript.sample.json # Manifests of GAS
  |- esbuild.mjs # Build Typescript to GAS
```

cf.

- [Manifests](https://developers.google.com/apps-script/concepts/manifests?hl=ja)

## :construction: Setup Clasp + TypeScript + ESbuild

```sh
$ npm install
# Login clasp
$ npx clasp login
# Create clasp settings
$ cp .clasp.sample.json .clasp.json
$ mkdir dist
$ cp appsscript.sample.json ./dist/appsscript.json
# Editor
$ cp .vscode/settings.sample.json .vscode/settings.json
```

### :bulb: How to get the ScriptID

1. Open Spreadsheet
2. Extensions -> Apps Script
3. File -> Project Settings
4. Copy `Script ID`

### :rocket: Deploy

```st
$ npm run deploy
```
