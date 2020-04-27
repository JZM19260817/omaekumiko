import fs from 'fs';

export function writeFile(newJson,type){
    const a=new Date().getTime();
    const filename=`./data/${a}.json`;
    let mydata={};
    const writeFile=()=>{
        const myJson={
            "data":[
                newJson,
            ],
            "type":type,
        };
        const str=JSON.stringify(myJson);
        console.log('str:',str);
        fs.writeFileSync(filename,str);
    };
    const changeFile=()=>{
        console.log('666:',mydata);
        mydata.data.push(newJson);
        fs.writeFileSync(filename,JSON.stringify(mydata));
    };
    try {
        // exitedData = JSON.parse(fs.readFileSync(filename).toString());
        mydata = JSON.parse(fs.readFileSync(filename).toString());
        changeFile();
    } catch (error) {
        console.log('err:',error);
        writeFile();
    }
}
