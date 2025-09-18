# web-dev-starter

This is a starter project for web development with no frameworks and minimal
dependencies. It is intended to be a starting point for web development projects
that are written in plain HTML, CSS, and JavaScript.

## Getting Started

To get started, clone this repository and run the following commands:

```bash
npm install
```

This will install the necessary dependencies for the project.

## Development

It is recommended to use the VSCode Live Server extension to run the project
locally. This will allow you to see changes in real-time as you make them. There
is no need to run a build process or refresh the page manually. Additionally,
you do not need to setup a local server to run the project.

## Testing

To run the tests for the project, run the following command:

```bash
npm test
```

## Accessibility Lab Answers

### Color

The current color for the text is the default text color of black, and the background color is currently set to green. Putting this into the WebAIM Contrast Checker, the current color scheme fails both the AA and AAA standards with a contrast ratio of 4.08:1. I fixed this by setting the background to white, giving it a ratio of 21:1 which passes all tests.

### Semantic HTML

Currently, navigating the site with a keyboard is a little difficult, as when tabbing through the site only the items in the navigation bar, the search bar and input button, audio controls, and related links are accessible.

The article text can be written differently to make it easier for screen readers to navigate. The main changes I've made are wrapping the navigation bar in the nav element, as well as wrapping the article in article tags with specific section tags separating the different areas. I also adjusted the related sidebar to be an aside element. For the overall text I've converted the font elements to proper h1-h3 heading elements and the specific text to use p tags.

### The Images

The issue of images not being accessible to screen reader uses can be easily fixed by adding alt attributes to the images which describe what the image shows. I have added alt attributes to both images.

### The Audio Player

For the audio, the way to add an alternative for deaf users is to provide a transcript, which I have done by adding a button that if pressed will showcase the transcript for the audio.

For users with older browsers which don't support the audio player, I've added a link to download the audio file instead.

### The Forms

We can add a label to the search form that can't be seen by sighted users by using the aria-label attribute.

We can fix the issue of the labels not being attached to the input fields by adding a label element that connects to the input through its id using for="id".

### Show/Hide Comment Control

This accessibility issue can be fixed by making the button an actual button element rather than just text within a div. I added a button element within the div to keep the styling and make the css still work properly, and I did the same for my show transcript button.
