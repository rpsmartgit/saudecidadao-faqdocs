---
id: newestapps
title: Newestapps
sidebar_label: Newestapps
---
import { Newestapps } from 'newestapps-branding';

### Options

| Param     | Type   | Default | Description                                                                                                              |
| --------- | ------ | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| size  | number | 200        | Brand size, with aspect ration (width and height is calculated automatically). |
| dark  | boolean | false        | Brand colored for dark themes or backgrounds |
| solid  | boolean | false        | Brand in a single color, and "negative" mode. (reacts with color property. Default is "#000000" ) |
| corporate  | boolean | false        | When dealing with the corporate version for the logo |
| color  | string | `#000000` if solid=true        | Color for the brand, when using solid style |
| iconOnly  | boolean | false        | Icon only version for the logo (Its based on a box with 156x156. That means, size will scale evenlye, and will include some blank spaces) |

### Usage

Import brand component

```jsx
import { Newestapps } from 'newestapps-branding' // or "newestapps-branding/native" if using in React Native

<Newestapps />

<Newestapps dark />

<Newestapps solid color={'#999999'} />

<Newestapps solid color={'#999999'} iconOnly />

<Newestapps dark iconOnly />

// etc...
```

### Example

Dark background is only for showing the example below:
<br />

<Newestapps size={350} />

<div style={{display: 'inline-block', backgroundColor: '#222222'}}>
    <Newestapps size={350} dark />
</div>

<Newestapps size={350} solid />

<br />
<br />

<Newestapps size={100} iconOnly />

<Newestapps size={100} iconOnly solid />

<div style={{display: 'inline-block', backgroundColor: '#222222'}}>
    <Newestapps size={100} iconOnly solid dark />
    <Newestapps size={100} iconOnly dark />
    <Newestapps size={100} iconOnly solid color={'lime'} />
</div>