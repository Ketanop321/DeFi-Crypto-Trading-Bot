import React from 'react'

const Search = () => {
  return (
    <div>
      <div className='techwave_fn_searchbar'>
        <div className='search__bar'>
          <input type="text"
           className='search__input'
           placeholder='Search here..'
            />
            <img src="img/lighticon/light-5.png" alt="" 
            className='fn__svg search__icon'
            />
              </div>
            <span className='search__closer'>
              <img src="img/lighticon/light-18.png" alt=""
              className='fnn__svg'/>
            </span>
        </div>

          <div className='search__results'>
            <div className='results__title'>Results</div>
            <div className='results__list'>
              <ul>
                <li>
                  <a href="#">Artificial Intelligence</a>
                </li>
                <li>
                  <a href="#">Learn about impact of Ai crypto BOT</a>
                </li>
                <li>
                  <a href="#">Learn Blockchain</a>
                </li>
                <li>
                  <a href="#">Learn SOlidity</a>
                </li>
              </ul>
            </div>
          </div>

      
    </div>
  )
}

export default Search
