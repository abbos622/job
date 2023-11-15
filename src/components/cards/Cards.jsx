import { Container, Linee } from "../../utils/Utils"
import "./Cards.scss"

import CardOne from "../../assets/card1.png"
import Card2 from "../../assets/card2.png"
import Card3 from "../../assets/card3.png"
import Card4 from "../../assets/card4.png"
import Card5 from "../../assets/card5.png"
import Card6 from "../../assets/card6.png"


import CardSvg from "../../assets/cardSvg.svg"
import Liked from "../../assets/liked.svg"
import ShopIcon from "../../assets/shopIcon.svg"

import { Link } from "react-router-dom"

const Cards = () => {
  return (
    <Container>
        <p className="top__card-text">Последние поступления</p>

        <div className="cards-header">
            <h2 className="cards-header__title">Новые рисунки </h2>

            <div className="cards-select__wrapper">
                <span>Сортировать:</span>
                <select>
                    <option value="1">Цена повозрастанию </option>
                    <option value="1">Цена повозрастанию </option>
                    <option value="1">Цена повозрастанию </option>
                    <option value="1">Цена повозрастанию </option>
                </select>
            </div>
        </div>
        <div className="cards">
            {/* 1-card */}
            <Link to="/produc" className="card">
                <div className="card__img">
                    <img src={CardOne} alt="" />
                </div>
                <div className="card__footer">
                    <div className="card__footer-content">
                        <img src={CardSvg} alt="" />
                        <div>Белый Boncai    <span>30.000</span> сум</div>
                    </div>
                    <Linee/>
                    <div className="card__footer-shop">
                        <div className="card-icon">
                            <img src={Liked} alt="" />
                            <img src={ShopIcon} alt="" />
                        </div>
                        <button className="card-btn">Подробнее</button>
                    </div>
                </div>
            </Link>
            {/* 2-card */}
            <Link to="/produc" className="card">
                <div className="card__img">
                    <img src={Card2} alt="" />
                </div>
                <div className="card__footer">
                    <div className="card__footer-content">
                        <img src={CardSvg} alt="" />
                        <div>Белый Plade <span>32.000</span> сум</div>
                    </div>
                    <Linee/>
                    <div className="card__footer-shop">
                        <div className="card-icon">
                            <img src={Liked} alt="" />
                            <img src={ShopIcon} alt="" />
                        </div>
                        <button className="card-btn">Подробнее</button>
                    </div>
                </div>
            </Link>
            {/* 3-card */}
            <Link to="/produc" className="card">
                <div className="card__img">
                    <img src={Card3} alt="" />
                </div>
                <div className="card__footer">
                    <div className="card__footer-content">
                        <img src={CardSvg} alt="" />
                        <div>Белый Deta Plade <span>45.000</span> сум</div>
                    </div>
                    <Linee/>
                    <div className="card__footer-shop">
                        <div className="card-icon">
                            <img src={Liked} alt="" />
                            <img src={ShopIcon} alt="" />
                        </div>
                        <button className="card-btn">Подробнее</button>
                    </div>
                </div>
            </Link>
            <Link to="/produc" className="card">
                <div className="card__img">
                    <img src={Card4} alt="" />
                </div>
                <div className="card__footer">
                    <div className="card__footer-content">
                        <img src={CardSvg} alt="" />
                        <div>Чёрный North Facee  <span>35.000</span> сум</div>
                    </div>
                    <Linee/>
                    <div className="card__footer-shop">
                        <div className="card-icon">
                            <img src={Liked} alt="" />
                            <img src={ShopIcon} alt="" />
                        </div>
                        <button className="card-btn">Подробнее</button>
                    </div>
                </div>
            </Link>
            <Link to="/produc" className="card">
                <div className="card__img">
                    <img src={Card5} alt="" />
                </div>
                <div className="card__footer">
                    <div className="card__footer-content">
                        <img src={CardSvg} alt="" />
                        <div>Чёрный Plain Godzilla <span>32.000</span> сум</div>
                    </div>
                    <Linee/>
                    <div className="card__footer-shop">
                        <div className="card-icon">
                            <img src={Liked} alt="" />
                            <img src={ShopIcon} alt="" />
                        </div>
                        <button className="card-btn">Подробнее</button>
                    </div>
                </div>
            </Link>
            <Link to="/produc" className="card">
                <div className="card__img">
                    <img src={Card6} alt="" />
                </div>
                <div className="card__footer">
                    <div className="card__footer-content">
                        <img src={CardSvg} alt="" />
                        <div>Чёрный Plain Sharky <span>45.000</span> сум</div>
                    </div>
                    <Linee/>
                    <div className="card__footer-shop">
                        <div className="card-icon">
                            <img src={Liked} alt="" />
                            <img src={ShopIcon} alt="" />
                        </div>
                        <button className="card-btn">Подробнее</button>
                    </div>
                </div>
            </Link>
        </div>

        <button className="card__end-btn card-btn">Показать Больше</button>
    </Container>
  )
}

export default Cards