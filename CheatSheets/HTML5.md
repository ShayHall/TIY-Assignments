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

## `<head>` <a id="head"></a>

Gives general info about document.  Includes title and links to stylesheets, fonts, icons, and javascript

* _parents_: `<html>`
* _content_: `<title>`. `<meta>`, `<link>`, `script`
* _display_: `none`


### Attributes

* Global Attributes

<hr>

## `<body>` <a id="body"></a>

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

## `<nav>`

Represents section of page that links to other pages or other parts of a page

* _parents_: Any element that accepts flow content
* _content_: Flow, Sectioning, Palpable
* _display_: `block`

### Attributes

* Globla Attributes

<hr>

## `<` `script` `>`

used to embed or reference executable script within HTML documnet

* _parents_: Any element that accepts metadata content or phrasing content
* _content_: Metadata, Flow, Phrasing
* _display_: `none`

### Attributes

* Global Attributes

<hr>

# Lists

## `<ul>`

Represents unordered list of items, typically displayed with a bullet

* _parents_: Any element that accepts flow content
* _content_: Flow
* _display_: `list-item`

### Attributes

* Global Attributes

<hr>

## `<ol>`

Represents ordered list of items, typically displayed with a preceding number like numerals, letters, Roman numerals.

* _parents_: Any element that accepts flow content
* _content_: Flow
* _display_: `list-item`

### Attributes

* Global Attributes

<hr>

## `<li>`

Represents an item in a list

* _parents_: `<ol>`, `<ul>`, or `<menu>`
* _content_: Flow Content
* _display_: `block`

### Attributes

* Global Attributes

<hr>

## `<dl>`

encloses a list of pairs of terms and descriptions
* _parents_: Any element that accepts flow content
* _content_: Flow, Palpable if `<dl>` children include one name-value pair
* _display_: `block`

### Attributes

* Global Attributes

<hr>

## `<dt>`

Identifies a term in a definition list.

* _parents_: Can only be a child of a `<dl>`, comes before a `<dt>` or `<dd>`
* _content_: None
* _display_: `block`

### Attributes

* Global Attributes

<hr>

## `<dd>`

Indicates description of a term in a description list (`<dl>`)

* _parents_: Can only be a child of a `<dl>`, must follow `<dt>` or another `<dd>`
* _content_: None
* _display_: `block`

### Attributes

* Global Attributes

<hr>

# Forms:
A variety of elements that can be used together to create forms which a user can fill out and submit to a Web site or application.


## `<form>`

represents a document section that contains ineractive controls to submit information to a web server

* _parents_: Any element that accepts flow content
* _content_: Flow content, but not containing <form> elements
* _display_:

### Attributes

* Global Attributes

<hr>

## `<button>`

represents a clickable button

* _parents_: Any element that accepts phrasing content
* _content_: Phrasing
* _display_:

### Attributes

* Global Attributes

### Type Values
* `submit` default attribute, allows button to submit the form data to server
* `reset` resets all controls to their initial value
* `button` no default behavior. "can have client side scripts associate with the element's events, which are triggered when the events occur"???

<hr>

## `<input>`

used to create interactive controls for web-based forms in order to accept data from user.  Functionality depends on `type`

* _parents_: Any element that accepts phrasing content
* _content_: Flow, listed, submittable, resettable, form-associated, phrasing, and if type is not `hidden`, labellable and palpable.
* _display_:

### Attributes

* Global Attributes

#### Type Values
* `button` push button with no default behavior
* `checkbox` must use the value attribute to define value submitted by this item.
* `file` lets user select a file, use the accept attribute to define the types of files available
* `hidden` control that is not displayed, but whose value is submitted to server
* `image` graphical submit button, use "src" attribute to define source of image and "alt" attribute to define alternative text.  "height" and "width" attributes can define size of image in pixels.
* `password` single-line text field whose value is obscured, use maxlength attribute to specify maximum length of value that can be entered
* `radio` must use the value attribute to define value submitted by this item.  Use checked attribute to indicate whether this item is selected by default.
* `reset` resets contents of form to default value
* `submit` button that submits the form
* `text` single-line text field; line breaks automatically removed from input value

