import { Component, ReactNode, ErrorInfo } from 'react';
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
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ hasError: true });
    console.log(error, errorInfo);
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
