const storeForm = document.getElementById('store_form');
const storeId = document.getElementById('storeId');
const storeAddress = document.getElementById('address');

async function addStore(e){
    e.preventDefault();

    if(storeId.value === '' || storeAddress.value === ''){
        alert('Please fill in form fields');
        return;
    }
    const sendBody = {
        storeId: storeId.value,
        address: storeAddress.value,
    }
    try{
        const res = await fetch('/api/v1/stores', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendBody),
        })
        if(res.status===400){
            throw Error('store already exists');
        }else{
            alert('New Store added!');
            window.location.href = '/index.html';
        }
       
    }catch(err){
        alert(err);
        return;
    }
}


storeForm.addEventListener('submit', addStore);