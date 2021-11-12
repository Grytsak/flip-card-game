import  React from 'react'
import { Link } from 'react-router-dom'

import styles from '../../scss/features/menu/Menu.module.scss'

export const Menu = () => {
    return(
        <div className={styles.menu}>
            <Link to={'/cards/casual'}>Casual</Link>
            <Link to={'/cards/medium'}>Medium</Link>
            <Link to={'/cards/hard'}>Hard</Link>
        </div>
    )
}