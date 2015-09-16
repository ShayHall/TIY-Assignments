# Reading CSS

## Selectors
- Identifies which element in DOM to apply rules.
- Two ways to use selectors: `tag` (or `type`) names and `attribute` values
- Selector points to the  `declaration`
- The `declaration` contains `properties` and `values`


#####
## Properties

#### [`color` property](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

The text color of an element and its decorations (??)

##### Possible Values: [any `<color>` value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
- a hexadecimal color value: `#012345`, `#CCC`
- a color keyword: `cornflowerblue`, `purple`, `orange`
- RGB decimal notation: `rgb(0,0,0)`, `rgb(255, 255, 255)`
- RGBa (transparency) notation: `rgba(0,0,0,0)`, `rgba(255, 255, 255, 0.8)`
- HSL decimal notation: `hsl(0, 100%, 50%)`
- text color of an element and its decorations

#### [`display` property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- every `element` has a default display value.  `block` or `inline` are most common.

##### `block` element
- `div` is the standard block-level element.  A block-level element starts on a new line and stretches out to left and right as far as it can.  Other default block-level elements are `p` (paragraph), `form`, `header`, `footer`, and `section` (among others).

##### `inline` element
- `span` is the standard inline element.  An inline element wraps some text inside a paragraph without disrupting flow of that paragraph.  `a` (anchor) is the most common inline element since it is used for links.

##### `inline-block` element
- like an `inline` element but can have `width` and `height`.

##### `none`
- Specialized elements like `script` use this as their default.  Often used by JavaScript to hide or show elements without creating or deleting them. _(Differs from `visibility` in that `visibility:hidden` will hide element but it will still take up space.)_

##### `table model values`
- a set of CSS values that mostly behave like HTML table elements.

##### Other display values - [For a full list of display values see MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

#### [`position` property](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
##### `static`
- This is the default position value.  

##### `relative`
- behaves like static, but responds to `top`, `bottom`, `left`, and `right` being changed.

##### `fixed`
- positioned relative to viewport.  It will stay in same position even if page is scrolled.  It responds to `top`, `bottom`, `left`, and `right` being changed.

##### `absolute`
- behaves like `fixed`, but relative to nearest _positioned_ ancestor (any ancestor that is not `static` instead of viewport.

#### [`float` property](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
- intended for wrapping text around images. can be `left` or `right`

##### `clear` property
- controls the behavior of floats by allowing the tagged element to "clear" any floating elements.  Clear can take values of `left`, `right`, or `both`

##### `@media` media query
- a "responsive design" tool used with percentage values to display layout in 1 column whe browser is too small to fit sidebar.

#### [`box model` property](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- Each element is represented as a box.  

##### `margin-*`
- Setting `width` of a block-level element will prevent it from stretching to the edges of its container on left and right. Left and Right margins can be set to `auto` to center the element within its container.  

##### `padding-*`
-  assigns padding space on all sides of an element between content and border.

##### `border-*`  
-  assigns border property values like `width`, `style`, and `color`

##### `max-*`
- set the maximum width/height of given element.  This is better than `*-auto` because it accounts for small windows.

##### `min-*`
- set the minimum width/height of given element

##### `box-sizing`
-  used to alter default CSS box model to calculate width and height of elements.
- `content-box` default style, width and height are measured including content but not padding, border, or margin.
- `border-box` width and height including padding and border, but not margin
