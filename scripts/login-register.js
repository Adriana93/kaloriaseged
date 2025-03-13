document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.form-signup').addEventListener('submit', registerUser);
});
async function registerUser(event) {
    event.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const passwordConfirm = document.getElementById('signup-password-confirm').value;

    if (password !== passwordConfirm) {
        alert("A jelszavak nem egyeznek!");
        return;
    }

    const { data, error } = await window.supabase.auth.signUp({
        email: email,
        password: password
    });

    console.log("Regisztrációs válasz:", data, error); // KIÍRJA A KONZOLBA

    if (error) {
        alert("Hiba a regisztráció során: " + error.message);
    } else {
        alert("Sikeres regisztráció! Kérlek, ellenőrizd az e-mail fiókodat.");
        document.querySelector('.switcher-login').click();
    }
}
