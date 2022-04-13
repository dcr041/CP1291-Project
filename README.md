# CP1291-Project
By implementing this plugin on your website, it will gain the ability to enable/disable dark/light mode with a brightness control feature and a smooth color transition effect.

## Description:
This plugin uses jQuery to toggle between CSS classes and utilizes local storage API to persist the dark mode across web pages and refreshes. Users can feel uncomfortable while reading or browsing content at night due to light/bright UI designs and colorful interfaces. This plugin will help the user experience with the dark mode toggle feature and brightness control. Chrome, Safari, Firefox, Opera, IE7+, IOS, Android and windows phone are supported. Fully customizable with CSS. Can apply dark mode to specific selected items. Built-in brightness controller. Automatically enable at 8:00 PM and disable at 4:00 AM. It will convert existing CSS into night mode. It will create all necessary elements. Demo the plugin using the index.html file included in the download. This demo will also include the use of the style.css file. Download the jquery.night-mode.js file and add it to your existing website. Inside of your JavaScript file add nightMode() with “body” in the DOM ready function to implement. If you use the included app.js file, the previous step will not be necessary. You can customize the plugin by adding code to the nightMode() function. To use the plugin, use the mouse to click on the night mode button to toggle on/off. Use the slider to adjust the brightness.

# Download & Installation
## Step 1:
- Download the files in the git repo https://github.com/dcr041/CP1291-Project or [click here](https://github.com/dcr041/CP1291-Project/archive/refs/heads/main.zip)
- Unzip the downloaded folder and add the following files to your existing website:
  - [jquery-3.6.0.min.js](https://github.com/dcr041/CP1291-Project/blob/main/jquery-3.6.0.min.js)

## Step 2:
Add the following script tags to your HTML file:
```html
<script src="jquery-3.6.0.min.js" type="text/javascript"></script>
<!--- YOUR JS FILE GOES HERE -->
```

##Step 3: How to Implement
You do not need to create anything in your CSS file to use this plugin, it will convert your existing CSS into night mode. You do not need to create anything in your HTML file either, it will automatically create all necessary elements. Just attach nightMode() with the "body" tag in the DOM ready function of your JavaScript file.
```js
$(document).ready( () => {
  $("body").nightMode();
});
```

## Step 4: Customize
If you would like to automatically enable night mode from 8:00 PM to 4:00 AM, update the following option:
```js
$(document).ready( () => {
  $("body").nightMode({
    autoEnable: true,
});
```

If you do not want to apply night mode to a specific container, div, section or selector, use the preventDefault option to prevent changes.
```js
$(document).ready( () => {
  $("body").nightMode({
    preventDefault: "a, pre, .className, #id",
});
```

If you would like to turn off the brightness control feature, update the following option:
```js
$(document).ready( () => {
  $("body").nightMode({
    brightnessController: false,
});
```

If you would like to customize the text that will appear above the slider, update the following option:
```js
$(document).ready( () => {
  $("body").nightMode({
    adjustText: "Would you like to adjust brightness?",
});
```
