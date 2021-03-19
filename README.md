# session-storage-is-available

`session-storage-is-available` is a tiny utility function to safely determine whether sessionStorage is available in the current environment. It's dangerous to _assume_ that `sessionStorage()` is available. It can be absent in non-supported browsers, or when scripts are invoked from the command line, or when the user's browser is in Incognito Mode. Trying to access `sessionStorage()` when it's unavailable can spawn an `Error`. So it's best to test for its existence before attempting to access it.

## Usage

After installation, import the package:

```javascript
import { sessionStorageIsAvailable } from '@toolz/session-storage-is-available';
```

### sessionStorageIsAvailable()

`sessionStorageIsAvailable()` attempts to set-and-remove a value in `sessionStorage`, returning a Boolean value based on its failure or success.

```javascript
const API = {
   arguments: {
      // none
   },
   returns: Boolean,
}
```

**Examples:**

```javascript
sessionStorageIsAvailable(); // returns Boolean TRUE in "normal" browser situations
sessionStorageIsAvailable(); // returns Boolean FALSE when invoked outside a "normal" browser
                             // or when the browser can sessionStorage disabled (e.g., Incognito Mode)
```
