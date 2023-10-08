export default function unauthorized(code){
    if(code===401){

        // Clear Previous
        sessionStorage.clear();
        localStorage.clear();

        // Remember The Last Location
        let lastLocation=window.location
        sessionStorage.setItem("lastLocation",lastLocation);

        window.location.href="/login"
    }
}