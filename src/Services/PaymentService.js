// export const makePayment = async (token)=>{
//     try{
//         const body = {
//         token,
//         booking
//         }
//         const header = {
//             "Content-Type":"application/json"
//         }
//         const response = await fetch('http://localhost/payment',{
//             method:"POST",
//             headers:header,
//             body: JSON.stringify(body)
//         })
//         if(response.ok){
//             console.log(response);
//             console.log(response.status);
//         }else{
//             console.log("Response Not Ok" + response);
//         }
//     }catch(err){
//         console.log(err)
//     }
//     }