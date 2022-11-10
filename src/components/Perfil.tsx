import styles from '../styles/components/Profile.module.css'


export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/86412097?v=4" alt="Rafael Feltrin" />

            <div>
                <strong>Rafael Feltrin</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}