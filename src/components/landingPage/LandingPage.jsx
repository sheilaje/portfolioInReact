import React from 'react'

function LandingPage()
{   
  return(
    <div class="ui grid">
      <div class="four wide column">
        <div class="ui vertical fluid tabular menu">
          <a class="item">
         Bio
          </a>
          <a class="item">
        Pics
          </a>
          <a class="item active">
        Companies
          </a>
          <a class="item">
        Links
          </a>
        </div>
      </div>
      <div class="twelve wide stretched column">
        <div class="ui segment">
      This is an stretched grid column. This segment will always match the tab height
        </div>
      </div>
    </div>
  )
}

export default LandingPage