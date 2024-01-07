import { Component, ReactNode } from 'react';
import styles from './ErrorBoundary.module.css';

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
        <div className={styles.errorcontainer}>
          <div>
            <h2 className={styles.title}>
              An error occurred/ Произошла ошибка
            </h2>
          </div>
        </div>
      );
    }
    return this.props.children as ReactNode;
  }
}
