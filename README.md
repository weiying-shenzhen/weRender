# weRender
Simple, light-weight, Canvas library for 2D rendering


# Features

- `Chain` API

- Drawing `actions` reusable

- Same methods as <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D">CanvasRenderingContext2D</a>

# Install

```shell
npm install we-render
```

# Usage

- **ES6 module**

```javascript

import { WeCanvas, WeStage } from 'we-render'

const child = new WeCanvas()
  .setSize(100, 100)
  .scale(2, 2)
  .fillStyle("red") // different here
  .fillRect(0, 0, 10, 10)

const stage = new WeStage()

stage.addChid(child)
stage.update()

```

- **In browser**

```html

<script type="text/javascript" src="../dist/weRender.min.js"></script>
<script type="text/javascript">
var WeStage = weRender.WeStage;
var WeCanvas = weRender.WeCanvas;

var stage = new WeStage(document.querySelector("#canvas"));
stage.setSize(500, 500);
stage.setStyle("500px", "500px");

var yellowCircle = new WeCanvas({
  width: 100,
  height: 100,
})
.beginPath()
.fillStyle("yellow")
.arc(50, 50, 50, 0, 2 * Math.PI)
.fill()

stage.addChild(yellowCircle);
stage.update();
</script>

```

# Examples

See examples:
`npm run static`

* <a href="examples/index.html">simple</a>

* <a href="examples/circle-clone">clone</a>

* <a href="examples/circle-actions.html">reuse actions</a>

* <a href="examples/circle-composite.html">composite</a>

* <a href="examples/circle-zoom.html">zoom</a>

# Scripts

Usefull Scripts for improving efficiency.

**`SVG` to `Canvas`**

`SVG` `path` can be compiled to `Canvas` codes. Run `path.js` then get `Canvas` codes.

Usage:
```shell
node scrpits/path.js [svg file] [dest file]
```
With help:
```shell
node scrpits/path.js -h
```

Examples:

See examples under directory`examples/path`

# API reference

## Modules

<dl>
<dt><a href="#module_weRender">weRender</a></dt>
<dd><p>weRender: Simple Canvas library for easy usage</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#WeCanvas">WeCanvas</a></dt>
<dd><p>WeCanvas: Easy canvas api for using, support useing chain</p>
<ul>
<li>Directly use <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D">CanvasRenderingContext2D</a><code>methods</code></li>
<li><code>Property</code> of <code>CanvasRenderingContext2D</code> here is <code>method</code></li>
<li>Won&#39;t really drawing Canvas until run <code>draw()</code></li>
</ul>
</dd>
<dt><a href="#WeStage">WeStage</a></dt>
<dd><p>WeStage: Canvas manager for WeCanvas</p>
</dd>
</dl>

<a name="module_weRender"></a>

## weRender
weRender: Simple Canvas library for easy usage

<a name="WeCanvas"></a>

## WeCanvas
WeCanvas: Easy canvas api for using, support useing chain

- Directly use <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D">CanvasRenderingContext2D</a>` methods`
- `Property` of `CanvasRenderingContext2D` here is `method`
- Won't really drawing Canvas until run `draw()`

**Kind**: global class

