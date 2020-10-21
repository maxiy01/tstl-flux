# TSTL Roomy

Declarations for [flux](https://github.com/rxi/flux), a fast, lightweight tweening library for Lua.


| Command | Description |
|-|-|
| `yarn add -D tstl-flux` | Install these declarations |
| `yarn add rxi/flux` | Install anim8 |


Upon installation these declarations can be linked to a _tsconfig.json_ file.

```json
{
    "compilerOptions": {
        "types": [
            "tstl-flux"
        ]
    }
}
```

And used within any _.ts_ file.

```ts
import * as flux from "flux"

const R = 30;
let pos = {
    x: 0,
    y: 0
}

flux.to(pos, 4, {
    x: 100,
    y: 200
})


love.update = (dt: number) => {
    flux.update(dt);
}
love.draw = () => {
    love.graphics.circle('fill', pos.x, pos.y);
}
```

Make sure to append `";./node_modules/?/?.lua"` to your `package.path` in a _conf.ts_ file (this is run first) to assist where Lua looks for modules.

```ts
package.path += ";./node_modules/?/?.lua";
```
