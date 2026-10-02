/**
 * Style reminder: Routing preserves a coherent Discipline Ledger experience across every page.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Router as WouterRouter, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Account from "./pages/Account";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Home from "./pages/Home";
import Membership from "./pages/Membership";
import NotFound from "./pages/NotFound";
import Timetable from "./pages/Timetable";

function Router() {
  // Hash-based routing (URLs like #/timetable) instead of real browser
  // paths. This makes navigation work identically whether the site is
  // opened by double-clicking index.html, served by the dev server, or
  // hosted on a static host - a plain path-based router breaks when opened
  // via file:// because the browser location isn't "/".
  return (
    <WouterRouter hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/classes" component={Classes} />
        <Route path="/timetable" component={Timetable} />
        <Route path="/membership" component={Membership} />
        <Route path="/account" component={Account} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
