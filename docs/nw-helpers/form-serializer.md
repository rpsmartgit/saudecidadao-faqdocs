---
id: form-serializer
title: React Hook Form Serializer
sidebar_label: Form Serializer
---

:::note
The best use case for this helper, is when using [react-hook-form](https://react-hook-form.com/)
:::

### Serialize

```jsx
import { FormSerializer } from "newestapps-helpers";

const serialized = FormSerializer.serialize(yourUnserializedData);
```

### Deserialize

```jsx
import { FormSerializer } from "newestapps-helpers";

const deserialized = FormSerializer.deserialize(serialized);
```
