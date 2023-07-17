// variable using query selectors 
const image = document.querySelector("#image"),
      statusDisplay = document.querySelector(".status"),
      bgColor = document.querySelector("#main");

// here we are setting the time interval to check the connection by calling asynchronously updateConnectionStatus function
setInterval(updateConnectionStatus,5000);

// here we are adding event listener to global object window to call asynchronously updateConnection function everytime it loads
window.addEventListener('load',updateConnectionStatus);



// toggle function to add online class to main id
function setColor(online){
    bgColor.classList.toggle('online',online);
}


// asynchronously functions 
async function checkConnection(){
    try {
        const response = await fetch('https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=' + (new Date()).getTime());
    
        return response.ok;
    }
    catch(error){

        console.log(error);

        return false;
    }
}

async function updateConnectionStatus(){
    // here we get result from checkConnection function
    const online = await checkConnection();
    console.log(online);

    const statusMessage = online ? "You're ONLINE!!! Connection looks good." : "OOPS!!! Your Internet Connection is Down.";
   /*  console.log(statusMessage); */

    const imageSource = online ? "./images/online.png" : "./images/offline.png";

    statusDisplay.innerHTML = statusMessage;

    image.src=imageSource;

    setColor(online);

}

