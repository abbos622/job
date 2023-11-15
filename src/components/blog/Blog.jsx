import React from 'react'
import { Container, Linee } from '../../utils/Utils'

import blogImg from "../../assets/blog/blog.svg"
import blogImg1 from "../../assets/blog/blog1.svg"
import blogImg2 from "../../assets/blog/blog2.svg"

import "./Blog.scss"

const Blog = () => {
  return (
    <Container>
        <Linee/>
        <div className="swiper-title">
            <h2>Блог</h2>
        </div>

        <div className="blog__wrapper">
            <div className="blog__card">
                <img src={blogImg} alt="" />
                <p>Эта рубашка спасет Вы сэкономите 40$ при себе Следующая онлайн-покупка</p>
            </div>
            <div className="blog__card">
                <img src={blogImg} alt="" />
                <p>История позади Lode X: Это Стильное  движение</p>
            </div>
            <div className="blog__card">
                <img src={blogImg1} alt="" />
                <p>Что надеть <br/> Мадрид: 8 нарядов для Сделайте так, чтобы вы выглядели местными</p>
            </div>
            <div className="blog__card">
                <img src={blogImg2} alt="" />
                <p>Руководство по покупке Костюм: Что ты <br/> Надо знать</p>
            </div>
        </div>
    </Container>
  )
}

export default Blog