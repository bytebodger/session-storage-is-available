import { sessionStorageIsAvailable } from './session.storage.is.available';

test('sessionStorage is available in the jest console', () => {
   expect(sessionStorageIsAvailable()).toEqual(true);
});