<hr>

## `<label>`

represents a caption for an item in a user interface.  can be associated with a control either by placing the control element inside `<label>` element or by using the `for` attribute.
* _parents_: Any element that accepts phrasing content
* _content_: flow, phrasing, interactive, form-associated, palpable
* _display_:

### Attributes

* Global Attributes
* for- ID of a labelable form-related element in same document as label element.  first element with matching ID is the labeled control for label element.

<hr>

## `<fieldset>`

used to group several controls as well as `<label>`s within a web form
* _parents_: Any element that accepts flow
* _content_: Flow, sectioning root, listed, form-associated, palpable
* _display_:

### Attributes

* Global Attributes

<hr>

## `<legend>`

represents a caption for the content of its parent `<fieldset>`
* _parents_: `<fieldset>`
* _content_: Phrasing
* _display_: none

### Attributes

* Global Attributes

<hr>

## `<table>`

represents data in two demensions or more

* _parents_: Any element accepting flow
* _content_: Flow Content in this order: optional `<caption>`, 0 or more `<colgroup>`, optional `<thead>`, one of the two alternatives: one `<tfoot>` followed by 0 or more `<tbody>` or one or more `<tr>`, a second alternative followed by an optional `<tfoot>`: either 0 or more `<tbody>` or one or more `<tr>`
* _display_:

### Attributes

* Global Attributes

<hr>

## `<datalist>`

contains set of `<option>` elements representing the values availabe for other controls

* _parents_: any element that accepts phrasing content
* _content_: flow, phrasing
* _display_:

### Attributes

* Only Global Attributes

<hr>

## `<caption>`

description here

* _parents_:
* _content_:
* _display_:

### Attributes

* Global Attributes

<hr>

## `<col>`

description here

* _parents_:
* _content_:
* _display_:

### Attributes

* Global Attributes

<hr>

## `<colgroup>`

represents the title of a table. Always first descendant of a `<table>`, its styling might place it elsewhere relative to table with CSS

* _parents_: `<table>`
* _content_: Flow
* _display_:

### Attributes

* Global Attributes

<hr>

## `<tbody>`

defines one or more `<tr>` element data-rows to be the body of its parent `<table>` element.  Provides additional semantic info for devices such as printers and displays.  Represents the content which will differ for each printed page when it is longer than a page.  `<thead>` and `<tfoot>` will remain the same on each printed page.
* _parents_: within required `<table>`, `<tbody>` can be added after a `<caption>`, `<colgroup>`, `<thead>`, and a `<tfoot>`
* _content_: 0 or more `<tr>`
* _display_:

### Attributes

* Global Attributes

<hr>

## `<thead>`

defines a set of rows defining the head of the columns of the table

* _parents_: a `<table>`. Must appear after any `<caption>` or `<colgroup>` element, even implicitly defined, but before any `<tbody>`, `<tfoot>` and `<tr>` element.
* _content_: 0 or more `<tr>`
* _display_:

### Attributes

* Global Attributes

<hr>

## `<tfoot>`

description here

* _parents_:
* _content_:
* _display_:

### Attributes

* Global Attributes

<hr>

## `<tr>`

description here

* _parents_:
* _content_:
* _display_:

### Attributes

* Global Attributes

<hr>

## `<td>`

description here

* _parents_:
* _content_:
* _display_:

### Attributes

* Global Attributes

<hr>

## `<th>`

description here

* _parents_:
* _content_:
* _display_:

### Attributes

* Global Attributes

<hr>

## `<menu>`

description here

* _parents_:
* _content_:
* _display_:

### Attributes

* Global Attributes

<hr>

## `<dialog>`

description here

* _parents_:
* _content_:
* _display_:

### Attributes

* Global Attributes

<hr>

<hr>
<hr>

## [Global Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
* `class` -- a space-separated list of category names
* `hidden` -- a Boolean attribute indicating element is not yet or is no longer relevant.
* `id` -- unique identifier that is unique to entire document.
* `lang` -- helps define the languages of the element
* `style`-- a way to add CSS style within HTML file (not recommended)
* `title`-- contains a text representing information related to the element it belongs to.
