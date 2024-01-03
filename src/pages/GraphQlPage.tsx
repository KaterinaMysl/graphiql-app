import styles from './GraphQlPage.module.css';
const GraphQlPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GraphiQL Page</h1>
      <p className={styles.description}>
        Welcome to the GraphiQL page! This is where you can interact with your
        GraphQL API.
      </p>{' '}
    </div>
  );
};

export default GraphQlPage;
