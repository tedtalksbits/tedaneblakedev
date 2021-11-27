import React from 'react'
import { Card } from './elements'

const Testimonial = () => {
   return (
      <Card>
         <div className="brandlogo">
            <img src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fcf29a817f21641ed86be71622407c49a" srcSet="
              https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fcf29a817f21641ed86be71622407c49a?width=100   100w,
              https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fcf29a817f21641ed86be71622407c49a?width=200   200w,
              https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fcf29a817f21641ed86be71622407c49a?width=400   400w,
              https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fcf29a817f21641ed86be71622407c49a?width=800   800w,
              https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fcf29a817f21641ed86be71622407c49a?width=1200 1200w,
              https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fcf29a817f21641ed86be71622407c49a?width=1600 1600w,
              https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fcf29a817f21641ed86be71622407c49a?width=2000 2000w,
              https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fcf29a817f21641ed86be71622407c49a
            " className="image" alt="" />
         </div>
         <div className="text-content">
            <div className="quote-img">
               <img
                  src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2c5fa80e838b45b9adf30546cc555cd8"
                  srcSet="
                          https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2c5fa80e838b45b9adf30546cc555cd8?width=100   100w,
                          https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2c5fa80e838b45b9adf30546cc555cd8?width=200   200w,
                          https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2c5fa80e838b45b9adf30546cc555cd8?width=400   400w,
                          https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2c5fa80e838b45b9adf30546cc555cd8?width=800   800w,
                          https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2c5fa80e838b45b9adf30546cc555cd8?width=1200 1200w,
                          https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2c5fa80e838b45b9adf30546cc555cd8?width=1600 1600w,
                          https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2c5fa80e838b45b9adf30546cc555cd8?width=2000 2000w,
                          https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2c5fa80e838b45b9adf30546cc555cd8
                        " className="image" alt="" />
            </div>
            <div className="quote-text">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quod harum sunt voluptatem nam, expedita magni facilis laborum id suscipit voluptatibus totam, iusto neque impedit similique?
            </div>
            <div className="details">
               <div className="person">Jane Doe</div>
               <div className="title">CEO,</div>
               <div className="company">Airbnb</div>
            </div>
         </div>
      </Card>
   )
}

export default Testimonial
