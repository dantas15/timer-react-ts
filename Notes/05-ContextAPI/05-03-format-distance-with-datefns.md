# Format date with date-fns to now

- we can import the formatDistanceToNow function from date-fns:

```js
import { formatDistanceToNow } from 'date-fns'
```

- we can use it to format the date to now:

```js
const date = new Date('2020-01-01T12:00:00Z')
console.log(formatDistanceToNow(date, { addSuffix: true }))
```

- as you've seen, we can also pass the second parameter as an object to specify the options, such as adding the suffix.
- you can see all the available options for `formatDistanceToNow` [here](https://date-fns.org/v2.29.3/docs/formatDistanceToNow#arguments)

## Using a different language

- we need to import the language from date-fns:

```js
import ptBR from 'date-fns/locale/pt-BR'
```

- we can use the second parameter to specify the language

```js
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const date = new Date('2020-01-01T12:00:00Z')
console.log(formatDistanceToNow(date, {addSufix: true, locale: ptBR}))
```
