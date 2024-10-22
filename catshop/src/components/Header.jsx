function Header() {
  
    return (
      <>
 <header class="siteheader">
        <div class="logo">
            <i class='bx bxs-cat logoicon'></i>
            Cat<span class="logopart2">Lovers</span>                
        </div>
        <nav>
            <ul class="navmenu">
                <li><a class="headeranchor" href="#home">Home</a></li>
                <li><a class="headeranchor" href="#">Services</a></li>
                <li><a class="headeranchor" href="#products">Products</a></li>
                <li><a class="headeranchor" href="#about">About</a></li>
                <li><a class="headeranchor" href="#contact">Contact</a></li>
            </ul>
        </nav>
        <ul class="navicons">
           <li><a class="navanchor" href="#"><i class='bx bx-search-alt navicon'></i></a></li> 
           <li><a class="navanchor" href="#"><i class='bx bx-menu navicon' ></i></a></li> 
        </ul>
    </header>      
      </>
    )
  }
  
  export default Header