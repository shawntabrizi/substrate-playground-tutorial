let playground = document.getElementById('playground');

// Pass the query strings to the playground
window.onload = async function() {
  let params = new URLSearchParams(window.location.search);
  let url = 'https://playground.substrate.dev/';

  if (params.get('uuid')) {
    url += '?uuid=' + params.get('uuid');
  }

  playground.src = url;
};
