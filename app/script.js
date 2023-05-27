(async function init() {
    const response = await fetch('http://localhost:3000/get-profile')
    console.log("response", response)
    const user = await response.json()
    console.log(JSON.stringify(user))

    document.getElementById('name').textContent = user.name ? user.name : 'Martin Prätzlich'
    document.getElementById('email').textContent = user.email ? user.email : 'martin.praetzlich@example.com'
    document.getElementById('interests').textContent = user.interests ? user.interests : 'coding'

    const cont = document.getElementById('container')
    cont.style.display = 'block'
})()

async function handleUpdateProfileRequest() {
    const contEdit = document.getElementById('container-edit')
    const cont = document.getElementById('container')

    const payload = {
        name: document.getElementById('input-name').value,
        email: document.getElementById('input-email').value,
        interests: document.getElementById('input-interests').value
    }

    const response = await fetch('http://localhost:3000/update-profile', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    const jsonResponse = await response.json()

    document.getElementById('name').textContent = jsonResponse.name
    document.getElementById('email').textContent = jsonResponse.email
    document.getElementById('interests').textContent = jsonResponse.interests

    cont.style.display = 'block'
    contEdit.style.display = 'none'
}

function updateProfile() {
    const contEdit = document.getElementById('container-edit')
    const cont = document.getElementById('container')

    document.getElementById('input-name').value = document.getElementById('name').textContent
    document.getElementById('input-email').value = document.getElementById('email').textContent
    document.getElementById('input-interests').value = document.getElementById('interests').textContent

    cont.style.display = 'none'
    contEdit.style.display = 'block'
}

var themes = ["dark", "light", "vintage", "summer"];
var currentTheme = 0;

function toggleTheme() {
    currentTheme = (currentTheme + 1) % themes.length;

    var rootStyles = document.documentElement.style;
    rootStyles.setProperty("--text-color", "var(--text-color-" + themes[currentTheme] + ")");
    rootStyles.setProperty("--background-color", "var(--background-color-" + themes[currentTheme] + ")");
    rootStyles.setProperty("--button-background-color", "var(--button-background-color-" + themes[currentTheme] + ")");
    rootStyles.setProperty("--button-text-color", "var(--button-text-color-" + themes[currentTheme] + ")");
    rootStyles.setProperty("--button-hover-background-color", "var(--button-hover-background-color-" + themes[currentTheme] + ")");
}

function handleCancelEdit() {
    const contEdit = document.getElementById('container-edit');
    const cont = document.getElementById('container');

    cont.style.display = 'block';
    contEdit.style.display = 'none';
}
