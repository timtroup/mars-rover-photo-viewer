#Mars Rover Photo Viewer

A basic photo viewer driven by data from the [Mars Rover Photo API](https://github.com/chrisccerami/mars-photo-api)

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. It is preferable to build using [yarn](https://github.com/yarnpkg/yarn/) so please install this if possible. If you do not have access to yarn you can substitute npm in place of yarn in the instructions below
3. From the project folder, execute the following command:

```shell
  yarn install
  ```

4. To build the code, you can now run:

```shell
  yarn run build
  ```
  
5. You will find the compiled code in the `dist` folder. Copy the index.html and bundle<hash>.js file to a webserver to run.

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. To run the tests without a test coverage report being generated

```shell
  yarn run test
  ```
2. To run the tests with a test coverage report being generated

```shell
 yarn run test-coverage
 ```
Coverage report can be found in the project directory under: 

coverage/lcov-report/index.html

## Running the app via webpack dev server

1. If you wish to develop this applciation further you will find it useful to run the app via the webpack dev server as it will allow you to "hot deploy" code changes

```shell
 yarn run serve
 ```