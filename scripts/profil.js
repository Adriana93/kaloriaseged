document.addEventListener("DOMContentLoaded", function () {
    function showContent(tab) {
        document.querySelectorAll(".content").forEach(content => {
            content.classList.remove("active");
        });
        document.getElementById(tab).classList.add("active");

        document.querySelectorAll(".tab-btn").forEach(button => {
            button.classList.remove("active");
        });
        document.querySelector(`[onclick="showContent('${tab}')"]`).classList.add("active");
    }

    window.showContent = showContent;
    showContent("bmi"); // Default active tab

    window.calculateBMI = function () {
        const height = parseFloat(document.getElementById("height").value) / 100;
        const weight = parseFloat(document.getElementById("weight").value);
        if (height > 0 && weight > 0) {
            const bmi = (weight / (height * height)).toFixed(2);
            document.getElementById("bmi-result").innerText = `BMI: ${bmi}`;
        } else {
            document.getElementById("bmi-result").innerText = "Kérlek adj meg helyes értékeket!";
        }
    };
});