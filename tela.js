document.addEventListener("DOMContentLoaded", function () {
    
    function scrollToForm() {
        document.getElementById("signup").scrollIntoView({ behavior: 'smooth' });
    }

    document.querySelector('.hero-content button').addEventListener('click', scrollToForm);

    
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (name && email) {
            alert('Obrigado por se cadastrar, ${name}!');
            
        }
    });
});