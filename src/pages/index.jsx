import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

// Link de rota para a página About

function createCss() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontSize: '3.5rem',
    },
    title: {
      marginBottom: '1rem',
    },
    link: {
      color: '#007bff',
      textDecoration: 'none',
    },
  }
  return styles
}


function App() {
  const [count, setCount] = useState(0)

  const styles = createCss();

  return (
    <div style={styles.container}>
      <p style={styles.title}>Clique em "Sobre" para ver gente gostosa</p>
      <Link
        to="/about"
        style={styles.link}
      >
        Sobre
      </Link>
      <br />
      <Link
        to="/data"
        style={styles.link}>
        Dados
      </Link>
    </div>
  )
}

export default App
