import { List } from 'tabler-icons-react'

import styles from './styles.module.css'

export const Header = () => {
    return (
        <header className={styles.title}>
            RootListTest
            <List strokeWidth={2.2} viewBox='-5 -5 24 24' />
        </header>
    )
}