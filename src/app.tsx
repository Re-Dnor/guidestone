import { Suspense } from "react";

import { ErrorBoundary } from "./shared/components/error-boundary";
import { Fallback } from "./shared/components/fallback";
import { Desktop } from "./desktop";

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Fallback />}>
        <Desktop />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
