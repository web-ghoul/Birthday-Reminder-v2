import styles from './Head.module.css';
import React,{useRef,useState} from 'react'
function App() {
  return (
    <>
      <header>
          <div className={styles.contain}>
              <h1 className={styles.h1}>The Birthdays</h1>
          </div>
      </header>
    </>
  );
}

export default App;
