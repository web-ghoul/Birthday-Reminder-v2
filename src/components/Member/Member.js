import React from 'react'
import { ImCross } from "react-icons/im";
import styles from './Members.module.css'

const Members = ({info,deleteMember}) => {
  const {name,age ,gender,src,id} = info
  return (
    <article key={id} className={styles.member} >
      <picture>
        <img src={src} alt={name} />
      </picture>
      <div className={styles.info}>
        <div className={styles.data}>
          <span className="name">{name}</span>
          <span className="age">{age<20? (gender==="male"? age + " 🧑🏻": age + " 🧒🏻")  : (gender==="male"? age + " 🧔🏻": age + " 🧓🏻" )}</span>
        </div>
      </div>
      <ImCross className='icon' onClick={()=>deleteMember(id)}/>
    </article> 
  );
}

export default Members