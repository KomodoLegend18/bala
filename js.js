const search = document.querySelector("#searchinput > input")
console.log(search);

pageLoad()
function pageLoad(){
    search.addEventListener("input",function(event){
        searching(event.target.value)
    })
}

function searching(input){
    console.log("Search: ", input.length, input);
}

async function generateItems() {
    for (let i = 0; i <= 50; i++) {
        try {
            const response = await fetch('https://source.unsplash.com/random/250x250/?product', {
                method: 'GET',
            });
            const imgUrl = await response.url; // Await the response URL

            // Create the outer div
            var outerDiv = document.createElement("div");
            outerDiv.className = "items";

            // Create the first inner div
            var firstInnerDiv = document.createElement("div");
            firstInnerDiv.style.backgroundImage = `url(${imgUrl})`; // Set the background image
            firstInnerDiv.style.backgroundSize = "cover";
            firstInnerDiv.style.backgroundPositionY = "center";
            firstInnerDiv.style.top = "0";
            firstInnerDiv.style.width = "100%";
            firstInnerDiv.style.height = "70%";
            firstInnerDiv.style.position = "absolute";

            // Create the second inner div
            var secondInnerDiv = document.createElement("div");
            secondInnerDiv.style.backgroundColor = "yellow";
            secondInnerDiv.style.bottom = "0";
            secondInnerDiv.style.width = "100%";
            secondInnerDiv.style.height = "30%";
            secondInnerDiv.style.position = "absolute";

            // Append the inner divs to the outer div
            outerDiv.appendChild(firstInnerDiv);
            outerDiv.appendChild(secondInnerDiv);

            // Append the outer div to the body (or any other parent element)
            document.querySelector("body > div:nth-child(2)").appendChild(outerDiv);
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

// Call the function to fetch and display images
generateItems();
