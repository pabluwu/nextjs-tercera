'use client'
import { motion } from "framer-motion"


export default function Banner() {
    return (
        <motion.div initial={{x:-100 ,opacity: 0 }} animate={{ x:0 , opacity: 1}}>
            <div className="flex flex-row max-sm:flex-col items-center justify-around px-24 bg-white">
                <motion.div className="p-8 max-w-sm max-sm:text-center" initial={{ x: -100, opacity: 0 }} animate={{ x : 0, opacity: 1}} transition={{delay : 0.5}}>
                    <h2 className="text-4xl font-extrabold dark:text-white">+120</h2>
                    <p>AÑOS</p>
                </motion.div>
                <div className="divider max-sm:hidden"></div>
                <motion.div className="p-8 max-w-sm max-sm:text-center" initial={{ x: -100, opacity: 0 }} animate={{ x : 0, opacity: 1}} transition={{delay : 1}}>
                    <h2 className="text-4xl font-extrabold dark:text-white">+60</h2>
                    <p>BOMBEROS</p>
                </motion.div>
                <div className="divider max-sm:hidden"></div>
                <motion.div className="p-8 max-w-sm max-sm:text-center" initial={{ x: -100, opacity: 0 }} animate={{ x : 0, opacity: 1}} transition={{delay : 1.5}}>
                    <h2 className="text-4xl font-extrabold dark:text-white">4</h2>
                    <p>UNIDADES</p>
                </motion.div>
                <div className="divider max-sm:hidden"></div>
                <motion.div className="p-8 max-w-sm max-sm:text-center" initial={{ x: -100, opacity: 0 }} animate={{ x : 0, opacity: 1}} transition={{delay : 2}}>
                    <h2 className="text-4xl font-extrabold dark:text-white">24/7</h2>
                    <p>ATENCIÓN DE EMERGENCIAS</p>
                </motion.div>
            </div>
        </motion.div>
    )
  }