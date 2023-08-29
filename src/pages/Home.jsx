import React from 'react';
import PokemonCarousel from '../components/PokemonCarousel';
import '../assets/styles/home.scss';
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <section className="main-section">
                <div className="container-data">
                    <div className="container-left">
                        <h1>Pokedex</h1>
                        <p>
                            Use the Advanced Search to explore Pokémon by type, weakness, Ability, and more! Search for a Pokémon by name or using its National Pokédex number.
                        </p>
                        <Link to="/list">Search Pokemon</Link>
                    </div>

                    <div className="container-right">
                        <PokemonCarousel />
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;
