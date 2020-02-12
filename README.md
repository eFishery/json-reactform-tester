## How to test json-reactform locally

1. Clone this repo, install with `yarn`
2. Clone repo [json-reactform]("https://github.com/eFishery/json-reactform"), install with `yarn`
3. Register json-reactform in your local machine registry. In root directory's json-reactform project, run `yarn link`
4. Link json-reactform to this project. In root directory's json-reactform-tester project, run `yarn link json-reactform`
5. Then define Form's model within json-reactform-tester project. Start it's server.
6. Start develop json-reactform. Everytime you make change, run `yarn build`. It will hot reload your json-reactform-tester.
