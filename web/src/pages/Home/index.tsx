import React, { useState, useEffect } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { HiOutlineRefresh } from 'react-icons/hi';
import { FaRegBell } from 'react-icons/fa';
import { Nav, CardDeck, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuth } from '../../hooks/AuthContext';

import {
    Container,
    ImageContainer,
    Navb,
    NavBG,
    TopDescription,
    Promocoes,
    PromoCards,
    Section,
    Menu,
    Footer,
    FooterCard,
} from './styles';

const Home: React.FC = () => {
    const { handleLogout } = useAuth();
    const [selected, setSelected] = useState('');
    // const src = '../temp/sanju-m-gurung-yXiJy7zfdzU-unsplash.jpg';
    const teste = [
        '../temp/sanju-m-gurung-yXiJy7zfdzU-unsplash.jpg',
        '../temp/andres-rodriguez-mKP2bl0R0pk-unsplash.jpg',
        '../temp/andres-rodriguez-3jJtXTwLZw4-unsplash.jpg',
        '../temp/tim-toomey-pe9dvM1rQkM-unsplash.jpg',
        '../temp/andres-rodriguez-So4EHYeShUM-unsplash.jpg',
        '../temp/sebastian-coman-photography-kFJ8tL53qcg-unsplash.jpg',
    ];
    useEffect(() => {
        AOS.init({
            duration: 1300,
            once: true,
        });
    }, []);
    return (
        // <Container data-aos="fade"></Container>
        <Container data-aos="fade">
            <ImageContainer>
                <NavBG className="navbgmin">
                    <Navb expand="lg" variant="dark" data-aos="fade-down">
                        <Navb.Brand
                            href="#home"
                            style={{
                                lineHeight: '30px',
                            }}
                        >
                            <h1>LOGO</h1>
                        </Navb.Brand>
                        <Navb.Toggle aria-controls="basic-navbar-nav" />
                        {/* Inicio large */}
                        <div className="navbar-collapse grande">
                            <Navb.Collapse id="basic-navbar-nav">
                                <Nav className="menuTop">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#home">
                                        Pratos do Dia
                                    </Nav.Link>
                                    <Nav.Link href="#home">Contato</Nav.Link>
                                    <Nav.Link href="#home">Endereço</Nav.Link>
                                </Nav>
                                <Nav>
                                    <button
                                        type="button"
                                        className="btnPormohide"
                                    >
                                        Promoções
                                    </button>
                                </Nav>
                            </Navb.Collapse>
                        </div>
                    </Navb>
                    <TopDescription data-aos="fade-right">
                        <h5>VENHA CONFERIR</h5>
                        <h1>Prove a melhor comida do Vale do Paraíba!</h1>
                        <button type="button">Promoções</button>
                    </TopDescription>
                </NavBG>
            </ImageContainer>

            <Promocoes className="container" data-aos="slide-up">
                <div className="promoCard">
                    <img
                        className="promoImg"
                        src="../temp/sanju-m-gurung-yXiJy7zfdzU-unsplash.jpg"
                        alt="Avatar"
                    />
                    <h5>Lorem Ipsum</h5>
                    <p>Quisque erat mauris, tempor ac dapibus venenatis</p>
                </div>
                <div className="promoCard">
                    <img
                        className="promoImg"
                        src="../temp/sebastian-coman-photography-Co-T6odt0es-unsplash.jpg"
                        alt="Avatar"
                    />
                    <h5>Lorem Ipsum</h5>
                    <p>Quisque erat mauris, tempor ac dapibus venenatis</p>
                </div>
                <div className="promoCard">
                    <img
                        className="promoImg"
                        src="../temp/sebastian-coman-photography-kFJ8tL53qcg-unsplash.jpg"
                        alt="Avatar"
                    />
                    <h5>Lorem Ipsum</h5>
                    <p>Quisque erat mauris, tempor ac dapibus venenatis</p>
                </div>
                <div className="promoCard">
                    <img
                        className="promoImg"
                        src="../temp/alex-munsell-Yr4n8O_3UPc-unsplash.jpg"
                        alt="Avatar"
                    />
                    <h5>Lorem Ipsum</h5>
                    <p>Quisque erat mauris, tempor ac dapibus venenatis</p>
                </div>
            </Promocoes>

            <Section className="secDaCasa" data-aos="fade">
                <div className="dvImgDacasa">
                    <img
                        className="ImgdaCasa"
                        src="../temp/Untitled-1.png"
                        alt="Avatar"
                    />
                </div>
                <div className="descDacasa">
                    <h3>Potato Steak</h3>
                    <div className="ingredientes">
                        <p>
                            Phasellus pellentesque, mauris non ornare congue,
                            orci nunc porttitor nibh, id lacinia diam orci vitae
                            ipsum. Interdum et malesuada fames ac ante ipsum
                            primis in faucibus.
                        </p>
                    </div>

                    <h2>R$ 32.50</h2>
                </div>
            </Section>

            <Menu className="container">
                <AnimateSharedLayout>
                    {teste.map(src => (
                        <PromoCards
                            onClick={() => setSelected(src)}
                            layout
                            layoutId={`container${src}`}
                            key={src}
                            data-aos="fade-up"
                        >
                            <img className="promoImg" src={src} alt="Avatar" />
                            <h5>Lorem Ipsum</h5>
                        </PromoCards>
                    ))}
                    <AnimatePresence>
                        {selected && (
                            <motion.div
                                layout
                                layoutId={`container${selected}`}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100vw',
                                    height: '100vh',
                                    cursor: 'pointer',
                                    position: 'absolute',
                                    // top: '0px',
                                    // right: '0px',
                                    // bottom: '0px',
                                    left: '0px',
                                    zIndex: 1000,
                                    // backgroundColor: 'red',
                                }}
                                onClick={() => setSelected('')}
                            >
                                <PromoCards
                                    style={{
                                        height: 'auto',
                                        border: '1px solid #000',
                                        paddingBottom: '20px',
                                    }}
                                >
                                    <img
                                        className="promoImg"
                                        src={selected}
                                        alt="Avatar"
                                        style={{ height: '480px' }}
                                    />
                                    <h5>Lorem Ipsum</h5>
                                    <p
                                        style={{
                                            padding: '0px 100px 0px 100px',
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed in tortor
                                        fermentum, ornare diam ac, vulputate
                                        velit. Nunc ullamcorper vel ligula sit
                                        amet lacinia.
                                    </p>
                                    <div className="tags">
                                        <p>Lorem Ipsum</p>
                                        <p>Lorem Ipsum</p>
                                        <p>Lorem Ipsum</p>
                                        <p>Lorem Ipsum</p>
                                        <p>Lorem Ipsum</p>
                                        <p>Lorem Ipsum</p>
                                    </div>
                                </PromoCards>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </AnimateSharedLayout>
            </Menu>
            <br />
            <br />
            <br />
            <br />
            <Footer>
                <div>
                    <h1>LOGO</h1>
                </div>
                <div className="categorias">
                    <ul>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                    </ul>
                </div>
                <div className="pratos">
                    <ul>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                    </ul>
                </div>
                <div className="endereco">
                    <h5>Endereço:</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam purus neque, mollis quis mollis sed, porttitor vitae
                        nibh.
                    </p>
                </div>
            </Footer>
        </Container>
    );
};
export default Home;
