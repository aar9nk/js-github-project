const form = document.querySelector('#form');
const list = document.querySelector('#list');

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const createHtml = (username, imageSource) => {
  return `
      <a href="${username}>
        <img src="${imageSource}" alt="" />
      </a>
   `;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const serverResponse = await getData(PUT_THE_GITHUB_URL_HERE_I_DONT_REMEMBER_IT);
  list.innerHTML = createHtml(serverResponse.WHATEVER_THE_OBJECT_NOTATION_SHOULD_BE);
})
