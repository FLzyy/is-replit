# is-replit

> Detect if your code is currently running on Replit

```js
import isReplit from "is-replit";

// true if ran in Replit, false otherwise
console.log(isReplit());

process.env.REPLIT = 1; // Manually set REPLIT

// true
console.log(isReplit());
```
