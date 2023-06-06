function showAlert(){ alert('Hola, esta es una alerta desde JavaScript!'); }
container-nav {
    display: flex;
    padding: 10px;
    height: 50px;
    background-color: black;
    }
    .navbar {
    display: flex;justify-content: space-between;
    width: 100%;
    }
    .brand {
    display: flex;
    align-items: center;
    }
    li>a {
    padding: 8px 24px;
    }
    li {
    list-style-type: none;
    }
    a{
    color: white;
    text-decoration:none;
    }
    .nav-links {
    display: flex;
    align-items: center;
    }.button-menu-toggle {
    display: none;
    }
    document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
document.querySelector(".nav-links")
.classList.toggle("nav-links-responsive")})
