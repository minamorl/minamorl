'use client'
import { motion } from "framer-motion"
import Link from "next/link"


 const Minamorl = () => {
   const obj = 'minamorl'.split('').map(x => ({
     text: x,
     startX: Math.random()*1050,
     startY: Math.random()*1050,
   }))
  return <div className="text-4xl">
    {
      obj.map((x, idx) => (<motion.div key={idx} initial={{x: x.startX, y: x.startY, position: 'absolute'}} animate={{rotate: idx, x: idx * 20, y: 100 + Math.random() * 10}}>{x.text}</motion.div>))
    }
  </div>
  
}

const Slashes = () => {
  const slash = '/'
  
  return <div>
    {Array(140).fill(slash).map((x, idx) => <motion.div key={idx} initial={{opacity: 0, x: 100 + Math.sin(idx) * 100, y:150,  position: 'absolute'}} transition={{duration: idx/30}} animate={{opacity: 1, x: idx * 10, y: 150, scaleX: 4}}>{x}</motion.div>)}
  </div>

}

const Stars = () => {
  const ast = "*"
  return <div className="stars text-4xl">
    { Array(400).fill(ast).map((x, idx) => <motion.div key={idx} initial={{opacity: Math.cos(idx), position: 'absolute', x: Math.random() * 1000, y: Math.random() * 1000}} animate={{opacity: Math.cos(idx), position: 'absolute', x: Math.random() * 1000, y: Math.random() * 1000}} transition={{duration: 100}}>{x}</motion.div>) }
                             </div>
}



const Github = () => {
  return <Link href="https://github.com/minamorl">
  <motion.div className="rounded p-8 bg-rose-600 w-1/3 drop-shadow-md" animate={{y: 300}}>
  <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>
    GitHub
 </motion.div>
      </Link>
}
export default function Home() {
  return (
    <main>
      <Minamorl />
      <Slashes />
      <motion.div initial={{y: 100}} animate={{y: 200}}>I&apos;m a hacker</motion.div>
      <Stars />
      <Github />
    </main>
  )
}
