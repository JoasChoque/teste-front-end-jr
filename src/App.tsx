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
                  <img src="./src/assets/icons/crown.svg" />
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
            <img src="./src/assets/img/supermercado.svg" />
            <p>Supermercado</p>
          </div>

          <div className='main-options-card'>
            <img src="./src/assets/img/whiskey.svg" />
            <p>Bebidas</p>
          </div>

          <div className='main-options-card'>
            <img src="./src/assets/img/ferramentas.svg" />
            <p>Ferramentas</p>
          </div>

          <div className='main-options-card'>
            <img src="./src/assets/img/saude.svg" />
            <p>Saúde</p>
          </div>

          <div className='main-options-card'>
            <img src="./src/assets/img/esportes.svg" />
            <p>Esportes e Fitness</p>
          </div>

          <div className='main-options-card'>
            <img src="./src/assets/img/moda.svg" />
            <p>Moda</p>
          </div>
        </section>

        <section className="main-options-products">
          <div className="main-options-products-gray-line"></div>
          <p className='main-options-products-gray-line-text'>Produtos Relacionados</p>
          <div className='main-options-products-gray-line'></div>
        </section>

        <section className='main-navbar-products'>
          <ul className='main-navbar-products-ul'>
            <li><a href="#">celular</a></li>
            <li><a href="#">acessórios</a></li>
            <li><a href="#">tablets</a></li>
            <li><a href="#">notebooks</a></li>
            <li><a href="#">tvs</a></li>
            <li><a href="#">ver todos</a></li>
          </ul>
        </section>

        <section className="main-products">
          <div className='main-products-card'>
            <div className='main-products-card-content'>
              <img src="./src/assets/img/celular.png" />
              <p className='main-products-card-content-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className='main-products-card-content-offer'>R$ 30,90</p>
              <p className='main-products-card-content-price'>R$ 28,90</p>
              <p className='main-products-card-content-parcela'>ou 2x de R$ 49,95 sem juros</p>
              <span>Frete grátis</span>
              <button>comprar</button>
            </div>
          </div>
        </section>

        <section className="main-parceiros">
          <div className='main-parceiros-card'>
            <div className='main-parceiros-card-content'>
              <p className='main-parceiros-card-content-title'>Parceiros</p>
              <p className='main-parceiros-card-content-description'>Lorem ipsum dolor sit amet, consectetur</p>
              <button>confira</button>
            </div>
          </div>

          <div className='main-parceiros-card'>
            <div className='main-parceiros-card-content'>
              <p className='main-parceiros-card-content-title'>Produtos</p>
              <p className='main-parceiros-card-content-description'>Lorem ipsum dolor sit amet, consectetur</p>
              <button>confira</button>
            </div>
          </div>
        </section>

        <section className="main-options-products">
          <div className="main-options-products-gray-line"></div>
          <div className='main-options-products-text'>
            <p className='main-options-products-gray-line-text'>Produtos Relacionados</p>
            <p className='main-options-products-text-sub'>Ver todos</p>
          </div>
          <div className='main-options-products-gray-line'></div>
        </section>

        <section className="main-products">
          <div className='main-products-card'>
            <div className='main-products-card-content'>
              <img src="./src/assets/img/celular.png" />
              <p className='main-products-card-content-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className='main-products-card-content-offer'>R$ 30,90</p>
              <p className='main-products-card-content-price'>R$ 28,90</p>
              <p className='main-products-card-content-parcela'>ou 2x de R$ 49,95 sem juros</p>
              <span>Frete grátis</span>
              <button>comprar</button>
            </div>
          </div>
        </section>

        <section className="main-produtos">
          <div className='main-produtos-card'>
            <div className='main-produtos-card-content'>
              <p className='main-produtos-card-content-title'>Produtos</p>
              <p className='main-produtos-card-content-description'>Lorem ipsum dolor sit amet, consectetur</p>
              <button>confira</button>
            </div>
          </div>

          <div className='main-produtos-card'>
            <div className='main-produtos-card-content'>
              <p className='main-produtos-card-content-title'>Produtos</p>
              <p className='main-produtos-card-content-description'>Lorem ipsum dolor sit amet, consectetur</p>
              <button>confira</button>
            </div>
          </div>
        </section>

        <section className='main-marcas'>
          <div className='main-marcas-title'>
            <p>Navegue por marcas</p>
          </div>

          <div className='main-marcas-group'>
          <div className='main-marcas-imagens'>
            <img src="./src/assets/img/vtex.svg" alt="vtex logo" />
          </div>

          <div className='main-marcas-imagens'>
            <img src="./src/assets/img/vtex.svg" alt="vtex logo" />
          </div>

          <div className='main-marcas-imagens'>
            <img src="./src/assets/img/vtex.svg" alt="vtex logo" />
          </div>

          <div className='main-marcas-imagens'>
            <img src="./src/assets/img/vtex.svg" alt="vtex logo" />
          </div>

          <div className='main-marcas-imagens'>
            <img src="./src/assets/img/vtex.svg" alt="vtex logo" />
          </div>
          </div>
        </section>

        <section className="main-options-products">
          <div className="main-options-products-gray-line"></div>
          <div className='main-options-products-text'>
            <p className='main-options-products-gray-line-text'>Produtos Relacionados</p>
            <p className='main-options-products-text-sub'>Ver todos</p>
          </div>
          <div className='main-options-products-gray-line'></div>
        </section>

        <section className="main-products">
          <div className='main-products-card'>
            <div className='main-products-card-content'>
              <img src="./src/assets/img/celular.png" />
              <p className='main-products-card-content-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className='main-products-card-content-offer'>R$ 30,90</p>
              <p className='main-products-card-content-price'>R$ 28,90</p>
              <p className='main-products-card-content-parcela'>ou 2x de R$ 49,95 sem juros</p>
              <span>Frete grátis</span>
              <button>comprar</button>
            </div>
          </div>
        </section>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default App
