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
                        <a href="#" class="btn btn-primary" onclick="showModal('${response[i].url}')">View Image</a>
                        </div>
                    </div>
                    `;
    }
    document.querySelector("#my-container").innerHTML = template;
  }
};

xhr.send();

const modal=document.getElementById("modal")
function showModal(url){
  modal.style.display="block"
  modal.innerHTML=`<img src=${url} alt="Image">`
  // console.log(url);
}

addEventListener("keydown",(e)=>{
  if(e.key=="Escape"){
    modal.style.display="none"
  }
})

document.getElementById("create").addEventListener("click",()=>{
  const template = `
                    <div class="card" style="width: 18rem;">
                        <img src="${document.getElementById("ThumbnailUrl").value}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${document.getElementById("title").value}</h5>
                        <a href="#" class="btn btn-primary" onclick="showModal('${document.getElementById("url").value}')">View Image</a>
                        </div>
                    </div>
                    `;

  document.querySelector("#my-container").innerHTML += template;
})