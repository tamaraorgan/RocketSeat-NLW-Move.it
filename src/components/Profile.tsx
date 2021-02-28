import { Profiler } from 'inspector'
import { useContext } from 'react';
import { ChallengesContext } from './../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css'

function Profile() {
  const { level } = useContext(ChallengesContext)
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
          Level {level}
        </p>
      </div>
    </div>
  )
}
export default Profile
