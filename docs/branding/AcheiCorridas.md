---
id: acheicorridas
title: AcheiCorridas
sidebar_label: AcheiCorridas
---
import { AcheiCorridas } from 'newestapps-branding';
import { PrimaryButton } from '@fluentui/react';

<PrimaryButton onClick={() => {window.location.href="https://603c1e2317cd3600239d50f8-rupnstblpt.chromatic.com"}}>Go to Storybook</PrimaryButton>

### Options

| Param     | Type   | Default | Description                                                                                                              |
| --------- | ------ | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| size  | number | 200        | Brand size, with aspect ration (width and height is calculated automatically). |
| dark  | boolean | false        | Brand colored for dark themes or backgrounds |
| solid  | boolean | false        | Brand in a single color, and "negative" mode. (reacts with color property. Default is "#000000" ) |
| color  | string | `#000000` if solid=true        | Color for the brand, when using solid style |
| iconOnly  | boolean | false        | Icon only version for the logo (Its based on a box with 156x156. That means, size will scale evenlye, and will include some blank spaces) |

### Usage

Import brand component

```jsx
import { AcheiCorridas } from 'newestapps-branding' // or "newestapps-branding/native" if using in React Native

<AcheiCorridas />

<AcheiCorridas dark />

<AcheiCorridas solid color={'#999999'} />

<AcheiCorridas solid color={'#999999'} iconOnly />

<AcheiCorridas dark iconOnly />

// etc...
```

### Example

Dark background is only for showing the example below:
<br />

<AcheiCorridas size={350} />

<div style={{display: 'inline-block', backgroundColor: '#222222'}}>
    <AcheiCorridas size={350} dark />
</div>

<AcheiCorridas size={350} solid />

<br />
<br />

<AcheiCorridas size={100} iconOnly />

<AcheiCorridas size={100} iconOnly solid />

<div style={{display: 'inline-block', backgroundColor: '#222222'}}>
    <AcheiCorridas size={100} iconOnly solid dark />
    <AcheiCorridas size={100} iconOnly dark />
    <AcheiCorridas size={100} iconOnly solid color={'lime'} />
</div>