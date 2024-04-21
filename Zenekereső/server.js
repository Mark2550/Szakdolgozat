import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 5173;
const isProduction = process.env.NODE_ENV === 'production'

async function createServer() {
    const app = express();
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'custom'
    })
    app.use(vite.middlewares);

    app.use('*', async (req, res) => {
        const url = req.originalUrl;

        try {
            let template = fs.readFileSync(
                path.resolve(__dirname, 'index.html'),
                'utf-8',
            )
            template = await vite.transformIndexHtml(url, template)
            const { render } = await vite.ssrLoadModule('/src/entry-server.js')
            const html = template.replace()


        } catch (e) {
            vite.ssrFixStacktrace(e)
            next(e)
        }
        
    })

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

createServer();
