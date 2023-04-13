import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'


import styles from "./App.module.css"
import "./global.css"


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/T4vexx.png",
      name: "Otávio Augusto",
      role: "Fullstack Dev"
    },
    content: [
      { type: "paragraph", contentText: "Fala galeraa ✍️"},
      { type: "paragraph", contentText: "asasds aksd m asdi masmd km kamskak asm am kasdk kaa mamd kam kamsak asdasdasdkas askka ka kdm"},
      { type: "link", contentText: "algumlink.com/link"}
    ],
    publishedAt: new Date("2023-04-09 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CEO Rocketseat"
    },
    content: [
      { type: "paragraph", contentText: "Fala galeraa ✍️"},
      { type: "paragraph", contentText: "asasds aksd m asdi masmd km kamskak asm am kasdk kaa mamd kam kamsak asdasdasdkas askka ka kdm"},
      { type: "link", contentText: "algumlink.com/link"}
    ],
    publishedAt: new Date("2023-04-22 20:00:00"),
  }
]

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )
          })}
        </main>
      </div>
    </>
  )
}

export default App
