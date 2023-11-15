import { Container } from "../../utils/Utils";
import "./Banner.scss"

import BanerImg from "../../assets/bannerImg.png"
import { Link } from "react-router-dom";

import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className='home-men__baner'>
        <Container>
            <div className="men-banner__card">
                <div className="banner-img">
                    <img src={BanerImg} alt="Banner img" />
                </div>
                <div className="banner-content">
                    <h1 className="banner__title">Универсальное решениедля ваших нужд в одежде</h1>
                    <p className="banner__text">Все, что вам нужно, чтобы найти идеальный предмет одежды, есть в Lode X. Мы предлагаем одежду ведущих брендов и редактирование изображений на ней.</p>
                    <Link to="/" className="banner__link">читать далее{<FaLongArrowAltRight/>}</Link>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Banner