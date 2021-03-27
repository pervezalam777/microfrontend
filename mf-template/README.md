# Tata Cliq Seller Portal Seller Count App

This repository contains code for seller count application code which is a micro-frontend application that can run independently and inside the host app container.

## Guideline

### **`Available Commands`**

Please check the _Commands_ section down below.

### **`Import Statement`**

Import statement should be divided in two catagories "External Dependencies" and "Internal Dependencies" e.g.

```javascript
// External dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Internal dependencies
import config from 'hostAppConfig';
```

#### **`Internal Dependencies should be injected in the following order`**

1. common or core configuration imports
2. common or core utility imports
3. common or core store imports (reducer, action, epic)
4. common or core components imports
5. feature or pages or layout or components config imports
6. feature or pages or layout or components utility imports
7. feature or pages or layout or components store imports (reducer, action, epic)
8. feature or pages or layout or components components imports
9. All Assets (_.scss, _.png, \*.svg)

```javascript
// External dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

// Internal dependencies
import store from 'core/store/storeConfig';
import * as constant from 'common/constants';
import AuthComponent from 'common/auth/authComponent';
import CarousalComponent from 'components/carousal/carousalContainer';
import 'styles/layout/dashboard.scss';
```

#### Incorrect vs Correct import

```javascript
// Incorrect (not recommended)
import {
	uuid,
	phoneFormatter,
	dateFormatter,
	stringFormatter,
	MAX_WINDOW_SIZE,
	MIN_WINDOW_SIZE
} from 'common/constants';

// correct
// For only one or two item from the file
import { uuid } from 'common/constants';

// correct
// For more than two items
import * as constant from 'common/constants';
```

### **`Folder structure`**
```sh
-src
		|-assets
		|-components
		|-events
		|-hooks
		|-services
		|-styles 
		+ AppAuthentication.js
		+	index.js
		+ bootstrap.js
```

### **`Components naming convention`**

Component name should in lower camel case `e.g. clientListContainerComponent.js`


### **`Component composition`**

### **`Component code`**

#### `Presentation Component`

- File name should `<lowerCamelCase>Component.js`
- It should be state less functional component.
- It should be a dumb component.
- Only other render function can be placed inside it.
- Define all the props in propTypes
- In some cases presentation component can render container component as a child. But do it sparingly.

```javascript
// External dependencies
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Login component render login UI on screen.
 * @param {Object} props login properties
 */
export default function LoginComponent(props) {
	const { username, password, onChange: handleChange } = props;

	/**
	 * Render user name control
	 */
	function renderUsernameControl() {
		return (
			<>
				<label htmlFor='username'></label>
				<input id='username' value={username} onChange={handleChange} />
			</>
		);
	}

	return <form>{renderUsernameControl()}</form>;
}

LoginComponent.propTypes = {
	username: PropType.string.isRequired,
	password: PropType.string.isRequired,
	onChange: PropType.func.isRequired
};
```

#### `Container Component`

- File name should be `<lowerCamelCase>ContainerComponent`
- It should be a stateful functional component
- It can render both Layout and Presentation Component.

```javascript
// External dependencies
import React, { useState } from 'react';

// Internal dependencies
import LoginComponent from 'page/login/components/loginComponent';

/**
 * Login container component act as presenter
 */
export default function LoginContainerComponent() {
	const [formState, setFormState] = useState({
		username: '',
		password: ''
	});

	/**
	 * handle form input change
	 * @param {Event} event change event
	 */
	function handleFormInputChange(event) {
		const { id, value } = event.currentTarget;
		setFormState({ ...formState, [id]: value });
	}

	return <LoginComponent username={username} onChange={handleChange} />;
}
```

## Styles SCSS
There would be two entry point scss file will be crated.
1) `host.scss` this will contains global styles which would already be available in host-app. these scss file will not be bundle along with microfrontend build so that duplicate css can be avoided.
2) `<microfrontend name>.scss` this will be micro frontend specific styles (e.g. see auth.scss)

### class name in scss
Class name may collide with one another so to prevent the same root class name should be prefixed with microfrontend name e.g. `.sp-auth-nav { }` here 'sp-auth' is microfrontend name. 

## Commands
NOTE: Please check `webpack.config.js` file if it has dependency on other micro-frontend then that should also be running before running this micro-frontend.

### **`Run application on local`**

```sh
# install all the dependencies via running the following command.
# NOTE: run it only once or when new dependencies are added to package.json
$ npm install

# Run the following command to start local server
$ npm run start
```

### **`Run application with production mode`**
NOTE: To run all the micro-frontend in single please check `sp-mf-builder` repository

```sh
## Create production build
$ npm run build

## Run the build with webpack sever
$ npm run serve
```

### **`Run test environment`**

```sh
# Run test
$ npm run test

# Debug test
$ npm run test:debug
```

### **`Test coverage`**

```sh
# Check test coverage on console window
$ npm run test:coverage
```

### **`Linter and formatter`**

This repository contains linting and formatting rules.

> Linting rules are hooked with git commit command. If any linting rule breaks it will throw error. These rules are there to keep code clean.

The following are commands to manually check and auto fix linting errors. **But it is re-commended that you should fix all the error manually.**

```sh
# Check linting errors
$ npm run lint

# Auto fix linting errors
$ npm run fix:lint
```

For formatting code files, we are using `Prettier` settings please check '.prettierrc'.

> `In order to adhere to standard formatting please ignore setting up formatter in your IDE (VSCode) via plugins`

## Code Commit

### Git Branching
As per the discussion with TataCliq team, 
- There would be four types of branches "master", "develop", <feature-branch>, <feature-task-branch>. 
- There could be multiple feature branches and feature task branches
- Feature branch will be forked out of develop branch
- Feature task branch will be forked out of feature branch
- Feature task branch will be merge back to feature branch once all the code written inside the branch has more than 90 test coverage.
- Feature branch will be merged to develop branch once entire feature would be completed and would be tested locally.
- Develop branch changes should be merge back into feature branch frequently (once a day or more)
- There should be no conflict between feature branch and develop branch when pull request would be created.
- Feature branch will be active until the pull request gets merged to the develop branch after merge it will be removed.

### Naming convention
- master : `master`
- development : `develop`
- feature : <jira-id>-<abbr-feature-name> `SCF2-3-seller-stories`
- feature task : <sub-task-jira-id>-<abbr-task-name> `SCF2-12-navigation-bar` 

## References
