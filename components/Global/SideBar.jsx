import React , {useState} from 'react'
 
  const SideBarComponent = ({array,title, setActive, 
    active , setActiveComponent}) => {
        <div className='nav_group'>
          <h2 className='group__title'>{title}</h2>
          <ul className='group__list'>
            {
              array.map((menu, index) => (
                <li key={index} onClick={() => setActiveComponent(menu.menu)} className={`fn__tooltip ${active === menu.menu ? "active" : ""} menu__item`}
                 data-position="right"
                 title={menu.menu} 
                >
                  <a onClick={() => setActive(menu.menu)}>
                    <span className='icon'>
                      <img src={menu.icon} className='fn_svg' alt="" />
                    </span>
                   <span className='text'>{menu.menu}</span>
                  </a>
              ))
            }
          </ul>
        </div>
    }

const SideBar = ({ setActiveComponent }) => {
  const [active, setActive] = useState("Home");


  const array1 = [
    {
      menu: "Home",
      icon: "img/lighticon/light-14.png",
    },
    {
      menu: "Trade Token",
      icon: "img/lighticon/light-7.png",
    },
    {
      menu: "Networks",
      icon: "img/lighticon/light-15.png",
    },
    {
      menu: "Networks",
      icon: "img/lighticon/light-15.png",
    },
  ];

  const array2 = [
    {
      menu: "Add Network",
      icon: "img/lighticon/light-10.png",
    },
    {
      menu: "Trading",
      icon: "img/lighticon/light-16.png",
    },
    {
      menu: "Profile",
      icon: "img/lighticon/light-4.png",
    },
    {
      menu: "Add Token Pair",
      icon: "img/lighticon/light-19.png",
    },
  ];

  const logout = () =>{
    localStorage.removeItem("CryptoAUT_TOKEN")

    window.location.reload()
  }



  return (
    <div className='techwave_fun_leftpanel'>
       <div className='mobile_extra_closer'></div>
       <div className='leftpanel_logo'>
        <a href="fn_logo">
          <span className='full_logo'>
            <img src="img/light-logo.png" 
            className='desktop_logo'
            alt="" />
            <img src="img/light-logo.png" 
            className='retain_logo'
            alt="" />
          </span>
          <span className='short_logo'>
            <img src="img/logo-desktop-mini.png" 
            className='desktop_logo'
            alt="" />
            <img src="img/crypto.png" 
            className='retain_logo'
            alt="" />
          </span>
        </a>
        <a href="#" className='fun__closer fun__iciono_button desktop_closer'>
          <img src="img/light-icon/light-22.png" alt="  "
           className='fn__svg'
          />
        </a>
        <a href="#" className='fun__closer fun__iciono_button mobile_closer'>
          <img src="img/light-icon/light-22.png" alt="  "
           className='fn__svg'
          />
        </a>
       </div>

        {/*component*/}

        <div className='leftpanel_content'>
          <SideBarComponent setActiveComponent=
          {setActiveComponent} setActive={setActive}
          active={active} array={array1} title ="start here"/>
        </div>
          <SideBarComponent setActiveComponent=
          {setActiveComponent} setActive={setActive}
          active={active} array={array2} title ="user Tools"/>
        </div>

        <div className='nav_group'>
          <h2 className='group__title'>COntrols</h2>
          <ul className='group_list'>
            <li className='' onClick={() => logout()}>
 
              <a className='fn__tooltip menu__item'
              data-position="right"
              title="Logout"
              >
                <span className='icon'>
                  <img src="img/lighticon/light-18.png" alt="" className='fn_svg' />
                </span>
                <span className='text'>{"Logout"}</span>
              </a>
            </li>
          </ul>
        </div>

    </div>
  )
}

export default SideBar
