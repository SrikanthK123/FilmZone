import React from 'react'

const SlideExample = () => {
  return (
    <div>
         
   <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" class="active" aria-current="true"></button>
    </div>
    <div class="carousel-inner">
    <div class="carousel-item">
    <img id='Hero'  src= {img1} style={{width:'100%',height:'100vh'}}  />
        <div class="container">
          <div class="carousel-caption">
            <h1 style={{fontSize:'80px',color:'white'}} >Prabhas</h1>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img id='Hero'  src= {img2} style={{width:'100%',height:'100vh'}}  />
        <div class="container">
          <div class="carousel-caption">
            <h1 style={{fontSize:'80px',color:'white'}} >Ram Charan</h1>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img id='Hero'  src={img4} style={{width:'100%',height:'100vh'}}  />
        <div class="container">
          <div class="carousel-caption">
            <h1 style={{fontSize:'80px',color:'white'}}>Allu Arjun</h1>
          </div>
        </div>
      </div>
      <div class="carousel-item active">
        <img id='Hero'  src= {img3} style={{width:'100%',height:'100vh'}} />
        <div class="container">
          <div class="carousel-caption text-end">
            <h1 style={{color:'white',fontSize:'80px'}}>NTR </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default SlideExample
