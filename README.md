# ARIA Live MFE

A demo for showcasing a known bug with ARIA live regions within an app that contains [micro-frontend environments (MFEs)](https://micro-frontends.org/).

## Background

An [ARIA live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) is an HTML element marked as containing content that can dynamically change, so assistive technologies will know to observe them for changes and announce any new content to users. While a useful tool, they are known to behave inconsistently across various screen readers and browsers. There is a particular issue observed with macOS VoiceOver and Safari, where an announcement is interrupted when multiple polite live regions are updated simultaneously or at a similar time:

![Screenshot of demo showcasing VoiceOver bug within a micro-frontend-based app](https://user-images.githubusercontent.com/18368713/279130954-1c9871bf-8a15-437f-b675-d09a1cf46857.png)

This problem has been identified by [Gupta (2019)](https://gaurav5430.medium.com/quick-accessibility-wins-multiple-aria-live-on-single-action-caveat-b79a6f41e7cc) and [the community of a11ysupport.io (2022)](https://a11ysupport.io/tests/tech__aria__aria-live#assertion-aria-aria-live_attribute-convey_value_polite-html-div_element). This bug is particularly problematic for apps using a micro-frontend environment (MFE) architecture, as its possible multiple micro-frontends may attempt to update a polite live region at the same time. As per MFE design principles, no micro-frontend should be required to alert others that they intend to trigger an assistive technology announcement.

## Demo implementation

This app contains two independent micro-frontends, `app-a` and `app-b`, along with a host app, `root-app`, which loads the code from both these micro-frontends. [Module federation](https://webpack.js.org/concepts/module-federation/), a bundler technique, is used to create a MFE setup by exposing the code of the two micro-frontends to the `root-app`.

## Starting the demo

To start the demo, clone the repository, then run the following:

```shell
npm run build
npm start
```

