window.addEventListener('load', function () {


    // dark header (Navbar) when we scroll the webpage
    this.window.addEventListener('scroll', () => {

        const header = document.getElementById('nav');

        if (this.window.scrollY > 5 ) header.classList.add('white-bg')
        else header.classList.remove('white-bg');

    })
})