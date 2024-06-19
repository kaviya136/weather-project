function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function showCity(cityId) {
    const cities = document.querySelectorAll('.weather-info');
    cities.forEach(city => {
        city.style.display = 'none';
    });
    document.getElementById(cityId).style.display = 'block';
    // Ensure the 7-Day Forecast is hidden when switching cities
    const forecasts = document.querySelectorAll('.forecast');
    forecasts.forEach(forecast => {
        forecast.style.display = 'none';
    });
}

function showWeekView() {
    const forecasts = document.querySelectorAll('.forecast');
    forecasts.forEach(forecast => {
        forecast.style.display = 'block';
    });
}
