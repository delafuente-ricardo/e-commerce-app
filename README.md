## E-Commerce App
## About the project
Food Mart is a fictional platform for online grocery shopping, a theme that has grown tremendously in popularity since the start of Covid. As both a playground & portfolio application, many features have been deliberately over-engineered (while others remain relatively under developed) for testing, learning, and demonstration purposes.

Visit [http//food-mart.netlify.app](http://food-mart.netlify.app) to see a working version of this application!

![Food Mart preview](https://firebasestorage.googleapis.com/v0/b/e-commerce-app-250.appspot.com/o/images%2Fapp-preview.png?alt=media&token=5209d4fa-ca7e-435d-990b-fe0906b58274)

### Ideas for the future:
- Improved navigation
- i18n support (in progress)
- User authentication
  - Ability for users to store:
    - payment methods, addresses
- Product suggestions based on:
  - previous purchases, browsing history
- Payment processing with Stripe
- Tests... (in progress)
- Dark mode

## Getting started
For those interested in cloning the application, you'll have to set up firebase:
1. Replace the `firebaseConfig` object with your own; this object can be found in `/src/app/firebase.ts`.

2. Create & seed a `products` collection on firestore. I've included sample data in `/src/features/products/productData.ts`. This project uses TypeScript; make sure to update types when making changes to the product model/schema.

    I've also included a helper function to seed product data programmatically:
    ```ts
    import {seedProducts } from './common/utils/firebase';
    import { products } from './features/products/productData';

    seedProducts('products', products);
    ```

3. Update the `categories` array in `/src/features/categories/categoryData.ts` to reflect the items you've stored on firestore (step 2).
4. Proceed with the standard create-react-app guide below:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). defined below:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
