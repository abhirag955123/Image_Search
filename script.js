let key = "3yYfCPohHYlm8oYpwPUZEwTLwTpuIbJCGEuZpVcw-gw";
let content = document.querySelector("#all_content");

let search_bar = document.getElementById("Search_bar");

let btn2 = document.getElementById("btn-2");
let count = 1;
function show() {
  // console.log(search_bar.value);

  btn2.style.display = "block";

  let datarequest = fetch(
    `https://api.unsplash.com/search/photos?page=${count}&query=${search_bar.value}&client_id=3yYfCPohHYlm8oYpwPUZEwTLwTpuIbJCGEuZpVcw-gw`,
    {
      // headers :{
      //     "x-Api-key":"AaOww2ueeMK4ONlWPHVMLBdUYJJ3ORQ3wpIELrsynAs"
      // },
    }
  );
  datarequest
    .then((response) => response.json())
    .then((parsedResponse) => {
      // console.log(parsedResponse.results);
      parsedResponse.results.forEach((element) => {
        console.log(element.urls.regular);
        let div1 = document.createElement("div");
        let img = document.createElement("img");
        let p = document.createElement("p");
       
        // img.src = element.urls.raw;
        img.setAttribute("src", element.urls.regular);
        p.innerText = element.alt_description;
        // console.log(p);
        // img.setAttribute("width", "100px");
        // img.setAttribute("height", "100px");

        // div1.append(img , p);
        content.appendChild(div1);
        // console.log(content);
        div1.appendChild(img);
        div1.appendChild(p);
        // console.log(p);
        // console.log(p);
        // // div1.appendChild(img);
        // // div1.appendChild(p);
        // content.appendChild(div1);
        
        div1.classList.add("top_content")
        img.classList.add("img_1");
        p.classList.add("paragraph");

      });
    });
  // console.log(datarequest);

  btn2.addEventListener("click", () => {
    count++;
    show();
  });
  // console.log(count);
}

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  content.innerText = "";
  show();
});
