// get student id p-tag
idTag = document.getElementById("student-num")

// to get a random dog image from dog.ceo
async function getDog() {
    // set student ID tag to my info...
    idTag.textContent = "Reuben Cormier | LU: 1274383 GC: 200628514";

    const url = "https://dog.ceo/api/breeds/image/random"; //set site url as a variable

    try {
        const response = await fetch(url);
        const data = await response.json();

        // display the doggo
        const dogImg = document.getElementById("image");
        dogImg.src = data.message;
        } 
    catch (error) { // display error message
        console.error("Error fetching dog image:", error);
        alert("Failed to fetch a dog. Please try again!");
        }
}
