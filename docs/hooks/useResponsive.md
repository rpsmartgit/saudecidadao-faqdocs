---
id: use-responsive
title: useResponsive
sidebar_label: useResponsive
---

:::note
Must be called somewhere inside [ResponsiveProvider](/docs/push-provider)
:::

### Object description

| Key                      | Description                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| windowHeight             | App window height                                                                                                                  |
| windowWidth              | App window width                                                                                                                   |
| screenHeight             | Device screen height                                                                                                               |
| screenWidth              | Device screen width                                                                                                                |
| insets                   | Object like `{top: 0, left: 0, right: 0, bottom: 0}` with propper distances to apply to general design.                            |
| hasNavigationTranslucent | If the navigation bar is translucent                                                                                               |
| safeAreaHeight           | Safe area height (usable app area)                                                                                                 |
| safeAreaWidth            | Safe area width (usable app area)                                                                                                  |
| statusBarHeight          | Default status bar height (note: is async returned when on iOS, for better compatibility, consider using `insets.top` when on iOS) |
| navigationBarHeight      | Default navigation height                                                                                                          |
| keyboardShwon            | If keyboard is showing on screen                                                                                                   |
| keyboardHeight           | Active keyboard height                                                                                                             |
| supportsElevation        | If platform supports elevation (`true` for Android)                                                                                |
| fontScale                | Font scale, according to accessibility settings                                                                                    |
| scale                    | Content scale, according to accessibility settings                                                                                 |

### Usage

```tsx
import { useResponsive } from "react-native-newestapps-hooks";

// ...

const responsive = useResponsive();
```
