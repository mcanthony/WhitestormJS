---
layout: page
title: Adding an object
wikiPageName: Adding-an-object
menu: wiki
img: http://4.1m.yt/5ed58UzMN.png
modal-id: 3
---

Every *WHS* object is a combination of **THREE.JS** and **CANNON.JS** rendering and physical meshes/geometries, initialized with using JSON to edit their parameters, like *radius, width, height, mass, position, etc.*

Here is a basic example of adding a sphere to our *GAME* world object:

```javascript
GAME.sphere = GAME.addObject("sphere",
{
    geometryOptions: {
        radius:3 // Sphere radius
    },
    mass: 10, // Mass for CANNON.JS
    onlyvis: false, // If set true - no physic for this object
    materialOptions: { // ThreeJs material options
        color: 0xffffff,
        type: "basic"
    },
    pos: { // position in space
        x: 0,
        y: 100,
        z: 0
    }
});
```

**Note** that *GAME.sphere* is used only for setting it as an object (returned from this func.)
You can write only:
```javascript
GAME.addObject("sphere",
```

Instead of: 
```javascript
GAME.sphere = GAME.addObject("sphere",
```

##### What you can give to *WHS* object:

- **geometryOptions** - geometry options for *THREE.JS* and *CANNON.JS*
- **materialOptions** - *THREE.JS* material options. Will be passed to *THREE.Mesh(geometry, material{{with this options}})*
--    ***type*** - THREE.JS material type. Example "basic", "lambert", "phong".
- **mass** - *CANNON.JS* mass parameter.
- **pos** - Object position
- **onlyvis** - If set *true* - only *THREE.JS* object [without physic]


###### Add compound face

You can add a face for appending element's side-to-side.
Use *addComoundFace* for generating a geometry with one Face3 adn 3 vertices.

```javascript
GAME.sphere.addCompoundFace();
```
![addCompoundFace](http://4.1m.yt/5ed58UzMN.png)
