import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Josh"
            content="Meu primeiro post"
          />
          <Post
            author="Peter"
            content="Um post qualquer"
          />
        </main>
      </div>
    </div>
  )
}

