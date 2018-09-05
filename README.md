# Gatsby + Tailwind w/Emotion

This demo is a quick example of combining [Tailwind CSS](https://tailwindcss.com) with [Emotion](https://emotion.sh) in a [Gatsby](https://gatsbyjs.org) site.

Check the inspector to see loaded CSS [in the demo](https://gatsby-tailwind-emotion.netlify.com/).

## Quickstart

```sh
# Clone the repo
git clone git@github.com:jlengstorf/gatsby-tailwind-demo.git
cd gatsby-tailwind-demo/

# Install dependencies
yarn

# Start the app in development mode
yarn develop
```

Make sure to use the right build command in your build settings e.g. if you use Netlify!
Per default Netlify sets it to `gatsby build` but you have to use `yarn run build` to run postcss before building the Gatsby site.

## Why does this exist?

CSS frameworks tend to generate large files, and it’s rare that a given page uses all of them. With CSS-in-JS solutions like Emotion, only the styles actually being used are attached to each component, which decreases the amount of style data sent for each page in a given app.

Thanks to [@bradlc](https://github.com/bradlc)’s work on [babel-plugin-tailwind-components](https://github.com/bradlc/babel-plugin-tailwind-components), we can easily get the power of Tailwind without the stylesheet bloat by passing Tailwind classes into Emotion.

This repo contains two distinct approaches: styled components and the `css()` function.

### Styled Components

[**Live demo**](https://gatsby-tailwind-emotion.netlify.com/)

With styled components, we can add Tailwind classes directly to a React component like so:

```jsx
/* global tw */
import React from 'react';
import styled from 'react-emotion';

const Heading = styled('h1')`
  ${tw`my-0 text-xl leading-tight`};
`;

export default () => <Heading>This is some text!</Heading>;
```

To see the CSS approach in this demo, start the app with `yarn develop`, then navigate to <http://localhost:8000>.

> **NOTE:** The Babel plugin will automatically process the `tw()` function, which means we don’t actually need to import it. ESLint will complain about this, however, so we need to add `tw` as a global variable.

### CSS Function

[**Live Demo**](https://gatsby-tailwind-emotion.netlify.com/css)

Using Emotion’s `css` function, we would do something like this:

```jsx
/* global tw */
import React from 'react';
import { css } from 'emotion';

const heading = css(tw`my-0 text-xl leading-tight`);

export default () => <h1 className={heading}>This is some text!</h1>;
```

To see the CSS approach in this demo, start the app with `yarn develop`, then navigate to <http://localhost:8000/css>.

Both approaches produce the same output — ultimately it comes down to your preference.

## Only the Styles We Need Are Included

If we inspect the page, we can see that only the styles for each given Tailwind class used by our component have been included. This means that we're able to use Tailwind without any concerns about stylesheet bloat over time.
