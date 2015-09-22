## `<html>`

the _HTML Root Element_ which is the "Adam and/or Eve" of all elements.

* _parents_: none
* _content_: _only_ one[`<head>`](#head) and one [`<body>`](#body)
* _display_: `block`, maybe? I mean, I can see it... RESEARCH!

### Attributes

* Global Attributes
* `xmlns` specifies XML Namespace of document.

<hr>

## `<div>`

A generic page division that should only be used if no other, more semantic choice is appropriate... and because @al-the-x might kill me if I do when I could use [`<section>`](#section) instead.

* _parents_: anything that accepts [Flow Content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content), which is apparently a lot of things.
* _content_: any [Flow Contant](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content), palpable content (real, actual content included in other tags...)
* _display_: `block`

### Attributes

* Global Attributes

<hr>

## `<!DOCTYPE>`

Document type declaration is the first thing in HTML document, signifying to the browser what version of HTML is being used

* _parents_: none
* _content_: all the things
* _display_: `none`

<hr>

## `<!-- -->`

Comment tag makes content "invisible" or "unreadable to DOM.

<hr>

## `<head>`

Gives general info about document.  Includes title and links to stylesheets, fonts, icons, and javascript

* _parents_: `<html>`
* _content_: `<title>`. `<meta>`, `<link>`, `<script>`
* _display_: `none`

### Attributes

* Global Attributes

<hr>

## `<body>`

Represents content of HTML document.  Like Highlander, there can be only one.

* _parents_: Must be second element of `<html>`
* _content_: [Flow Content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
* _display_: `block`

### Attributes

* Global Attributes

<hr>

## `<section>`

Represents a generic section of a document, a thematic grouping of content, typically with a heading (`<h1>`, etc.) as a child

* _parents_: Any element accepting flow, cannot descend from `<address>`
* _content_: Sectioning, Flow, Palpable
* _display_: `block`

### Attributes

* Global Attributes

<hr>

## `<span>`

Generic inline container for phrasing content

* _parents_: And element that accepts phrasing or flow content
* _content_: Phrasing
* _display_: `block`

### Attributes

* Global Attributes

<hr>

## `<p>`

Represents a paragraph of text

* _parents_: Any element that accepts flow content
* _content_: Phrasing
* _display_: `block`

### Attributes

* Global Attributes

<hr>

## `<ul>`

Represents unordered list of items, typically displayed with a bullet

* _parents_: Any element that accepts flow content
* _content_: Flow
* _display_: `list-item`

### Attributes

* Global Attributes

<hr>

## `<nav>`

Represents section of page that links to other pages or other parts of a page

* _parents_: Any element that accepts flow content
* _content_: Flow, Sectioning, Palpable
* _display_: `block`

### Attributes

* Globla Attributes

<hr>

## `<li>`

Represents an item in a list

* _parents_: `<ol>`, `<ul>`, or `<menu>`
* _content_: Flow Content
* _display_: `block`

### Attributes

* Global Attributes

<hr>

## `<script>`

used to embed or reference executable script within HTML documnet

* _parents_: Any element that accepts metadata content or phrasing contnet
* _content_: Metadata, Flow, Phrasing
* _display_: `none`

### Attributes

* Global Attributes

<hr>
<hr>

## [Global Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
* `class` -- a space-separated list of category names
* `hidden` -- a Boolean attribute indicating element is not yet or is no longer relevant.
* `id` -- unique identifier that is unique to entire document.
* `lang` -- helps define the languages of the element
* `style`-- a way to add CSS style within HTML file (not recommended)
* `
