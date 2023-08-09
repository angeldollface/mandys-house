/*
MANDY DENO DEPLOY HELPER by 
Alexander Abraham a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Importing the "Application" class from the "abc" module.
import { Application } from 'https://deno.land/x/abc@v1.0.2/mod.ts'

// Defining the function to serve
// a static Mandy site.
export function serveSite(){
  const app: Application = new Application()
  app.static('/', '.').file('/', 'index.html').start(
    {
      port: 8000 
    }
  );
}

// Exporting the function
// serve a site so we
// can import it.
export default serveSite;
