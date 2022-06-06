import React from 'react'
import './App.css'
import {GrView} from 'react-icons/gr'
import {BiLike} from 'react-icons/bi'

const article = () => {
  return (
    <div className=''>
      <p className='trend'>Latest Articles</p>
      <p className='article1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est architecto saepe minima animi quaerat? Pariatur vel delectus hic officia? Hic nulla tempora laboriosam perferendis commodi dicta error. Accusamus at esse sint assumenda? Itaque sit maiores dolorem quasi sapiente nulla eligendi similique ipsum quidem corporis praesentium aliquid recusandae, corrupti ab quibusdam laboriosam veritatis. Cum consequatur est dolor officia totam libero quasi itaque non possimus praesentium saepe maxime repellat temporibus dolorem amet incidunt, quis vero dolores rem ab. Corrupti minus asperiores possimus, amet ex, nulla voluptas in laborum quia rem non harum fugit enim totam error corporis ipsum laudantium quo. Sint, fugiat! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ea beatae quod porro hic, animi exercitationem, asperiores temporibus nostrum, voluptatibus sapiente. Tenetur natus laboriosam temporibus voluptatem qui, saepe labore explicabo obcaecati quia dolore neque facere magnam aliquid architecto repudiandae quibusdam iusto fugiat ipsam perferendis ex possimus! Rem facere nam id repudiandae, maxime officia placeat ab laudantium dolores, fugit quos! Perspiciatis molestias unde illo aut, saepe cupiditate rem quis aliquid, quidem dolor, eligendi consectetur nulla. Debitis voluptates magni temporibus unde quae velit impedit quo quam similique eos nesciunt, sequi quis laborum rerum quisquam quas possimus accusamus harum nam, et sed corporis.</p>
      
      <div className="buttons">
        <GrView className='view'/>
        <BiLike className='like'/>
      </div>
      
    </div>
  )
}

export default article