* [WeCanvas](#WeCanvas)
    * [new WeCanvas(options)](#new_WeCanvas_new)
    * [.setSize(width, height)](#WeCanvas+setSize)
    * [.setStyle(width, height)](#WeCanvas+setStyle)
    * [.setCoordinate(x, y)](#WeCanvas+setCoordinate)
    * [.setScale(scale)](#WeCanvas+setScale)
    * [.clear()](#WeCanvas+clear)
    * [.getActions()](#WeCanvas+getActions)
    * [.setActions(actions)](#WeCanvas+setActions)
    * [.draw()](#WeCanvas+draw)
    * [.cache(ifCache)](#WeCanvas+cache)

<a name="new_WeCanvas_new"></a>

### new WeCanvas(options)
create a WeCanvas instance


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | option settions for instance |

<a name="WeCanvas+setSize"></a>

### weCanvas.setSize(width, height)
set canvas size

**Kind**: instance method of <code>[WeCanvas](#WeCanvas)</code>

| Param | Type | Description |
| --- | --- | --- |
| width | <code>Number</code> | canvas width |
| height | <code>Number</code> | canvas height |

<a name="WeCanvas+setStyle"></a>

### weCanvas.setStyle(width, height)
set canvas style, only width and height

**Kind**: instance method of <code>[WeCanvas](#WeCanvas)</code>

| Param | Type | Description |
| --- | --- | --- |
| width | <code>String</code> | canvas style width |
| height | <code>String</code> | canvas style height |

<a name="WeCanvas+setCoordinate"></a>

### weCanvas.setCoordinate(x, y)
set coordinate of stage

**Kind**: instance method of <code>[WeCanvas](#WeCanvas)</code>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>Number</code> | <code>0</code> | horizontal axis |
| y | <code>Number</code> | <code>0</code> | vertical axis |

<a name="WeCanvas+setScale"></a>

### weCanvas.setScale(scale)
set init scale

**Kind**: instance method of <code>[WeCanvas](#WeCanvas)</code>

| Param | Type | Description |
| --- | --- | --- |
| scale | <code>Number</code> | scale ratio |

<a name="WeCanvas+clear"></a>

### weCanvas.clear()
clear canvas

**Kind**: instance method of <code>[WeCanvas](#WeCanvas)</code>
<a name="WeCanvas+getActions"></a>

### weCanvas.getActions()
get actions for context drawing

**Kind**: instance method of <code>[WeCanvas](#WeCanvas)</code>
<a name="WeCanvas+setActions"></a>

### weCanvas.setActions(actions)
set actions

**Kind**: instance method of <code>[WeCanvas](#WeCanvas)</code>

| Param | Type | Description |
| --- | --- | --- |
| actions | <code>Array</code> | actions for context drawing |

<a name="WeCanvas+draw"></a>

### weCanvas.draw()
run actions, draw canvas

**Kind**: instance method of <code>[WeCanvas](#WeCanvas)</code>
<a name="WeCanvas+cache"></a>

### weCanvas.cache(ifCache)
set cache, default: true

**Kind**: instance method of <code>[WeCanvas](#WeCanvas)</code>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ifCache | <code>Boolean</code> | <code>true</code> | if set cache |

<a name="WeStage"></a>

## WeStage
WeStage: Canvas manager for WeCanvas

**Kind**: global class

* [WeStage](#WeStage)
    * [new WeStage(canvas, options)](#new_WeStage_new)
    * [.setSize(width, height)](#WeStage+setSize)
    * [.setStyle(width, height)](#WeStage+setStyle)
    * [.destory()](#WeStage+destory)
    * [.clear()](#WeStage+clear)
    * [.addChild(child)](#WeStage+addChild)
    * [.translate(x, y, reset)](#WeStage+translate)
    * [.update()](#WeStage+update)

<a name="new_WeStage_new"></a>

### new WeStage(canvas, options)
create a WeStage instance


| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>Canvas</code> | a Canvas element related to the dom |
| options | <code>Object</code> | stage settings |

<a name="WeStage+setSize"></a>

### weStage.setSize(width, height)
set stage size

**Kind**: instance method of <code>[WeStage](#WeStage)</code>

| Param | Type | Description |
| --- | --- | --- |
| width | <code>Number</code> | stage width |
| height | <code>Number</code> | stage height |

<a name="WeStage+setStyle"></a>

### weStage.setStyle(width, height)
set stage style

**Kind**: instance method of <code>[WeStage](#WeStage)</code>

| Param | Type | Description |
| --- | --- | --- |
| width | <code>String</code> | stage style width |
| height | <code>String</code> | stage style height |

<a name="WeStage+destory"></a>

### weStage.destory()
destrory stage

**Kind**: instance method of <code>[WeStage](#WeStage)</code>
<a name="WeStage+clear"></a>

### weStage.clear()
clear canvas

**Kind**: instance method of <code>[WeStage](#WeStage)</code>
<a name="WeStage+addChild"></a>

### weStage.addChild(child)
add child to the stage

**Kind**: instance method of <code>[WeStage](#WeStage)</code>

| Param | Type | Description |
| --- | --- | --- |
| child | <code>[WeCanvas](#WeCanvas)</code> \| <code>Object</code> | WeCanvas instance or Object cotains Canvas |

<a name="WeStage+translate"></a>

### weStage.translate(x, y, reset)
translate stage, move coordinate

**Kind**: instance method of <code>[WeStage](#WeStage)</code>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>Number</code> | <code>0</code> | offset x |
| y | <code>Number</code> | <code>0</code> | offset y |
| reset | <code>Boolean</code> | <code>false</code> | should reset after update |

<a name="WeStage+update"></a>

### weStage.update()
update stage, draw child on canvas
**run this method, all child canvas will draw**

**Kind**: instance method of <code>[WeStage](#WeStage)</code>

*docs autogenerated via [jsdoc2md](https://github.com/jsdoc2md/jsdoc-to-markdown)*
