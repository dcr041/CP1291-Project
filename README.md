# CP1291-Project
By implementing this plugin on your website, it will gain the ability to enable/disable dark/light mode with a brightness control feature and a smooth color transition effect.

## Description:
This plugin uses jQuery to toggle between CSS classes and utilizes local storage API to persist the dark mode across web pages and refreshes. Users can feel uncomfortable while reading or browsing content at night due to light/bright UI designs and colorful interfaces. This plugin will help the user experience with the dark mode toggle feature and brightness control. Chrome, Safari, Firefox, Opera, IE7+, IOS, Android and windows phone are supported. Fully customizable with CSS. Can apply dark mode to specific selected items. Built-in brightness controller. Automatically enable at 8:00 PM and disable at 4:00 AM. It will convert existing CSS into night mode. It will create all necessary elements. Demo the plugin using the index.html file included in the download. This demo will also include the use of the style.css file. Download the jquery.night-mode.js file and add it to your existing website. Inside of your JavaScript file add nightMode() with “body” in the DOM ready function to implement. If you use the included app.js file, the previous step will not be necessary. You can customize the plugin by adding code to the nightMode() function. To use the plugin, use the mouse to click on the night mode button to toggle on/off. Use the slider to adjust the brightness.

# Download & Installation
## Step 1:
- Download the files in the git repo https://github.com/dcr041/CP1291-Project or [click here](https://github.com/dcr041/CP1291-Project/archive/refs/heads/main.zip)
- Unzip the downloaded folder and add the following files to your existing website:
  - [jquery-3.6.0.min.js](https://github.com/dcr041/CP1291-Project/blob/main/jquery-3.6.0.min.js)
  - [jquery.night.mode.js](https://github.com/dcr041/CP1291-Project/blob/main/jquery.night.mode.js)
- If you would like to demo the plugin, launch the [index.html](https://github.com/dcr041/CP1291-Project/blob/main/index.html) file in your default browser. The demo will make use of the provided [demo.css](https://github.com/dcr041/CP1291-Project/blob/main/demo.css) and [demo.js](https://github.com/dcr041/CP1291-Project/blob/main/demo.js) files.

## Step 2:
Add the following script tags to your HTML file:
```html
<script src="jquery-3.6.0.min.js" type="text/javascript"></script>
<!--- YOUR JS FILE GOES HERE -->
<script src="jquery.night.mode.js" type="text/javascript"></script>
```

## Step 3: How to Implement
You do not need to create anything in your CSS file to use this plugin, it will convert your existing CSS into night mode. You do not need to create anything in your HTML file either, it will automatically create all necessary elements. Just attach nightMode() with the "body" tag in the DOM ready function of your JavaScript file.
```js
$(document).ready( () => {
  $("body").nightMode();
});
```
If you like the appearance of the "Night Mode" plugin in the demo, implement the following options:
Add the Font Awesome icons stylesheet link to your HTML file:
```html
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
```
Add the following styles to your CSS file:
```css
.night-mode-trigger {
    position: fixed;
    top: 120px;
    right: 0;
    padding: 10px;
    font-size: 18px;
    background: #212121;
    color: #fff;
    border: 0;
    outline: 0;
    border-radius: 3px;
    text-align: center;
}
.brightness-message{
    position: fixed;
    top: 0px;
    right: 0;
    padding: 10px;
    font-size: 18px;
    background: #212121;
    color: #fff;
    border: 0;
    outline: 0;
    border-radius: 3px;
    text-align: center;
}
.confirm:hover{
    background: #333;
    transition: .2s;
}
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
