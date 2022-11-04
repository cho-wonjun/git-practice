let x = 0; 


async function request() {
    try {
        console.log("hi");
        await fetch("something.com");
        console.log("bye");
        
    } catch (error) {
        console.log(error, "bored");
    }
}

request();

console.log("i am here");