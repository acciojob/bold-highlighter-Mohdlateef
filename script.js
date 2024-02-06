 const paragraph = document.querySelector('p');
function highlight() {
    //Write your code here
const boldElements = paragraph.querySelectorAll('strong');

    // Change the color of bold elements to green
    boldElements.forEach(element => {
      element.style.color = "rgb(0,128,0)";
    });

}


function return_normal() {
    //Write your code here
	 const boldElements = paragraph.querySelectorAll('strong');

    // Revert the color of bold elements back to black
    boldElements.forEach(element => {
      element.style.color = 'black';
    });

    
}
