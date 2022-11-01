import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/88848560?v=4" />
        <strong>Thalita Santos</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#"> 
        <PencilLine size={20}/>
        Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}