import { validateName } from "../regexp";

test.each([
  ['jsdhfjhfjdshfsdjfsd', true],
  ['fsdfsd6sdfsdf8777__-df', false],
  ['1dwfsdsdfsdfsdf', false],
  ['_sdfsd-45', false],
  ['sdjsdkfjsdkj543fsdfjsd', false],
  
])('Check validateName function with %d username and %s status', (userName, status) => {
  const result = validateName(userName);
  expect(result).toBe(status);
});