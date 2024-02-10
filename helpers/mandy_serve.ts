/*
MANDY DENO DEPLOY HELPER by 
Alexander Abraham a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Importing the "Server" structure from Lume.
import Server from "https://deno.land/x/lume@v1.18.1/core/server.ts";

// Exporting the function to
// serve a Mandy site.
export function serveSite(): void {
    const server = new Server(
        {
            port: 8000,
            root: `${Deno.cwd()}`,
        }
    );
    server.start();
}

// Exporting this function
// globally.
export default serveSite;