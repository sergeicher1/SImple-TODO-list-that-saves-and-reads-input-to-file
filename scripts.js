const data = []; // create array
let counterLines = 0; // count lines

let saveToArray = () => {
    let inputData = document.getElementById("newTask").value;
    // console.log(inputData);
    data.push((counterLines + 1) + ". " + inputData + "\n");
    counterLines += 1; // increment the lines numbers

}
let readFromArray = () => {
    console.log("The whole array: \n");
    let i = 0;
    while (i < data.length) {
        console.log(data[i]);
        i++;
    }
}
