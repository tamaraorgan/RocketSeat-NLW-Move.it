import styles from '../styles/components/LevelUpModal.module.css'
import { useContext } from 'react';
import { ChallengesContext } from './../contexts/ChallengesContext';

function LevelUpModal() {
  const { level, closeLevalModalOpen } = useContext(ChallengesContext)
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevalModalOpen}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </div>
    </div>
  )
}
export default LevelUpModal
