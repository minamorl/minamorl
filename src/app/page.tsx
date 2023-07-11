'use client'
import { motion } from "framer-motion"


 const Minamorl = () => {
   const obj = 'minamorl'.split('').map(x => ({
     text: x,
     startX: Math.random()*1050,
     startY: Math.random()*1050,
   }))
  return <div className="text-4xl">
    {
      obj.map((x, idx) => (<motion.div key={idx} initial={{x: x.startX, y: x.startY, position: 'absolute', 'ease': 'easeOut'}} animate={{rotate: idx, x: idx * 20, y: 100 + Math.random() * 10}}>{x.text}</motion.div>))
    }
  </div>
  
}

const Slashes = () => {
  const slash = '/'
  
  return <div>
    {Array(140).fill(slash).map((x, idx) => <motion.div key={idx} initial={{opacity: 0, x: 100 + Math.sin(idx) * 100, y:150, ease: 'easeOut', position: 'absolute'}} transition={{duration: idx/30}} animate={{opacity: 1, x: idx * 10, y: 150, scaleX: 4}}>{x}</motion.div>)}
  </div>

}

const Stars = () => {
  const ast = "*"
  return <div>
    { Array(400).fill(ast).map((x, idx) => <motion.div key={x} initial={{opacity: Math.cos(idx), position: 'absolute', x: Math.random() * 1000, y: Math.random() * 1000}} animate={{opacity: Math.cos(idx), position: 'absolute', x: Math.random() * 1000, y: Math.random() * 1000}} transition={{duration: 100}}>{x}</motion.div>) }
                             </div>
}

export default function Home() {
  return (
    <main>
      <Minamorl />
      <Slashes />
      <motion.div initial={{y: 100}} animate={{y: 200}}>I'm a hacker</motion.div>
      <Stars />
    </main>
  )
}
