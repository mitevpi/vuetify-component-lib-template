<p float="left">
    <img src="https://cdn.auth0.com/blog/vuejs/vue-logo.png" alt="Vue.js" width="100"/>
    <img src="https://www.saashub.com/images/app/service_logos/8/20ef90d04b35/large.png?1527741609" alt="Vuetify.js" width="100"/>
    <img src="https://opencollective-production.s3-us-west-1.amazonaws.com/011fc620-4cb2-11e9-a51a-fdbb10b4cabb.png" alt="Storybook" width="100"/>
</p>

# Vue.js + Vuetify.js Component Library Template

![GitHub issues](https://img.shields.io/github/issues/mitevpi/vuetify-component-lib-template)
![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/mitevpi/vuetify-component-lib-template)
![GitHub contributors](https://img.shields.io/github/contributors/mitevpi/vuetify-component-lib-template)

![GitHub last commit](https://img.shields.io/github/last-commit/mitevpi/vuetify-component-lib-template)
![GitHub Release Date](https://img.shields.io/github/release-date/mitevpi/vuetify-component-lib-template)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/mitevpi/vuetify-component-lib-template)
![GitHub repo size](https://img.shields.io/github/repo-size/mitevpi/vuetify-component-lib-template)
![GitHub](https://img.shields.io/github/license/mitevpi/vuetify-component-lib-template)

A Design System / Component Library Template for enabling graphic
consistency and legibility across web development projects by creating
reusable components and styles with accessible & legible documentation.
Built on top of Vue.js and [Vuetify.js](https://vuetifyjs.com/en/).

## Usage

This Template is comprised of two major categories: [Styles](src/styles)
and [Components](src/components). It builds to compiled components
(`.js`) and compiled styles (`.css`) from the source (`.vue`) files
which can be used across web applications. It also creates a
[Storybook](https://storybook.js.org/) site for component/design system
documentation.

Clone this repository locally, and use it as a starting point for
building a component library / design system on top of Vue.js and
[Vuetify.js](https://vuetifyjs.com/en/)

## Added/Updated Configurations to Vue CLI Starter

1. [AirBnB Style Guide](https://github.com/airbnb/javascript)
2. [Prettier Style Guide](https://prettier.io/)
3. [ESLint (Style Enforcing)](https://eslint.org/)
4. [Storybook](https://storybook.js.org/)
5. [Library Build](https://cli.vuejs.org/guide/build-targets.html#library)
6. [SCSS/SASS](https://github.com/sass/node-sass)
7. [Vuetify.js](https://vuetifyjs.com/en/)

## Key Commands

After cloning/downloading the repository locally, install the required
dependencies using `npm i`. After installation, the following commands
can be used to develop & build the component library.

1. `npm run build:all` - This will build the component library in the
   `dist` folder, the preview app in the `dist-app` folder, and the
   static storybook site for documenting the components in the
   `storybook-static` folder.
2. `npm run storybook` - Runs a local instance of [Storybook](https://storybook.js.org/), allowing
   you to preview/interact with your component documentation.
3. `npm run serve` - Runs the preview app.

## How to Import (The Built Library)

### Importing Components

#### Global

Importing the single file .vue components directly. (If using Vue CLI 3 with Babel or TypeScript, it's recommended that you import its src directory. This will minimize the size of your application by preventing duplicate or unnecessary polyfills.)

Importing the source `.vue` file:

```js
// main.js
import HelloWorld from 'component-library/src/components';
Vue.use(HelloWorld);
```

Importing the bundled `.js`:

```js
// main.js
import HelloWorld from 'component-library';
Vue.use(HelloWorld);
```

#### In-Component Import

For single use in a component or small set of components.

Importing the source `.vue` file:

```js
// component.vue
import HelloWorld from "component-library/src/components/HelloWorld";

export default {
  name: "Tester",
  components: {
    HelloWorld,
    Footer: () => import("component-library/src/components/Footer"),
  }
}
</script>
```

Importing the bundled `.js` components individually.

```js
// component.vue
import { HelloWorld } from "component-library";

export default {
  name: "Tester",
  components: {
    HelloWorld
  }
}
</script>
```

### Importing Styles

#### Loading Compiled CSS

The styles are written in SCSS and can be compiled upon building this library.
They can be loaded into an application that doesn't have SCSS loading
capability by referencing/importing the `component-library.css` file which is
created in the `dist` folder of this repository when executing `npm run build`.

In order to enable this functionality, an edit has to be made in
[`vue.config.js`](vue.config.js). The line `extract: false` must be removed
or set to true, so that the compiled `.css` file(s) are created upon build.

```js
import 'component-library/dist/component-library.css';
```

#### Loading SCSS Directly

In order to import and use styles across Vue.js applications, the application will need to have `sass`, `node-sass`, and `sass-loader` installed as dev dependencies. Once installed, the style files may be imported using the syntax below.

```scss
// import in vue.js style section
@import './styles/colors.scss';
@import './styles/font.scss';
@import './styles/typography-screen';
```

After importing, styles may be applied through classes, or through referencing the variables exported by the SASS.

```scss
/* importing variables in css */
#nav a {
  @extend .font-bold;
  color: $navy-blue;
}
#nav a.router-link-exact-active {
  color: $blue;
}
```

```html
<!-- using classes directly in html -->
<h1 class="typography-page-head-sm">Page Head SM</h1>
<h1 class="typography-page-head-lg">Page Head LG</h1>
```

## Design System

The structure of this project and component library are meant to emulate
a larger-scale Design System (such as Google's Material).

### Colors

Colors are referenced into components from the
[styles folder](src/styles/colors.scss).

### Icons

The icons are [FontAwesome 5](https://fontawesome.com/), and are loaded
in using [Vuetify.js](https://vuetifyjs.com/en/) &
[`@fortawesome/fontawesome-free`](https://www.npmjs.com/package/@fortawesome/fontawesome-free)

### Components

Components can be found in the [src/components](src/components) folder
in the root directory of this repository.

### Typography & Font

Typography & Font classes can be found under the
[src/styles](src/styles) folder. Currently, `font.scss` and
`typography-screen.scss` are available for font & typography styling.

## Developer Documentation

### Building

In order to contribute to this project, fork/clone this repository
locally. After cloning is completed, install the dependencies using `npm i`.

#### Preview

You can start a development server by running the commands below in the
root directory of this repository. Once the development server is
running, view localhost:8080 using Chrome and
[Vue.js Dev Tools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en).
This is a preview application and will allow you to visualize the
components/styles that will ultimately be compiled to the design system
library.

```cmd
npm run serve
```

or run the [Storybook](https://storybook.js.org/) instance instead of the preview app

```cmd
npm run storybook
```

#### Library

To build the project as a library, run `npm run build` in the root directory of the repository.

## Commands

The following commands are used to develop the project:

1. `npm run build` - Build the package distribution bundle.
2. `npm run build:app` - Build the preview web application.
3. `npm run build:all` - Build the preview application, distribution
   bundles, and the [Storybook](https://storybook.js.org/) static site.
4. `npm run serve` - Start a development server with live-reloading on
   changes. (Used for previewing individual components.)
5. `npm run lint` - Lint code using ESLint and Vue, AirBnB, and Prettier configs.
6. `npm test` - Run unit tests for the individual components in the package.
7. `npm run release` - Runs tests, build, and version incrementing
   procedures.
8. `npm run storybook` - Run [Storybook](https://storybook.js.org/) to
   see the component library in action.
9. `npm run build- storybook` - Build the
   [Storybook](https://storybook.js.org/) to a static application (for
   deploying design system documentation elsewhere)
