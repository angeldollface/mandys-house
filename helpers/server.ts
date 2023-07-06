/*
MANDY DENO DEPLOY HELPER by 
Alexander Abraham a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Importing the standard Deno server module.
import { serve } from "https://deno.land/std@0.91.0/http/server.ts";

// Importing the standard Deno file server module.
import { serveFile } from 'https://deno.land/std@0.91.0/http/file_server.ts';

// Serves a Mandy site.
export async function serveSite(path: string): Promise<void> {
    const server = serve({ port: 8000 });
    for await (const req of server) {
        if(req.url === '/') {
            const response = await serveFile(req, path);
            req.respond(response)
        }
    }
}
