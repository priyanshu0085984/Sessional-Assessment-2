const xhr = new XMLHttpRequest();

const url = `https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`;

xhr.open("GET", url);

xhr.onreadystatechange = () => {
  if (xhr.status === 200 && xhr.readyState === 4) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);

    let template = "";
    for (let i = 0; i < response.length; i++) {
      template += `
                    <div class="card" style="width: 18rem;">
                        <img src="${response[i].thumbnailUrl}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${response[i].title}</h5>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    `;
    }
    document.querySelector("#my-container").innerHTML = template;
  }
};

xhr.send();
