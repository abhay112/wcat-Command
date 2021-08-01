let fs = require('fs');
let path = require('path');

let types = {
    script:["js","css"],
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function organizeFn(srcPath){
    // console.log("organize");
    console.log("src path",srcPath);

    if(srcPath == undefined){
        srcPath = process.cwd();
    }
    console.log("src path",srcPath);

    let orgnizedFilesPath = path.join(srcPath,"organized_files");
    if(fs.existsSync(orgnizedFilesPath) == false){
        fs.mkdirSync(orgnizedFilesPath);
    }
    let allTheFiles = fs.readdirSync(srcPath);
    // console.log(allTheFiles);

    for(let i = 0; i < allTheFiles.length;i++){
        let fullOrignalPath = path.join(srcPath,allTheFiles[i]);
        if(fs.lstatSync(fullOrignalPath).isFile() == true){
            let folderName = checkExtenTellFolder(allTheFiles[i]);
            copyFileTodest(folderName,fullOrignalPath,srcPath);
            // console.log(allTheFiles[i]," will go to " ,folderName);
        }
        
    }
}

function copyFileTodest(folderName,fullOrignalPath,srcPath){
    let destFolderPath  = path.join(srcPath,"organized_files", folderName);
    if(fs.existsSync(destFolderPath) == false){
        fs.mkdirSync(destFolderPath);
    }
    let orignalFileName = path.basename(fullOrignalPath);

    let destFilePath = path.join(destFolderPath,orignalFileName);
    fs.copyFileSync(fullOrignalPath,destFilePath);
    console.log(orignalFileName, " copied to ", folderName);
}
function checkExtenTellFolder(fileName){
    let extName = path.extname(fileName); 
    //.exe => slice => exe then search
    extName = extName.slice(1);
    for(let key in types){
        for(let i = 0; i<types[key].length;i++){
            console.log(types[key][i]);
            if(types[key][i] == extName){
                
                return key;
            }
        }
    }
    return "others";
}


module.exports = {
    organizeFxn:organizeFn
}