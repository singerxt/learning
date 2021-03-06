# CSS Grid

### What kind of problem grid is resolving ?

Early CSS layouts were a mix of floats and positioned elements (fixed, absolute, relative).
Before Flex and Grid it was very difficult to to create footer what is always on the
bottom of page. _(Google: Sticky footer problem)_ and much more ;-)

Is worth to say that GRID is free from all tricks what we had to use before
like _clearfix_ for layouts based on _floats_. Is anybody remember _clearfix_ ? ;-)

Grid is allowing you to position elements in easy way without using positioned
elements etc.

### Some options

If you want to start using grid. You have to define `display: grid` for container.
```html
<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>
<div class="grid-container">
  <div><div> <!-- Column -->
  <div><div>
  <div><div>
  <div><div>
</div>
```

To define how much columns you want you have to use _grid-template-columns: 1fr 1fr 1fr;_.
In the example we will have 3 columns all set to 1fr each, the available space is divided into three and distributed equally.

CSS Grid Layout includes a grid-gap property to space items out. This property is shorthand for grid-col- umn-gap and grid-row-gap, which can also be specified individually.

### Random new stuff to check
* [shape-outside](https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside) nice css feature.
* [grid-area]() need to investigate looks amazing.  The value of grid-template-areas shows visually what our layout looks like.
### Quotes from resoures
> Ten years ago now, when the real job of a front-end developer was that
oof a browser-bugs expert. <cite>Rachel Andrew</cite>

> The areas must be rectangular in nature—we can’t yet create an L-shaped area. <cite>Rachel Andrew</cite>

> If you know how to align items in flexbox, you’ll find that it works the same way for Grid.

### Support
Grid is supported by all modern browsers expect IE11

### Notes
CSS Grid seems to be more powerfull then _flex_. I would like to investigate how it's works.


#### Use auto-fit, auto-fill
if you want use grid for example on list and you don't know how many items you might have
use:
```css
.header-top__nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.header-top__nav li {
  display: inline-block;
}
```
#### repeat

```css
.grid-container {
  grid: repeat(4, 1fr)
}

// is same like

.grid-container {
  grid: 1fr 1fr 1fr 1fr
}
```
#### shorthands

```css
.grid-container-3 .b {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}

// is same like

.grid-container-3 .b {
  grid-area: 2 / 4 / 2 / 3;
}
```

# Resources

* [The new CSS Layout by Rachel Andrew](https://abookapart.com/products/the-new-css-layout)
* [CSS grid garden](http://cssgridgarden.com/)
* [Grid by example](https://gridbyexample.com/)
* [Why CSS grid-area is the best property for laying out content](https://www.youtube.com/watch?v=duH4DLq5yoo)
* [Build a Mosaic Portfolio Layout with CSS Grid](https://www.youtube.com/watch?v=plRcoRqLriw)
#### PS

This is my personal notes and might not make sense :-)
