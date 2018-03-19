var getUser=(id,callback)=>{
    var user={
        id: id,
        name: 'Vikram'};
    // callback(user);
    setTimeout(()=>{
       callback(user);
    },3000);
};

getUser(31,(userObejct)=>{
    console.log(userObejct);
});