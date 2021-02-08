---
id: preference-hooks
title: Preference Hooks
sidebar_label: Example Preference Hooks
---

Preference hooks uses async storage, for fast component-level prefs change. Built based on useState usage.

```tsx
import { Text, Button } from "react-native";
import {
  PreferenecContext,
  usePreference,
  usePreferences,
  useJsonPreference,
} from "react-native-newestapps-hooks";

const ProfileScreen: React.FC = () => {
  const [user, setUser] = useJsonPreference("user"); // must use useJsonPreference if dealing with JSON, and you want it to be parsed correctly on fetch. (it will always be an object or array)

  const [theme, setThemePref] = usePreference("myDesiredTheme", "light"); // Sets theme pref for our app.  NOTE: second parameter, is a default value, in case the pref was not saved before.

  const [deviceId, setDeviceId] = usePreference("myDeviceId");

  /**
   * This describes all functions that is returned for each preference.
   *
   * count = is the actual value for the pref
   * setCount = updates the actual value
   * getCount = forces getting the count value from disc (and does not reload state)
   * incrementCount = very useful when dealing with incrementable values (always integers for now).
   * decrementCount = very useful when dealing with decrementable values (always integers for now).
   */
  const [
    count,
    setCount,
    getCount,
    incrementCount,
    decrementCount,
  ] = usePreference("count", 0);

  React.useEffect(() => {
    /**
     * Note second parameter is TRUE, that is the "saveOnce" functionality, and it will
     * save this preference with this value ONCE, and will never change the value if saveOnce
     * is TRUE. You can override value or force, setting this to FALSE (which is default FALSE).
     */
    setDeviceId("[some-unique-device-id-here]", true);
  }, []);

  return (
    <>
      <Text>{user ? "Please sign-in" : `Hello ${user.name}!`}</Text>

      <Button onPress={incrementCount}>+1</Button>
      <Button onPress={decrementCount}>-1</Button>
    </>
  );
};

const App: React.FC = () => {
  return (
    <PreferenceContext>
      <ProfileScreen />
    </PreferenceContext>
  );
};

export default App;
```
