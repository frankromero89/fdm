import React from 'react';
import ImgDrinks from '../assets/images/bebidas.png'
import TitleAnimate from './titleAnimate'

let drinks;
export default drinks = (props) => {
  return (
    <div className='contentDrinks'>
        <div className='containerMenus'>
            <div className='menuOne'>
                <TitleAnimate text={<h1 className='titleSection'>BEBIDAS</h1> } />
                <div className='drinksName'>
                    <p>Agua Embotellada</p>
                    <p>Agua Mineral</p>
                    <p>Agua Quina</p>
                    <p>Clamato</p>
                    <p>Coca Cola</p>
                    <p>Coca Cola Light</p>
                    <p>Coca Zero</p>
                    <p>Fanta</p>
                    <p>Fresca</p>
                    <p>Ginger Ale</p>
                    <p>Limonada</p>
                    <p>Naranjada</p>
                    <p>Sidral</p>
                    <p>Sidral Light</p>
                </div>
            </div>
            <div className='containerImageDrink'>
                <img className='imgDrinks' src={ImgDrinks} alt='img_drinks' />
            </div>
            <div className='menuTwo'>
                <TitleAnimate text={<h1 className='titleSection'>DESTILADOS</h1> } />

                <div className='drinksName'>
                    <h3 className='titleDrinks'>APERITIVOS</h3>

                    <p>Cinzano Blanco</p>
                    <p>Cinzano Rojo</p>

                    <h3 className='titleDrinks'>RON</h3>

                    <p>Ron Appleton Blanco</p>
                    <p>Ron Appleton Dorado</p>
                    <p>Ron Appleton State</p>
                    <p>Ron Bacardí Blanco</p>
                    <p>Ron Capitan Morgan</p>
                    <p>Ron Havana Club 7 Años</p>
                    <p>Ron Malibu</p>
                    <p>Ron Matusalem Clásico</p>
                    <p>Ron Matusalem Platino</p>
                    <p>Ron Zacapa Centenario 23 GR</p>

                    <h3 className='titleDrinks'>WHISKIES</h3>

                    <p>Whisky Buchanans 12</p>
                    <p>Whisky Buchanans 18</p>
                    <p>Whisky Chivas Regal</p>
                    <p>Whisky Glenfiddich 12 Años</p>
                    <p>Whisky J&ß </p>
                    <p>Whisky J. Walker Etiqueta Negra</p>
                    <p>Whisky J. Walker Etiqueta Roja</p>
                    <p>Whisky Jack Daniel´s Honey</p>
                    <p>Whisky Jack Daniel´s</p>
                    <p>Whisky Jameson</p>
                    <p>Whisky Macallan</p>
                    <p>Whisky Old Parr</p>

                    <h3 className='titleDrinks'>VINOS</h3>

                    <p>Botella Vino Casa Madero Rosado (750ml)</p>
                    <p>Botella Vino Cetto Tinto (750ml)</p>
                    <p>Botella Vino Fraixent Espumoso (750ml)</p>
                    <p>Copa Vino Cetto Tinto (150ml)</p>
                    <p>Copa Vino Diamante Blanco (150ml)</p>
                    <p>Copa Vino Fraixent Espumo (120ml)</p>
                    <p>Botella Vino Blanco Diamante (750ml)</p>

                    <h3 className='titleDrinks'>VODKAS &GINEBRAS</h3>

                    <p>Ginebra Beerfeater</p>
                    <p>Ginebra Bombay Sapphire</p>
                    <p>Ginebra Bulldog</p>
                    <p>Ginebra Hendricks</p>
                    <p>Vodka Absolut Azul</p>
                    <p>Vodka Grey Goose</p>
                    <p>Vodka Ketel One</p>
                    <p>Vodka Smirnoff</p>
                    <p>Vodka Stochnaya</p>
                    <p>Vodka Wiborowa</p>

                    <h3 className='titleDrinks'>BRANDIES & COGNACS</h3>

                    <p>Torres X</p>
                    <p>Terry</p>
                    <p>Martell vsop</p>
                    <p>Hennessy vsop</p>

                    <h3 className='titleDrinks'>TEQUILAS & MEZCALES</h3>

                    <p>Cuervo 1800 Reposado</p>
                    <p>Maestro Tequilero</p>
                    <p>Mezcal Mortal Cupreata</p>
                    <p>Mezcal Mortal Espadín</p>
                    <p>Mezcal Organico Cuish Espadín</p>
                    <p>Mezcal Organico Cuish</p>
                    <p>Mezcal Pelotón Dead</p>
                    <p>Mezcal Unión</p>
                    <p>Tequila Centenario Plata</p>
                    <p>Tequila Centenario Reposado</p>
                    <p>Tequila Don Julio 70 Añejo</p>
                    <p>Tequila Don Julio Reposado</p>
                    <p>Tequila Herradura Antiguo</p>
                    <p>Tequila Herradura Blanco</p>
                    <p>Tequila Herradura Reposado</p>
                    <p>Tequila Patrón Añejo</p>
                    <p>Tequila Patrón Reposado</p>
                    <p>Tequila Patrón Silver </p>
                    <p>Tequila Reserva de la Familia</p>
                    <p>Tequila Tradicional</p>

                    <h3 className='titleDrinks'>DIGESTIVOS</h3>

                    <p>Amareto Disarono</p>
                    <p>Anís Cadenas</p>
                    <p>Anís Chinchon Dulce</p>
                    <p>Anís Chinchon Seco</p>
                    <p>Jagermeister</p>
                    <p>Licor Baileys</p>
                    <p>Licor del 43</p>
                    <p>Midori</p>
                    <p>Sambuca Negro</p>
                </div>
            </div>
        </div>
    </div>
  );
};
