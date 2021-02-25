---
id: string-mask
title: StringMask
sidebar_label: String Mask
---

Import

```jsx
import { StringMask } from "newestapps-helpers";
```

---

### moneyMask

Formats numbers to BRL money mask.

| Param         | Type    | Default | Description                         |
| ------------- | ------- | ------- | ----------------------------------- |
| value         | number  |         | Value to be formatted               |
| decimalPlaces | number  | 2       | Decimal places to round up, and cut |
| withCurrency  | boolean | true    | Include `R$ ` or not                |

example:

```jsx
StringMask.moneyMask(1500.66, 2, true); // R$ 1.500,66
```

### numberWithCommas

Formats number to Brazil pattern.

| Param | Type   | Default | Description           |
| ----- | ------ | ------- | --------------------- |
| value | number |         | Value to be formatted |

example:

```jsx
StringMask.numberWithCommas(10500.669658); // 10.500,669658
```

### bytesToSize

Convert number to computer units sizes (bytes)

| Param    | Type   | Default | Description                       |
| -------- | ------ | ------- | --------------------------------- |
| value    | number |         | Value to be formatted             |
| decimals | number | 2       | Decimal places to be added at end |

example:

```jsx
StringMask.bytesToSize(124); // 124 bytes

StringMask.bytesToSize(2048); // 2 KB

StringMask.bytesToSize(100 * 1024); // 100 KB
```

### plural

Simplify plural word manipulation

| Param    | Type   | Default | Description                                      |
| -------- | ------ | ------- | ------------------------------------------------ |
| count    | number |         | Countable reference, to apply singular or plural |
| singular | string |         | Word at the singular way                         |
| plural   | string |         | Word at the plural way                           |

example:

```jsx
StringMask.plural(1, "pessoa", "pessoas"); // pessoa

StringMask.plural(2, "pessoa", "pessoas"); // pessoas

StringMask.plural(0, "pessoa", "pessoas"); // pessoas
```

### phoneNumberFormat

Returns a Brazil phone mask with DDD + number

ex: (00) 00000-0000 or 00000-0000

| Param | Type   | Default | Description  |
| ----- | ------ | ------- | ------------ |
| ddd   | string |         | Area code    |
| phone | string |         | Phone number |

example:

```jsx
StringMask.phoneNumberFormat("45", "999999999"); // (45) 99999-9999

StringMask.phoneNumberFormat("", "999999999"); // 99999-9999
```

### initialsFromName

Returns 2 letters that represent a name. Commonly used in Avatars.

| Param    | Type   | Default | Description               |
| -------- | ------ | ------- | ------------------------- |
| fullname | string |         | Full name to get initials |

example:

```jsx
StringMask.initialsFromName("Rodrigo Brun"); // RB

StringMask.initialsFromName("Rodrigo Thiago Brun"); // RB
```

### firstName

Returns only the first name

| Param    | Type   | Default | Description               |
| -------- | ------ | ------- | ------------------------- |
| fullname | string |         | Full name to get initials |

example:

```jsx
StringMask.firstName("Rodrigo"); // Rodrigo

StringMask.firstName("Rodrigo Thiago Brun"); // Rodrigo
```
