let fs =   require('fs');
let path = require('path');
const lineReader = require('line-reader');

let content = "";
let c = 1;

function wcatCommandS(command,firstFile,secondFile,dest){
    console.log(command);
    // let cwd = process.cwd();
    // console.log(cwd);
    let exist1 = fs.existsSync(firstFile);
    let exist2 = fs.existsSync(secondFile);
    if(!exist1&&!exist2)
        return console.log("Files doesn't exist");
    // let firstFileEntities = fs.readFileSync(firstFile); // read all the directort or file that are inside parent directry
    const data = fs.readFileSync(firstFile, 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);
    console.log(lines.length);
    for(let i = 0; i< lines.length;i++){
        if(lines[i] == "")
            continue;
        content += " "+ lines[i]+"\n"
    }
    const data2 = fs.readFileSync(secondFile, 'UTF-8');
    const lines2 = data2.split(/\r?\n/);
    console.log(lines2.length);
    for(let i = 0; i< lines2.length;i++){
        if(lines2[i] == "")
            continue;
        content += " "+ lines2[i]+"\n";
    }
    // console.log(content);
    console.log(dest)
    fs.writeFileSync(dest,content);
    let alldata = fs.readFileSync(dest, 'utf8');
    console.log(alldata.toString()); 


}
// -n command
function wcatCommandn(command,firstFile,secondFile,dest){
    console.log(command);
    let exist1 = fs.existsSync(firstFile);
    let exist2 = fs.existsSync(secondFile);
    if(!exist1&&!exist2)
        return console.log("Files doesn't exist");
    // let firstFileEntities = fs.readFileSync(firstFile); // read all the directort or file that are inside parent directry
   
    const data = fs.readFileSync(firstFile, 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);
    console.log(lines.length);
    for(let i = 0; i< lines.length;i++){
        content +=  c + " "+ lines[i]+"\n";
        c++;
    }
    const data2 = fs.readFileSync(secondFile, 'UTF-8');
    const lines2 = data2.split(/\r?\n/);
    console.log(lines2.length);
    for(let i = 0; i< lines2.length;i++){
        content +=  c + " "+ lines2[i]+"\n";
        c++;
    }
    // console.log(content);
    console.log(dest)
    fs.writeFileSync(dest,content);
    let alldata = fs.readFileSync(dest, 'utf8');
    console.log(alldata.toString()); 

}

function wcatCommandb(command,firstFile,secondFile,dest){
    console.log(command);
    let exist1 = fs.existsSync(firstFile);
    let exist2 = fs.existsSync(secondFile);
    if(!exist1&&!exist2)
        return console.log("Files doesn't exist");
    // let firstFileEntities = fs.readFileSync(firstFile); // read all the directort or file that are inside parent directry
    
    const data = fs.readFileSync(firstFile, 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);
    console.log(lines.length);
    for(let i = 0; i< lines.length;i++){
        if(lines[i] == "")
            continue;
        content +=  c + " "+ lines[i]+"\n";
        c++;
    }
    const data2 = fs.readFileSync(secondFile, 'UTF-8');
    const lines2 = data2.split(/\r?\n/);
    console.log(lines2.length);
    for(let i = 0; i< lines2.length;i++){
        if(lines2[i] == "")
            continue;
        content +=  c + " "+ lines2[i]+"\n";
        c++;
    }
    console.log(content);
    console.log(dest)
    fs.writeFileSync(dest,content);
    let alldata = fs.readFileSync(dest, 'utf8');
    console.log(alldata.toString()); 


}

function wcat(firstFile,secondFile,dest){
    // console.log(srcPath);
    // console.log(destPath);
    let exist1 = fs.existsSync(firstFile);
    let exist2 = fs.existsSync(secondFile);
    if(!exist1&&!exist2)
        return console.log("Files doesn't exist");
    let firstFileEntities = fs.readFileSync(firstFile); // read all the directort or file that are inside parent directry
    
    content+=firstFileEntities+"\n";
    let secondFileEntities = fs.readFileSync(secondFile);
    content+=secondFileEntities;
    
    console.log(dest)
    fs.writeFileSync(dest,content);
    let data = fs.readFileSync(dest, 'utf8');
    console.log(data.toString()); 
}



module.exports={
    wcatfn:wcat,
    wcatCommandb:wcatCommandb,
    wcatCommandn:wcatCommandn,
    wcatCommandS:wcatCommandS
}