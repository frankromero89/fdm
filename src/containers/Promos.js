import React, {Component} from 'react';
import Slider from "react-slick";

//images
import Cantinero from'../assets/images/promos/cantinero.png';
import Cumple from'../assets/images/promos/cumple.png';
import Menu from'../assets/images/promos/menu_esp.png';
import Pinta from'../assets/images/promos/pinta.png';
import Sandwiches from'../assets/images/promos/sandwiches.png';
import TitleAnimate from '../components//titleAnimate'

class PromosSlider extends Component {

    componentDidMount() {
      // window.addEventListener("scroll",this.scrollAnimate);
        const $reviews = document.querySelector('.containerPromos .slick-slider');
        const options = {
           threshold: .2
        }

        console.log($reviews)
          const callback = (entries, observer) => {
             if(entries[0].isIntersecting){
                $reviews.classList.add('animate')
             }
          }

        const observer = new IntersectionObserver(callback, options);
        observer.observe($reviews);
   }


    render() {
        const settings = {
            dots: true,
            arrows:false,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [{
                breakpoint: 600,
                settings:{
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        };
        return(
            <div className='containerPromos allView' >
                <div className='titleSection'>
                  <TitleAnimate
                      text={<h1 className='titleSection'>Promociones</h1> }
                  />
                </div>
                <Slider {...settings} >
                    <div className='promo menu'>
                        <div className='containerImg'>
                            <img src={Menu} alt="sandwiches"/>
                        </div>
                        <div className='textPromos'>
                            <h1 className="gold namePromo">menú especial</h1>
                            <div className='promoInfo'>
                                <h3 className="gold ">¡Más que un platillo es una experiencia!</h3>
                                <p className='white'>De lunes a Viernes de <br />
                                1pm a 5pm disfrúta de un <br />
                                menú diferente maridado <br />
                                con 2 cervezas de 150 ml</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='promo sandwich'>
                        <div className='containerImg'>
                            <img src={Sandwiches} alt="sandwiches"/>
                        </div>
                        <div className='textPromos'>
                            <h1 className="gold namePromo">sandwiches 2x1</h1>
                            <div className='promoInfo'>
                                <h3 className="gold">¡Para compartir!</h3>
                                <p className='white'>Los Miércoles, comparte <br />
                                cualquiera de nuestros <br />
                                sándwiches al 2x1.</p>
                            </div>
                        </div>
                    </div>
                    <div className='promo cantinero'>
                        <div className='containerImg'>
                            <img class="vasos" src={Cantinero} alt="promo_cantinero"/>
                        </div>
                        <div className='textPromos'>
                            <h1 className="gold namePromo">Cantinero</h1>
                            <div className='promoInfo'>
                                <h3 className="gold">¡Para compartir!</h3>
                                <p className='white'>Los Miércoles, comparte <br />
                                cualquiera de nuestros <br />
                                sándwiches al 2x1.</p>
                            </div>
                        </div>
                    </div> */}
                    <div className='promo cumple'>
                        <div className='containerImg'>
                            <img src={Cumple} alt="promo_cumple"/>
                        </div>
                        <div className='textPromos'>
                            <h1 className="gold namePromo">cumpleañero</h1>
                            <div className='promoInfo'>
                                <p className='white'>En compañia de 3 o más <br />
                                personas,todos los alimentos que <br />
                                consumas más toda la cerveza de <br />
                                Cervecería de Colima que quieras es</p>
                                <h3 className="gold">GRATIS</h3>
                            </div>
                        </div>
                    </div>
                    {/* <div className='promo pinta'>
                        <div className='containerImg'>
                            <img src={Pinta} class="pinta" alt="promo_pinta"/>
                        </div>
                        <div className='textPromos'>
                            <h1 className="gold namePromo">arriba tu pinta</h1>
                            <div className='promoInfo'>
                                <h3 className="gold">¡Último fin de Mes!</h3>
                                <p className='white'>Todas las cervezas de 500ml<br />
                                a precio de una cerveza de<br />
                                355ml.</p>
                            </div>
                        </div>
                    </div> */}
                </Slider>
            </div>
        )
    }
}

export default PromosSlider;
