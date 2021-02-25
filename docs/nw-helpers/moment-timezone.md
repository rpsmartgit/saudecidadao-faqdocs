---
id: moment-timezone
title: MomentTimezone Locale
sidebar_label: Moment Timezone locale
---

Corrects fix moment-timezone locale to PT-BR

### Setup

Import to setup

```jsx
import { MomentTimezone } from "newestapps-helpers";
```

and call setup function, at the top level of your app entry.

```jsx
MomentTimezone.setup();
```

Now, all formatted dates using moment(), will be show using pt-br.
