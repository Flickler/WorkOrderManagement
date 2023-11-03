import styles from "./styles.module.css";

export function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.modal}>
      { children }
    </div>
  )
}