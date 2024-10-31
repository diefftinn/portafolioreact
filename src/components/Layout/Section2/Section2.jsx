import React from "react";
import { ImgComponent } from "../../UI/ImgComponent/ImgComponent";
import logojs from'../../../assets/images/logojs.png'
import '../Section2/section2.css'



export const Section2 = () => {
    return (
        <div className="container-section2">
            <h2>Actividades de preferencia</h2>
            <div className="content-section">
                <div className="text-section">
                    <div className="study-item">
                        <h3>Lectura</h3>
                        <p>Intento practicar  la lectura porque es una forma de conocer nuevas ideas y perspectivas, ya que esta me ayuda a expandir el conocimiento sobre diferentes temas y mejora la concentración y comprensión, enriqueciendo la imaginación y creatividad.</p>
                    </div>
                    <div className="study-item">
                        <h3>Programación</h3>
                        <p>Practico la programación porque me gusta crear soluciones para problemas reales, mejorar las habilidades tecnológicas, conociendo nuevas oportunidades para el futuro.</p>
                    </div>
                    <div className="study-item">
                        <h3>Deporte</h3>
                        <p>El deporte es un insentivo para mi ya que gracias al el he mejorado mi percepcion de que es mantener una buena salud  como mantenerse activo y saludable,  en el cual este ayuda a mejorar la resistencia y fuerza, y te da un tiempo para relajarte y liberar el estrés. Además, es una excelente manera de desarrollar disciplina y enfoque.
                        </p>
                    </div>
                </div>
                <div className="image-section">
                    <img src={logojs} alt="Estudios" />
                </div>
            </div>
        </div>
    );
};


