import { Container } from "../../utils/Utils";

import { Link } from "react-router-dom";

import { FaLongArrowAltRight } from "react-icons/fa";
import "./AboutBanner.scss"

const AboutBanner = () => {
  return (
    <div className='home-men__baner'>
        <Container>
            <div className="men-banner__card">
                <div className="banner-content">
                    <h1 className="banner__title">Универсальное решениедля ваших нужд в одежде</h1>
                    <p className="banner__text">Все, что вам нужно, чтобы найти идеальный предмет одежды, есть в Lode X. Мы предлагаем одежду ведущих брендов и редактирование изображений на ней.</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default AboutBanner