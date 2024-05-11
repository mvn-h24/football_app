"use client";

import { ErrorMessage } from "@football-app/shared/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorMessage message={error.message} />;
}
