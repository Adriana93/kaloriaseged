

/*export async function registerUser(email, password, name, age) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });

    if (error) {
        console.error("Hiba a regisztráció során:", error.message);
        return;
    }

    const { user } = data;

    // Extra adatok mentése a "profiles" táblába
    const { error: profileError } = await supabase
        .from('profiles')
        .insert([{ id: user.id, name: name, age: age }]);

    if (profileError) {
        console.error("Hiba a profil mentésekor:", profileError.message);
    } else {
        console.log("Sikeres regisztráció:", data);
    }
}*/

const { data, error } = await window.supabase.auth.signUp({
    email: "teszt@example.com",
    password: "titkosjelszo"
});
