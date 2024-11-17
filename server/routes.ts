import type { Express } from "express";

export function registerRoutes(app: Express) {
  // Since this is primarily a static educational site,
  // we'll only add basic health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });
}
