import React from "react";
import "./About.css";

const About = () => {
    return (
        <main className="about-container">
            <section className="about-hero">
                <p className="about-eyebrow">Além das playlists</p>
                <h1>Sobre mim</h1>
                <p className="about-introduction">
                    Gosto de transformar ideias em experiências digitais simples,
                    intuitivas e com personalidade.
                </p>
            </section>

            <section className="about-content">
                <article className="about-card">
                    <h2>Quem sou</h2>
                    <p>
                        Sou uma pessoa curiosa, apaixonada por tecnologia, música e
                        por aprender algo novo em cada projeto.
                    </p>
                </article>
                <article className="about-card">
                    <h2>O que faço</h2>
                    <p>
                        Exploro desenvolvimento web e busco criar interfaces que
                        sejam bonitas, acessíveis e agradáveis de usar.
                    </p>
                </article>
                <article className="about-card about-card--highlight">
                    <h2>Este projeto</h2>
                    <p>
                        Esta página faz parte da minha experiência com React e da
                        minha vontade de construir uma versão personalizada do
                        Spotify.
                    </p>
                </article>
            </section>
        </main>
    );
};

export default About;
