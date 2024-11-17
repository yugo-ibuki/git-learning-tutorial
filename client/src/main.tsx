import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Switch, Route } from "wouter";
import "./index.css";
import { SWRConfig } from "swr";
import { fetcher } from "./lib/fetcher";
import HomePage from "./pages/HomePage";
import GitBasics from "./pages/GitBasics";
import GitWorkflow from "./pages/GitWorkflow";
import GithubGuide from "./pages/GithubGuide";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="git-tutorial-theme">
      <SWRConfig value={{ fetcher }}>
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/git-basics" component={GitBasics} />
            <Route path="/git-workflow" component={GitWorkflow} />
            <Route path="/github-guide" component={GithubGuide} />
            <Route>404 - Page Not Found</Route>
          </Switch>
        </main>
        <Toaster />
      </SWRConfig>
    </ThemeProvider>
  </StrictMode>
);
