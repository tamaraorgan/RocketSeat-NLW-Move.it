import { Profiler } from "inspector";

import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/68870322?s=460&u=9a24a6e82fb23d4510f7b675c63d967584fd46c7&v=4" alt="Tamara Organ"/>
      <div>
        <strong>Tamara Organ</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1</p>
      </div>
    </div>
  )
}