# System under test: https://vimeo.com/cameo

* Create a new user
* Login
* Validate the app’s main page’s scrolls (element resizes, new elements floating in, elements disappear etc.)
* Validate the download page of Cameo application (after clicking on Download button), e.g.: Details list (size, version, updated), Title

## Getting Started

Get a copy of the project on your local machine for development and testing purposes

### Prerequisites

Install latest JDK and NODE.JS

### Installing

Install gulp and protractor global on your machine
```
npm install -g gulp protractor
```

Install project dependencies by running in local directory:
```
npm install
```

## Running the tests

Now you can run tests from local project directory *(default browser is chrome, all scenarios would be executed without using --tag)*:
```
gulp e2e [--tags=<tag>]
```
Defined tags are @download, @scroll, @user, @signup, @login.
