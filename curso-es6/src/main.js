import axios from 'axios';

// Funão delay aciona o .then após 1s
//const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
var i = 1;
const delay = () => new Promise((resolve,reject) => {
    setTimeout(() => { resolve(i+++'s')},2000);
});
    
async function umPorSegundo() {
    console.log(await delay());      
    console.log(await delay());      
    console.log(await delay());      
}
umPorSegundo();
 