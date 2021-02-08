---
id: use-preferences
title: usePreferences
sidebar_label: usePreferences
---

:::note
Must be called somewhere inside [PreferenceProvider](/docs/preference-provider)
:::

## State descriptor

Returns an array, with functions and objects in the following order

| Key                      | Description                                                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| preferencesObject        | Actual preferences saved in `AsyncStorage`, returns all stored keys in the storage, as object (and mutates on every pref update) |
| setPreferenceValue       | Function to update the current value for the pref                                                                                |
| getPreferenceValue       | Function to force get the current value for the pref                                                                             |
| incrementPreferenceValue | Function to increment by 'times' a 'Integer' preference                                                                          |
| decrementPreferenceValue | Function to decrement by 'times' a 'Integer' preference                                                                          |

### preferencesObject

Can be force typed using [generics](https://www.typescriptlang.org/docs/handbook/generics.html). See example below:

```tsx
type MyPrefType = {
  siteName: string;
  visitCount: number;
};

const [allPrefs] = usePreferences<MyPrefType>();

// allPrefs.siteMap
```

### setPreferenceValue

Parâmeters:

- `key: string` Pref key to store value
- `value: string` Value to be stored

See example below:

```tsx
const [allPrefs, savePref] = usePreferences<MyPrefType>();

// ...

savePref("siteName", "Newestapps Docs");
```

### getPreferenceValue

Forces getting value anytime. (Async result)

Parâmeters:

- `key: string` Pref key to get value from
- `defaultVale: string` In case value does not exist, or is empty (undefined or null), this value will be returned

See example below:

```tsx
const [allPrefs, savePref, getPref] = usePreferences<MyPrefType>();

// ...

async function getSiteName() {
  return await getPref("siteName", "Unknown website name");
}
```

### incrementPreferenceValue

Increment by `times` the preference value

Parâmeters:

- `key: string` Pref key to get value from
- `times: number` (default: `1`) Amount of times to increment the value with.

See example below:

```tsx
const [
  allPrefs,
  savePref,
  getPref,
  incrementPref,
] = usePreferences<MyPrefType>();

// ...

incrementPref("visitCount", 1);
// or
incrementPref("visitCount");
```

### decrementPreferenceValue

Decrement by `times` the preference value

Parâmeters:

- `key: string` Pref key to get value from
- `times: number` (default: `1`) Amount of times to increment the value with.
- `allowNegative: boolean` (default: `false`) Numbers that would get bellow zero, will be stored as `0`, if this param is `false`

See example below:

```tsx
const [
  allPrefs,
  savePref,
  getPref,
  incrementPref,
  decrementPref,
] = usePreferences<MyPrefType>();

// ...

decrementPref("visitCount", 1, false);
// or
decrementPref("visitCount");
```

---

## Complete Usage

```tsx
import { usePreferences } from "react-native-newestapps-hooks";

// ...

const [
  allPrefs,
  setPref,
  getPref,
  incrementPref,
  decrementPref,
] = usePreferences();
```
