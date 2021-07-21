import styled from 'styled-components';
import { Navbar, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import img from '../../assets/navbg.jpg';

export const Container = styled.div`
    background-color: #fff;
    height: 100%;
    width: 100%;
    transition: 0.5s;
    @media (max-width: 991px) {
        .navbgmin {
            height: 30vh;
        }
    }
`;

export const ImageContainer = styled.div`
    background-color: #2f2328;
    height: 80vh;
    width: 100%;
    transition: 0.5s;

    @media (max-width: 1399px) {
        height: 30vh;
        transition: 0.5s;
    }

    @media (max-width: 991px) {
        .navbgmin {
            height: 30vh;
        }
    }
`;

export const NavBG = styled.div`
    background: url(${img});
    background-color: #2f2328;
    background-size: 127%;
    background-position: 0% 46%;
    height: 100%;
    width: 100%;
    z-index: 998;
`;

export const Navb = styled(Navbar)`
    width: 100%;
    height: 130px;
    padding: 0;
    background-color: transparent;
    transition: 0.3s;
    z-index: 1000;
    position: absolute;

    .navbar-brand {
        margin-left: 230px;
        transition: 0.3s;
        h1 {
            font-family: 'Roboto', sans-serif;
            font-size: 50px;
            font-weight: 900;
        }
    }

    .navbar-nav .nav-link {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: #ffffff;
    }

    .nav-item .dropdown-toggle {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: #ffffff;
    }

    .navbar-collapse {
        margin-right: 0px;
        .navbar-nav {
            margin-left: auto;
            button {
                width: 115px;
                height: 35px;
                color: #fff;
                background-color: #c0653e;
                border-color: #c0653e;
                border: none;
                border-radius: 5px;
                margin-right: 230px;
            }
        }

        .nav-link {
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
            color: #ffffff;
            margin-right: 20px;
            margin-top: -7px;
        }
    }

    .menuTop {
        margin-right: -550px;
        transition: 0.3s;
    }

    // large screen
    @media (min-width: 991px) {
        padding: 0px;
        transition: 0.3s;
    }
    // small screen
    @media (max-width: 991px) {
        padding-left: 0px;
        padding-right: 0px;
        transition: 0.3s;
        .navbar-collapse {
            background-color: green;
        }
    }
    @media (max-width: 1751px) {
        /* display: none; */
        .btnPormohide {
            display: none;
        }
    }
    @media (max-width: 1751px) {
        .navbar-brand {
            margin-left: 10%;
            transition: 0.3s;
        }
        .menuTop {
            margin-right: -45%;
            transition: 0.3s;
        }
    }
`;

export const TopDescription = styled(Card)`
    position: absolute;
    background-color: transparent;
    width: 500px;
    height: 200px;
    margin-top: 300px;
    margin-left: 230px;
    border: none;
    transition: 0.5s;

    h5 {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 700;
        color: #a9a9a9;
    }
    h1 {
        font-family: 'Arial', sans-serif;
        font-weight: 400;
        font-size: 40px;
    }
    button {
        margin-top: 20px;
        width: 115px;
        height: 35px;
        color: #fff;
        background-color: #c0653e;
        border-color: #c0653e;
        border: none;
        border-radius: 5px;
        margin-right: 230px;
    }

    @media (max-width: 1751px) {
        margin-left: 10%;
        transition: 0.5s;
    }
    @media (max-width: 1399px) {
        /* display: none; */
        margin-top: 180px;
        transition: 0.5s;
        h5 {
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            font-weight: 700;
            color: #a9a9a9;
        }
        h1 {
            font-family: 'Arial', sans-serif;
            font-weight: 400;
            font-size: 25px;
        }
    }
    @media (max-width: 991px) {
        display: none;
    }
`;

export const Promocoes = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 80px;
    background-color: #fff;
    transition: 0.5s;
    z-index: 999;

    .promoCard {
        margin-top: 10px;
        width: 300px;
        height: 283px;
        background-color: #fff;
        border-radius: 10px;
        border: 1px solid #dbdbdb;
        text-align: center;

        h5 {
            margin-top: 10px;
            font-size: 16px;
            font-weight: bold;
            color: #000;
        }
        p {
            font-size: 13px;
            color: #727272;
        }
    }

    .promoImg {
        height: 181px;
        width: 100%;
        border-radius: 10px 10px 0px 0px;
    }

    @media (max-width: 1399px) {
        transition: 0.5s;
        border-radius: 10px;
        margin-top: -100px;
        width: 100%;

        .promoCard {
            flex-basis: 49%;
            height: 340px;
            transition: 0.5s;

            h5 {
                margin-top: 25px;
                font-size: 16px;
                font-weight: bold;
                color: #000;
                transition: 0.5s;
            }
            p {
                font-size: 13px;
                color: #727272;
                transition: 0.5s;
            }
            .promoImg {
                height: 220px;
                width: 100%;
                border-radius: 10px 10px 0px 0px;
                transition: 0.5s;
            }
        }
    }

    @media (max-width: 767px) {
        transition: 0.5s;
        border-radius: 10px;
        margin-top: -100px;
        width: 100%;
        transition: 0.5s;

        .promoCard {
            flex-basis: 49%;
            height: 300px;
            transition: 0.5s;
            h5 {
                margin-top: 25px;
                font-size: 16px;
                font-weight: bold;
                color: #000;
                transition: 0.5s;
            }
            p {
                font-size: 13px;
                color: #727272;
                transition: 0.5s;
            }
            .promoImg {
                height: 181px;
                border-radius: 10px 10px 0px 0px;
                transition: 0.5s;
            }
        }
    }
`;

export const PromoCards = styled(motion.div)`
    margin-top: 10px;
    width: 530px;
    height: 320px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #dbdbdb;
    text-align: center;
    flex-basis: 49%;
    /* flex-basis: 30%; */
    cursor: pointer;

    .promoImg {
        height: 250px;
        width: 100%;
        object-fit: cover;
        border-radius: 10px 10px 0px 0px;
    }

    h5 {
        margin-top: 25px;
        font-size: 16px;
        font-weight: bold;
        color: #000;
    }
    p {
        font-size: 13px;
        color: #727272;
    }

    @media (max-width: 1399px) {
        flex-basis: 49%;
        height: 340px;
        transition: 0.5s;

        h5 {
            margin-top: 25px;
            font-size: 16px;
            font-weight: bold;
            color: #000;
            transition: 0.5s;
        }
        p {
            font-size: 13px;
            color: #727272;
            transition: 0.5s;
        }
        .promoImg {
            height: 220px;
            width: 100%;
            border-radius: 10px 10px 0px 0px;
            /* transition: 0.5s; */
        }
    }

    @media (max-width: 767px) {
        flex-basis: 49%;
        height: 300px;
        transition: 0.5s;
        h5 {
            margin-top: 25px;
            font-size: 16px;
            font-weight: bold;
            color: #000;
            transition: 0.5s;
        }
        p {
            font-size: 13px;
            color: #727272;
            transition: 0.5s;
        }
        .promoImg {
            height: 181px;
            border-radius: 10px 10px 0px 0px;
            /* transition: 0.5s; */
        }
    }
    .tags {
        display: -ms-flexbox; /* IE10 */
        display: flex;
        -ms-flex-wrap: wrap; /* IE10 */
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        text-align: center;
        p {
            padding: 3px 10px 3px 10px;
            margin: 2px;
            border-radius: 5px;
            background-color: rgba(47, 35, 40, 0.8);
            color: #a3a3a3;
            /* font-size: 11px; */
        }
    }
`;

export const Section = styled.section`
    height: 270px;
    margin-top: 100px;
    background-color: rgba(148, 132, 108, 0.3);
    display: flex;

    .dvImgDacasa {
        margin-left: 18%;

        img {
            width: 309px;
            height: 220px;
        }
    }
    .descDacasa {
        margin-top: 30px;
        margin-left: 100px;
        h3 {
            color: #2f2328;
            font-size: 36px;
            font-weight: bold;
        }
        h2 {
            color: #c0653e;
            font-size: 28px;
            font-weight: bold;
        }
        .ingredientes {
            width: 411px;
        }

        p {
            color: #727272;
            font-size: 13px;
        }
    }

    @media (max-width: 1399px) {
        flex-direction: row;
        flex-wrap: wrap;
        height: auto;
        align-items: center;
        justify-content: center;
        text-align: center;
        .dvImgDacasa {
            margin-top: 30px;
            width: 20%;
            margin-left: 0px;
            flex-basis: 100%;
        }

        .descDacasa {
            flex-basis: 100%;
            margin-left: 0px;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-bottom: 30px;

            .ingredientes {
                padding: 0px 50px 0px 50px;
                width: auto;
            }
        }
    }
`;

export const Menu = styled.div`
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 80px;
    background-color: #fff;
    transition: 0.5s;
`;

export const Footer = styled.div`
    display: flex;
    display: -ms-flexbox; /* IE10 */
    flex-wrap: wrap;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    min-height: 300px;
    position: relative;
    bottom: 0;
    background-color: #2f2328;
    color: white;
    text-align: left;
    padding: 50px 230px 50px 230px;
    h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 50px;
        font-weight: 900;
    }
    h5 {
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: 600;
    }
    .categorias ul {
        list-style-type: none;
    }
    .pratos ul {
        list-style-type: none;
    }
    .endereco {
        width: 250px;
        img {
            height: 100px;
            width: 100%;
            object-fit: cover;
            border-radius: 10px 10px 0px 0px;
        }
        p {
            font-size: 12px;
            text-align: left;
            flex-basis: 49%;
        }
    }
`;

export const FooterCard = styled.div`
    width: 330px;
    height: 200px;
    border-radius: 10px;
    border-color: transparent !important;
    border: 1px solid #dbdbdb;
    text-align: center;

    .endImg {
        height: 200px;
        width: 100%;
        object-fit: cover;
        border-radius: 10px 10px 0px 0px;
    }
`;
