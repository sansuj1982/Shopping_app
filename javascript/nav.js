const createNav = () => {
    let nav = document. querySelector('.navbar');

    nav.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
              <div class="container">
                <img class="footimg" style=" float: left; " src="/css/Screen Shot 2022-02-10 at 10.39.17 pm.png" alt="Logo">
                <a class="navbar-brand" rel="nofollow" href="#" style="color: rgb(97, 6, 89);">PinkBag.Com</a>   
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
          
                  <ul class="navbar-nav ml-auto">
          
                    <li class="nav-item active">
                      <a class="nav-link" href="https://nusasatu.com">Home
                        <span class="sr-only">(current)</span>
                      </a>
                    </li>
          
                    <li class="nav-item">
                      <a class="nav-link" href="#">About</a>
                    </li>
          
                   <li class="nav-item">
                      <a class="nav-link" href="#">Sale</a>
                    </li>
          
                    <li class="nav-item">
                      <a class="nav-link" href="#">Shopping Cart</a>
                    </li>
          
                    <li class="nav-item">
                      <a class="nav-link" href="#">Shopping Bag</a>
                    </li>
          
                    <li class="nav-item">
                      <a class="nav-link" href="#">Blog</a>
                    </li>
          
                    <li class="nav-item">
                      <a class="nav-link" href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
    `;
}

createNav();