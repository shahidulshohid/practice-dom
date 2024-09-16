const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
<h1>My dynamic section</h1>
<ul>
    <li>first item</li>
    <li>first item</li>
    <li>first item</li>
    <li>first item</li>
</ul>
`;
mainContainer.appendChild(section)