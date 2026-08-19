import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('dopa-theme')
    return savedTheme === 'dark' || savedTheme === 'light'
      ? savedTheme
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('dopa-theme', theme)
  }, [theme])

  return (
    <main className="app-shell">
      <nav className="topbar" aria-label="Navegação principal">
        <a className="brand" href="/" aria-label="Dopa compras, início">
          <span className="brand-mark">d</span>
          <span>dopa<span className="brand-dot">.</span></span>
        </a>
        <div className="nav-links">
          <a href="#como-funciona">Como funciona</a>
          <a href="#como-funciona">Minhas listas</a>
        </div>
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Ativar modo ${theme === 'light' ? 'escuro' : 'claro'}`}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
        </button>
      </nav>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> compras sem complicação</p>
          <h1>Sua lista.<br /><em>Do seu jeito.</em></h1>
          <p className="hero-description">Organize suas compras, acompanhe tudo o que precisa e deixe o improviso para outra hora.</p>
          <a className="primary-button" href="#como-funciona">Criar minha lista <span aria-hidden="true">↗</span></a>
          <p className="hero-note"><span className="tiny-check">✓</span> simples, rápido e gratuito</p>
        </div>
        <div className="hero-visual" aria-label="Prévia de uma lista de compras">
          <div className="floating-label label-top">LISTA DA SEMANA <span>✦</span></div>
          <div className="list-card">
            <div className="card-header"><span>feira & mercado</span><span className="more">•••</span></div>
            <p className="card-date">quarta, 19 de junho</p>
            <div className="progress-row"><span>4 de 8 itens</span><span>50%</span></div>
            <div className="progress-bar"><span /></div>
            <div className="shopping-items">
              <label className="shopping-item checked"><input type="checkbox" defaultChecked /><span className="fake-checkbox">✓</span><span>abacate</span><small>2 un.</small></label>
              <label className="shopping-item"><input type="checkbox" /><span className="fake-checkbox" /><span>café em grãos</span><small>1 pacote</small></label>
              <label className="shopping-item checked"><input type="checkbox" defaultChecked /><span className="fake-checkbox">✓</span><span>tomate cereja</span><small>500 g</small></label>
              <label className="shopping-item"><input type="checkbox" /><span className="fake-checkbox" /><span>pão integral</span><small>1 un.</small></label>
            </div>
            <button className="add-item" type="button"><span>+</span> adicionar item</button>
          </div>
          <div className="floating-label label-bottom"><span className="sparkle">✦</span> foco no que importa</div>
        </div>
      </section>

      <section className="feature-strip" id="como-funciona">
        <div className="feature"><span className="feature-number">01</span><div><strong>Planeje melhor</strong><p>Tenha tudo à vista antes de sair.</p></div></div>
        <div className="feature"><span className="feature-number">02</span><div><strong>Marque na hora</strong><p>Comprou? É só dar um toque.</p></div></div>
        <div className="feature"><span className="feature-number">03</span><div><strong>Leve e prático</strong><p>Funciona em qualquer dispositivo.</p></div></div>
      </section>
    </main>
  )
}

export default App
