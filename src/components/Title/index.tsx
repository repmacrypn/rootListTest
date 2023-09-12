import styles from './styles.module.css'

export const Title = ({ text }: { text: string }) => {
    return (
        <div className={styles.title}>
            {text}
        </div>
    )
}