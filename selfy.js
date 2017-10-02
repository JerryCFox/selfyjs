module.exports.configure=configure;

function configure(themodule,theconfiguration,thearguments,cb){
    if(require.main===themodule){
        //console.log(theconfiguration.name+" is main module");
        theconfiguration.enviroment.isMain=1;
    }
    else{
        //console.log(theconfiguration.name+" is slave module");
        theconfiguration.enviroment.isModule=1;
    }
    for(var i=0;i<thearguments.length;i++){
        theconfiguration['args'].push(thearguments[i]);
    }
    theconfiguration['log']=function(message){if(theconfiguration.enviroment.isMain){console.log(message)}};
    cb(null,theconfiguration);
}
