# Reading CSS

## Selectors

## Properties

#### `display` property
- every `element` has a default display value.  `block` or `inline` are most common.

##### `block` element
- `div` is the standard block-level element.  A block-level element starts on a new line and stretches out to left and right as far as it can.  Other default block-level elements are `p` (paragraph), `form`, `header`, `footer`, and `section` (among others).

##### `inline` element
- `span` is the standard inline element.  An inline element wraps some text inside a paragraph without disrupting flow of that paragraph.  `a` (anchor) is the most common inline element since it is used for links.

##### `none`
- Specialized elements like `script` use this as their default.  Often used by JavaScript to hide or show elements without creating or deleting them. _(Differs from `visibility` in that `visibility:hidden` will hide element but it will still take up space.)_

##### Other display values
- [For a full list of display values see MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

##### `margin:auto`
- Setting `width` of a block-level element will prevent it from stretching to the edges of its container on left and right. Left and Right margins can be set to `auto` to center the element within its container.  

##### `max-width`
- This is better than `width-auto` because it accounts for small windows.

#### `the box model`
- 
