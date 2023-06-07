import './App.css'

function App() {
  return (
    <>
      <header>
        <div className='header-container'>
          <div className='header-container-info'>
            <div className="header-container-info-text">
              <img src='./src/assets/icons/ShieldCheck.svg' />
              <p>Compra <span>100% segura</span> </p>
            </div>

            <div className="header-container-info-text">
              <img src='./src/assets/icons/Truck.svg' />
              <p><span>Frete grátis</span> acima de R$200</p>
            </div>

            <div className="header-container-info-text">
              <img src='./src/assets/icons/CreditCard.svg' />
              <p><span>Parcele</span> suas compras</p>
            </div>
          </div>


          <nav>
            <img src="./src/assets/icons/vtex-logo.svg" />
            <input className='header-container-navbar-input' type="text" placeholder='O que você está buscando? ' />

            <div className="nav-icons">
              <img src="./src/assets/icons/Group.svg" />
              <img src="./src/assets/icons/Heart.svg" />
              <img src="./src/assets/icons/UserCircle.svg" />
              <img src="./src/assets/icons/ShoppingCart.svg" />
            </div>
          </nav>

          <div className="header-container-list">
            <ul>
              <li><a href="#">todas as categorias</a></li>
              <li><a href="#">supermercado</a></li>
              <li><a href="#">livros</a></li>
              <li><a href="#">moda</a></li>
              <li><a href="#">lançamentos</a></li>
              <li><a href="#">ofertas do dia</a></li>
              <li>
                <a href="#">
                  <img src="./src/assets/icons/crown.svg"/>
                  assinatura
                </a>
                </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section className='main-background-image'>
          <p className='main-background-image-title'>Venha conhecer nossas promoções</p>
          <p className='main-background-image-subtitle'>50% Off nos produtos</p>

          <button>Ver produto</button>
        </section>

        <section className='main-options'>
          <div className='main-options-card'>
            <img src="./src/assets/img/tablet-smartphone.svg" />
            <p>Tecnologia</p>
          </div>

          <div className='main-options-card'>
            <img src="./src/assets/img/tablet-smartphone.svg" />
            <p>Tecnologia</p>
          </div>

        </section>
      </main>
    </>
  )
}

export default App
