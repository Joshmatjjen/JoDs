# Symptom Checker Example

This is an example of a web-based symptom checker written in pure ES6 (without using any frameworks). It uses Artificial Intelligence API provided by Infermedica as an engine for symptom analysis.

The most recent Infermedica API documentation is available [here](https://developer.infermedica.com/).

## Dependencies

Before going to the next step, please make sure that you have `node` installed in your system.
Please refer to the docs to find out the most suitable way depending on your OS.

This project uses `npm` as dependency manager. Please make sure that you have `npm` installed before going to the next step.

`# npm install -g npm`

Next steps assume that you have installed all dependencies.

## Getting started

First of all you have to obtain your own app-id and app-key from [Infermedica.](https://developer.infermedica.com/)
You will need to paste these into right fields inside the application.

### Installing further dependencies with npm

Please go to the root directory and type
`npm install`.

### Providing api credentials

```javascript
const settings = {
  "app-id": "your-id-here",
  "app-key": "your-key-here"
};

export default settings;
```

### Running the app in development mode

`npm dev`

### Preparing a production-ready build

`npm build`
