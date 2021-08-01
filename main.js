const path = require('path');
const fs = require('fs');
let treeObj = require('./command/tree');
let helpObj = require('./command/help');
let organizeObj = require('./command/organize');
let wcatObj = require('./command/wcat');
const { wcatfn } = require('./command/wcat');

let inputArr = process.argv.slice(2);
let cmd = inputArr[0];
// console.log(inputArr[1]);


switch(cmd){
    case "help":
        helpObj.helpFn();
        console.log("Help implementd");
        break;
    case "tree":
        console.log("tree implemented",inputArr[1]);
        break;
    case "organize":
        console.log("organize implemented",inputArr[1]);
        organizeObj.organizeFxn(inputArr[1]);
        break;

    case "wcat":
        if(inputArr[1] =="-b"){
            wcatObj.wcatCommandb(inputArr[1],inputArr[2],inputArr[3],process.argv.slice(2)[4]);
        }else if(inputArr[1] == "-s"){
            wcatObj.wcatCommandS(inputArr[1],inputArr[2],inputArr[3],process.argv.slice(2)[4])
        }else if(inputArr[1] == "-n"){
            wcatObj.wcatCommandn(inputArr[1],inputArr[2],inputArr[3],process.argv.slice(2)[4])
        }
        else wcatObj.wcatfn(inputArr[1],inputArr[2],process.argv.slice(2)[3]);
        console.log("wcat run...");
        break;
    default:
        console.log(`worng Command .kindly enter help to see all command`);
        break;
}