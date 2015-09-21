# Reading CSS

## Selectors
- Identifies which element in DOM to apply rules.
- Two ways to use selectors: `tag` (or `type`) names and `attribute` values
- Selector points to the  `declaration`
- The `declaration` contains `properties` and `values`

#### `tag name` selectors
- use the element tag name to identify which element to apply rules

#### `attribute` selector
- uses `class` and `id` tags

#### Selector Declaration

##### `X`- targets all elements according to type
```
example:
div {
  background-color:red;
}
//all `div` elements will have a red background.
    ```
##### `*`- targets all elements
```
example:
* {
  font-family: sans-serif;
}
//all text will be sans-serif.
    ```

##### `#X`- targets a unique ID element
```
example:
* {
  background-color:red;
}

#exception {
  background-color:green;
}
//all elements will have a red background except the one with an id = "exception".
    ```
##### `.X`- targets a class name
```
example:
* {
  background-color:red;
}

.warning {
  background-color:yellow;
}
//all elements will have a red background except the elements with className `warning` will have a yellow background.
```
##### `X Y`- targets all Y descendants of element X
```
example:
* {
  background-color:red;
}

div li {
  background-color:blue;
}
//all elements will have a red background except the `li` elements inside a `div` element will have a blue background.
```
##### `a:link`- _pseudo-class_ that targets all anchor tags not yet clicked
```
example:
a:link {
  text-decoration:none;
}

//No links will be underlined
```
##### `a:visited`- _pseudo-class_ that targets all anchor tags that have been clicked
```
example:
a:link {
  color:red;
}

a:visited {
  color:orange;
}
//Links that have not been clicked will be red.  Links that have been clicked will be orange.
```
##### `X + Y`- targets first adjacent selector. (only the element immediately following the first element.)
```
example:
<div id = "first">First</div>
<div>Second</div>

#first + div {
  background-color:red;
}

//Second `div` will have red background.
```
##### `X > Y`- targets direct children only
```
example:
<ul>
  <li>//blue
    <ol>
      <li></li> //tomato
      <li></li> //tomato
    </ol>
  </li>
  <li></li> //blue
  <li></li> //blue
  </div>
</div>

ul li {
  background-color:tomato;
}
//This will turn all `li` elements within the `ul` tomato including children of the `ol`.

ul > li {
  background-color:blue;
}
//This will only turn the `li` elements that are direct children of the `ul` blue.
```
##### `X:hover`- targets specified element when mouse hovers.
```
example:
a:link {
  background-color:red;
}

a:link:hover {
  background-color:blue;
}
//Link background will be red until mouse hovers, then it will turn blue.

```
##### `X:nth-child(n)`- targets specific child of element by position number
```
example:
<div>
  <p>"first"</p>
  <p>"second"</p>
  <p>"third"</p> //turns blue
  <p>"forth"</p>
</div>

div:nth-child(3) {
  color:blue;
}
```
## Properties

### Typographic Elements

#### [`color` property](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

The text color of an element and its decorations (??)

##### Possible Values: [any `<color>` value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
- text color of an element and its decorations

- hexadecimal color value: `#012345`, `#CCC`
- color keyword: `cornflowerblue`, `tomato`, `orange`
- RGB decimal notation: `rgb(0,0,0)`, `rgb(255, 255, 255)`
- RGBa (transparency) notation: `rgba(0,0,0,0)`, `rgba(255, 255, 255, 0.8)`
- HSL decimal notation: `hsl(0, 100%, 50%)`

#### [`font-*` properties](https://developer.mozilla.org/en-US/docs/Web/CSS/font)

##### [`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
- specify a prioritized list of font family names or generic names for selected element.
- ``` example- font-family: 'Roboto', sans-serif;```

##### [`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
- specify size of font.  May change size of other items since it is used to compute value of em and ex <length> units.
- ```example font-size: 20pt```

##### [`font-weight`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
- specify weight or boldness of font
- ```example font-weight: bold```
- ``` example font-weight: 300```

##### [`font-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
- allows you to select italic or oblique faces within font-family
- ```example font-style:italic```

##### [`font-variant`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant)
- shorthand for longhand properties: `font-variant-caps`, `font-variant-numeric`, `font-variant-alternates`, `font-variant-ligatures`, `font-variant-east-asian`.
- ```example font-variant: small-caps```

#### `text-*` properties

##### [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
- describes how inline content like text is aligned in its parent block element.
- ```example text-align: center```

##### [`text-decoration`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
- used to set text formatting to `underline`, `overline`, `line-through`, or `blink`
- ```example text-decoration: underline red```

##### [`text-indent`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
- specify how much horizontal space should be left before beginning of first line of text content of an element
- ```text-indent: 5em```

##### [`text-overflow`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow)
- determines how overflowed content that is not displayed is signaled to user
- ```example text-overflow: clip //truncates text at limit of content area```

##### [`text-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
- adds shadow to text.
- ```text-shadow: 5px 5px #CCC```


#### [`line-*` properties]()

##### [`letter-spacing`](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
- specify behavior between text characters
- ```example letter-spacing: 3px```

##### [`line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- specify minimum height of line boxes within element on block-level elements
- specify the height used to calculate line box height on non-replaced inline elements.
- ``` line-height: 3m5```

### Spacial Elements

#### [`box model` property](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- Each element is represented as a box.  

![Box-model](https://mdn.mozillademos.org/files/8685/boxmodel-(3)

> [From developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)

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

##### `box-sizing` property
-  box starts on upper left hand margin.
- used to alter default CSS box model to calculate width and height of elements.
- `content-box` default style, width and height are measured including content but not padding, border, or margin.
- `border-box` width and height including padding and border, but not margin

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
- can be `left` or `right`
- wrapping text around images.
- changes `width` of the element.
- other adjacent elements move.

##### `clear` property
- controls the behavior of floats by allowing the tagged element to "clear" any floating elements.  Clear can take values of `left`, `right`, or `both`

##### `@media` media query
- a "responsive design" tool used with percentage values to display layout in 1 column when browser is too small to fit sidebar.
