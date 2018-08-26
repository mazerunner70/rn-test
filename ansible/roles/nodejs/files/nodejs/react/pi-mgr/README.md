Decisions on file organisation

Within the src directory, files are organised:
 [src/components](#src-components) - this contains the React components in development
 src/screens
 src/layouts
 src/containers
 src/state
 
 The logic for this top level informs from the [re-ducks doc](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be), that described separating code into state management and presentation, with labels 'redux' and 'views'. I kept the idea, though renamed state management to 'state'.
 Additionally, I chose to move up the subdirectories of views (components etc) as they would not be confused with the state directory, and so shorten file paths.
 Of the other files, they loosely follow how React elements compose up to a page, ie Components at  the lowest level to maximise reuse, layouts to place those components, containers to manage state across the components, and screens to manage routing. References supporting these are [(screens)](https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76), [(layout)](https://github.com/monvillalon/react-page-layout), and [(containers)](https://medium.com/@learnreact/container-components-c0e67432e005).


# `src-components`

|-> component-name
    |-> index.js
    |-> component files
    |-> storybook

The most traditional of the directories, these are the component files, deliberately as dumb and props-driven as possible, all must work against a storybook.















This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

