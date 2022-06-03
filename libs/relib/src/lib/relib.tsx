import styles from './relib.module.css';

/* eslint-disable-next-line */
export interface RelibProps {}

export function Relib(props: RelibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Relib!</h1>
    </div>
  );
}

export default Relib;
