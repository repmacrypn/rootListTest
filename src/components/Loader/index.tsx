import loader from 'src/assets/images/loader.svg'

import styles from './styles.module.css'

export const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <img alt='Loader' src={loader} />
        </div>
    )
}