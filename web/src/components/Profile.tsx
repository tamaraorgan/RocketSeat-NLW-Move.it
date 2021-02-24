import { Profiler } from 'inspector'

import styles from '../styles/components/Profile.module.css'

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="/Avatar.jpeg"
        alt="Tamara Organ"
      />
      <div>
        <strong>Tamara Organ</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}
export default Profile
