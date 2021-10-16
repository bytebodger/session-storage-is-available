import { sessionStorageIsAvailable } from "./session.storage.is.available"

import * as session_storage_is_available from "./session.storage.is.available"
test('sessionStorage is available in the jest console', () => {
   expect(sessionStorageIsAvailable()).toEqual(true);
});

// @ponicode
describe("session_storage_is_available.sessionStorageIsAvailable", () => {
    test("0", () => {
        let callFunction = () => {
            session_storage_is_available.sessionStorageIsAvailable()
        }
    
        expect(callFunction).not.toThrow()
    })
})
