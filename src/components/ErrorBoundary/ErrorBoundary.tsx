import { Component, ReactNode } from 'react';

type ErrorBoundaryProps = {
  children?: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};
export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <div>
            <h2>An error occurred</h2>
            <button onClick={this.handleReset}>
              Please restore operation.
            </button>
          </div>
        </div>
      );
    }
    return this.props.children as ReactNode;
  }
}
