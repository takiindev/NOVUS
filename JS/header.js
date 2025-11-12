let headerInnerHTML = `<nav id="wrapper">
          <section id="logo">
            <img src="./Img/logoKhongMau.png" alt="Logo" />
          </section>
          <section id="nav">
            <a href="#">Trang Chủ</a>
            <a href="#">Tìm Việc</a>
            <a href="#">Thảo Luận</a>
            <a href="#">Liên hệ</a>
          </section>
          <section id="hanhdong">
            <a href="#" class="navphaidangnhap">Đăng nhập</a>
            <a href="#" class="navphaidangky">Đăng ký</a>
          </section>
        </nav>
`;
const headerLinkTagCSS = `<link rel="stylesheet" href="./CSS/header.css">`
document.head.innerHTML += headerLinkTagCSS;

document.body.getElementsByTagName("header")[0].innerHTML = headerInnerHTML;

