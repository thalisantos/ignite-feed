import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>

      <header>

        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/88848560?v=4" />
          <div className={styles.authorInfo}>
            <strong>Thalita Santos</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="01 de Novembro as 16:00" dateTime="2022-11-01 16:00">Publicado há 1h</time>

      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#">jane.design/doctorcare</a></p>
        <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
      </div>

    </article>
  )
}