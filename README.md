
In the project directory, you can run:

### `yarn install`

To install the dependencies.

### `yarn storybook`

Runs app in storybook mode where you can view all the components.

Note: `import 'antd/dist/antd.css'` in storybook component to apply the style.

# How to publish package to NPM:

Check latest version [here](https://www.npmjs.com/package/@salesgenterp/ui-components)

#### Auto publish:
- Publishing package is automated using github actions.
- Changes pushed/merged into `master` branch with updated package verison will be automatically published to npm.

#### Publish manually:
1. Run `npm login` command in your terminal and enter following credentials:
 - username
 - password
 - email

Note: Contact admin for crendentials.

2. Update package version in `package.json` file.
3. Run one of the following command to publish the package:
   - `npm publish --access=public`
