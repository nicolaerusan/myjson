const myJsonAPI = require('./index.js');

//
// // Get the JSON from a bucket
// myJsonAPI.get("14zotd").then((json) => {console.log("GET RESPONSE"); console.log(json)});
//
// // Create a new bucket
// myJsonAPI.create({meow:"ciao"})
//   .then((id) => {console.log("CREATE RESPONSE");  console.log(id)})
//   .catch((error) => console.log(error));
//
// // Get the JSON from a bucket
// myJsonAPI.update("14zotd", {anything: "is possible now"}).then((json) => {console.log("UPDATE RESPONSE"); console.log(json)});


/// In a full flow with sequencing:

myJsonAPI.create({newBucketName:"New Bucket", counter: 0}) //CREATE THE OBJECT
  .then((createResponse) => {
    console.log("CREATED SUCCESSFULLY")
    console.log(createResponse);
    var newBinId = createResponse.id
    console.log("it's created, now we get it");
    myJsonAPI.get(newBinId).then((getResponse) => {  //GET THE CREATED OBJECT
      console.log('GET SUCCESSFULLY');
      console.log(getResponse);
      console.log("Now we got it, so we update counter");
      myJsonAPI.update(newBinId, {counter: getResponse.counter+1}).then((updateResponse) => { //UPDATE THE OBJECT
        console.log('UPDATE SUCCESSFULLY');
        console.log(updateResponse);
      });
    });
  })
