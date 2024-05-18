let id = 1;

function createUserProfiles(names, modifiedNames){
    var userProfiles = [];
    for(var i=0; i< names.length; i++){
       userProfiles.push(
        {
            name: names[i],
            modifiedNames: modifiedNames[i],
            id: id++   
        });
    }
    return userProfiles;
}



module.export= {createUserProfiles};