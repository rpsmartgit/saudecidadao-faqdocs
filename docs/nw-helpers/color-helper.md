---
id: color-helper
title: ColorHelper
sidebar_label: Color Helper
---

Import

```jsx
import { ColorHelper } from "newestapps-helpers";
```

---

### contrastColor

Returns black or white (in hex), depending on the color contrast (best fit)

| Param     | Type   | Default | Description                                                                                                              |
| --------- | ------ | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| hexcolor  | string |         | Color to be validated                                                                                                    |
| threshold | number | 125     | Amount of the threshold that calibrates the calculation. Greater values, means, more chances of getting #000000 contrast |

example:

```jsx
ColorHelper.contrastColor("#333333"); // #FFFFFF

ColorHelper.contrastColor("#e1e1e1"); // #000000
```
