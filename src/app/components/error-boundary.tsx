import { Component, type ErrorInfo, type ReactNode } from "react";

import { EnsoCircle } from "@/shared/ui";

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-washi px-8 text-center">
        <EnsoCircle size={80} stroke={1.5} variant="brushed" color="var(--color-shu-seal)" />
        <h1 className="font-display text-[length:var(--text-h2)] text-text-primary">
          Có gì đó không ổn
        </h1>
        <p className="max-w-sm text-[length:var(--text-body)] text-text-secondary">
          Đã xảy ra lỗi không mong muốn. Vui lòng thử tải lại trang.
        </p>
        <button
          className="rounded bg-shu-seal px-6 py-2 text-[length:var(--text-body-sm)] text-washi transition-opacity hover:opacity-90"
          onClick={() => window.location.reload()}
        >
          Tải lại trang
        </button>
        {import.meta.env.DEV && (
          <pre className="mt-4 max-w-2xl overflow-auto rounded bg-sumi-paper p-4 text-left text-xs text-text-secondary">
            {error.stack}
          </pre>
        )}
      </div>
    );
  }
}
