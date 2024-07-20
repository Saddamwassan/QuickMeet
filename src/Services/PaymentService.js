export const sendPaymentToStripe = async (data,booking) =>{
    try{
        const body = {
            data,
            booking
        }
        const header = {
            "Content-Type":"application/json"
        }
        const response = await fetch('http://localhost:8000/payment',{
            method:"POST",
            headers:header,
            body: JSON.stringify(body)
        })
        if(response.ok){
            console.log(response);
            console.log(response.status);
            return response.json();
        }else{
            console.log("Response Not Ok" + response);
        }
    }catch(err){
        console.log(err)
    }
    }
// export const makePayment = async token =>{
//     try{
//         const body = {
//         token,
//         booking
//         }
//         const header = {
//             "Content-Type":"application/json"
//         }
//         const response = await fetch('http://localhost:8000/payment',{
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
