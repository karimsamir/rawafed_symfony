#Introducing bxSlider 4.0
##The fully-loaded, responsive jQuery content slider

###Why should I use this slider?
* Fully responsive - will adapt to any device
* Horizontal, vertical, and fade modes
* Slides can contain images, video, or HTML content
* Full callback API and public methods
* Small file size, fully themed, simple to implement
* Browser support: Firefox, Chrome, Safari, iOS, Android, IE7+
* Tons of configuration options

For complete documentation, tons of examples, and a good time, visit:

[http://bxslider.com](http://bxslider.com)

Written by: Steven Wanderski - [http://stevenwanderski.com](http://stevenwanderski.com)

Let's get on with it!

##Installation

###Step 1: Link required files

First and most important, the jQuery library needs to be included (no need to download - link directly from Google). Next, download the package from this site and link the bxSlider CSS file (for the theme) and the bxSlider Javascript file.

```html
<!-- jQuery library (served from Google) -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<!-- bxSlider Javascript file -->
<script src="/js/jquery.bxslider.min.js"></script>
<!-- bxSlider CSS file -->
<link href="/lib/jquery.bxslider.css" rel="stylesheet" />
```

###Step 2: Create HTML markup

Create a `<ul class="bxslider">` element, with a `<li>` for each slide. Slides can contain images, video, or any other HTML content!

```html
<ul class="bxslider">
  <li><img src="/images/pic1.jpg" /></li>
  <li><img src="/images/pic2.jpg" /></li>
  <li><img src="/images/pic3.jpg" /></li>
  <li><img src="/images/pic4.jpg" /></li>
</ul>
```

###Step 3: Call the bxSlider

Call .bxslider() on `<ul class="bxslider">`. Note that the call must be made inside of a $(document).ready() call, or the plugin will not work!

```javascript
$(document).ready(function(){
  $('.bxslider').bxSlider();
});
```

##Configuration options

###General

**mode**  
Type of transition between slides
```
default: 'horizontal'  
options: 'horizontal', 'vertical', 'fade'
```

**speed**  
Slide transition duration (in ms)
```
default: 500  
options: integer
```

**slideMargin**  
Margin between each slide
```
default: 0  
options: integer
```

**startSlide**  
Starting slide index (zero-based)
```
default: 0  
options: integer
```

**slideSelector**  
Element to use as slides (ex. <code>'div.slide'</code>).<br />Note: by default, bxSlider will use all immediate children of the slider element
```
default: ''  
options: jQuery selector
```

**infiniteLoop**  
If <code>true</code>, clicking "Next" while on the last slide will transition to the first slide and vice-versa
```
default: true  
options: boolean (true / false)
```

**hideControlsOnEnd**  
If <code>true</code>, "Next" control will be hidden on last slide and vice-versa<br/>Note: Only used when <code>infiniteLoop: false</code>
```
default: false  
options: boolean (true / false)
```

**easing**  
The type of "easing" to use during transitions. Include <code>plugins/jquery.easing.1.3.js</code> for many options.<br />See <a href="http://gsgd.co.uk/sandbox/jquery/easing/" target="_blank">http://gsgd.co.uk/sandbox/jquery/easing/</a> for more info
```
default: 'swing'  
options: 'swing', 'linear' (see the above file for more options)
```

**captions**  
Include image captions. Captions are derived from the image's <code>title</code> attribute
```
default: false  
options: boolean (true / false)
```

**ticker**  
Use slider in ticker mode (similar to a news ticker)
```
default: false  
options: boolean (true / false)
```

**adaptiveHeight**  
Dynamically adjust slider height based on each slide's height
```
default: false  
options: boolean (true / false)
```

**adaptiveHeightSpeed**  
Slide height transition duration (in ms). Note: only used if <code>adaptiveHeight: true</code>
```
default: 500  
options: integer
```

**touchEnabled**  
If <code>true</code>, slider will allow touch swipe transitions
```
default: true  
options: boolean (true / false)
```

**swipeThreashold**  
Amount of pixels a touch swipe needs to exceed in order to execute a slide transition. Note: only used if <code>touchEnabled: true</code>
```
default: 500  
options: integer
```

**video**  
If any slides contain video, set this to <code>true</code>. Also, include <code>plugins/jquery.fitvids.js</code><br />See <a href="http://fitvidsjs.com/" target="_blank">http://fitvidsjs.com/</a> for more info
```
default: false  
options: boolean (true / false)
```

###Pager

**pager**  
If <code>true</code>, a pager will be added
```
default: true  
options: boolean (true / false)
```

**pagerType**  
If <code>'full'</code>, a pager link will be generated for each slide. If <code>'short'</code>, a x / y pager will be used (ex. 1 / 5)
```
default: 'full'  
options: 'full', 'short'
```

**pagerShortSeparator**  
If <code>pagerType: 'short'</code>, pager will use this value as the separating character
```
default: ' / '  
options: string
```

**pagerSelector**  
Element used to populate the populate the pager. By default, the pager is appended to the bx-viewport
```
default: ''  
options: jQuery selector
```

**pagerCustom**  
Parent element to be used as the pager. Parent element must contain a <code>&lt;a data-slide-index="x"&gt;</code> element for each slide. See example <a href="http://bxslider.com/examples/thumbnail-method-1">here</a>. Not for use with dynamic carousels.
```
default: null  
options: jQuery selector
```

**buildPager**  
If supplied, function is called on every slide element, and the returned value is used as the pager item markup.<br />See <a href="/examples">examples</a> for detailed implementation
```
default: null  
options: function(slideIndex)
```

###Controls

**controls**  
If <code>true</code>, "Next" / "Prev" controls will be added
```
default: true  
options: boolean (true / false)
```

**nextText**  
Text to be used for the "Next" control
```
default: 'Next'  
options: string
```

**prevText**  
Text to be used for the "Prev" control
```
default: 'Prev'  
options: string
```

**nextSelector**  
Element used to populate the "Next" control
```
default: null  
options: jQuery selector
```

**prevSelector**  
Element used to populate the "Prev" control
```
default: null  
options: jQuery selector
```

**autoControls**  
If <code>true</code>, "Start" / "Stop" controls will be added
```
default: false  
options: boolean (true / false)
```

**startText**  
Text to be used for the "Start" control
```
default: 'Start'  
options: string
```

**stopText**  
Text to be used for the "Stop" control
```
default: 'Stop'  
options: string
```

**autoControlsCombine**  
When slideshow is playing only "Stop" control is displayed and vice-versa
```
default: false  
options: boolean (true / false)
```

**autoControlsSelector**  
Element used to populate the auto controls
```
default: null  
options: jQuery selector
```

###Auto

**auto**  
Slides will automatically transition
```
default: false  
options: boolean (true / false)
```

**pause**  
The amount of time (in ms) between each auto transition
```
default: 4000  
options: integer
```

**autoStart**  
Auto show starts playing on load. If <code>false</code>, slideshow will start when the "Start" control is clicked
```
default: true  
options: boolean (true / false)
```

**autoDirection**  
The direction of auto show slide transitions
```
default: 'next'  
options: 'next', 'prev'
```

**autoHover**  
Auto show will pause when mouse hovers over slider
```
default: false  
options: boolean (true / false)
```

**autoDelay**  
Time (in ms) auto show should wait before starting
```
default: 0  
options: integer
```

###Carousel

**minSlides**  
The minimum number of slides to be shown. Slides will be sized down if carousel becomes smaller than the original size.
```
default: 1  
options: integer
```

**maxSlides**  
The maximum number of slides to be shown. Slides will be sized up if carousel becomes larger than the original size.
```
default: 1  
options: integer
```

**moveSlides**  
The number of slides to move on transition. This value must be <code>>= minSlides</code>, and <code><= maxSlides</code>. If zero (default), the number of fully-visible slides will be used.
```
default: 0  
options: integer
```

**slideWidth**  
The width of each slide. This setting is required for all horizontal carousels!
```
default: 0  
options: integer
```

###Callbacks

**onSliderLoad**  
Executes immediately after the slider is fully loaded
```
default: null  
options: function()
```

**onSlideBefore**  
Executes immediately before each slide transition. Function argument is the target (next) slide element.
```
default: null  
options: function($slideElement)
```

**onSlideAfter**  
Executes immediately after each slide transition. Function argument is the current slide element (when transition completes).
```
default: null  
options: function($slideElement)
```

**onSlideNext**  
Executes immediately before each "Next" slide transition. Function argument is the target (next) slide element.
```
default: null  
options: function($slideElement)
```

**onSlidePrev**  
Executes immediately before each "Prev" slide transition. Function argument is the target (prev) slide element.
```
default: null  
options: function($slideElement)
```

###Public methods

**goToSlide**  
Performs a slide transition to the supplied slide index (zero-based)
```
example:  
slider = $('.bxslider').bxSlider();
slider.goToSlide(3);  
```

**goToNextSlide**  
Performs a "Next" slide transition
```
example:  
slider = $('.bxslider').bxSlider();
slider.goToNextSlide();  
```

**goToPrevSlide**  
Performs a "Prev" slide transition
```
example:  
slider = $('.bxslider').bxSlider();
slider.goToPrevSlide();  
```

**startAuto**  
Starts the auto show. Provide an argument <code>false</code> to prevent the auto controls from being updated.
```
example:  
slider = $('.bxslider').bxSlider();
slider.startAuto();  
```

**stopAuto**  
Stops the auto show. Provide an argument <code>false</code> to prevent the auto controls from being updated.
```
example:  
slider = $('.bxslider').bxSlider();
slider.stopAuto();  
```

**getCurrentSlide**  
Returns the current active slide
```
example:  
slider = $('.bxslider').bxSlider();
var current = slider.getCurrentSlide();  
```

**getSlideCount**  
Returns the total number of slides in the slider
```
example:  
slider = $('.bxslider').bxSlider();
var slideQty = slider.getSlideCount();  
```

Long live Zep.