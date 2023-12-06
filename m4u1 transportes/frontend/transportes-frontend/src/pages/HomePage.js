import React from "react";

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="Avion"></img>
            </div>
            <div className="coliumnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p> lorem </p>
                    <p> ipsum </p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span class="cita">Simplemente Excelente</span>
                        <span class="autor">Juan Peres - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;