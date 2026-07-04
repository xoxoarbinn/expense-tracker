const btn = document.getElementById('addBtn');
var newttl = 0;

btn.addEventListener('click', function(){
    const name = document.getElementById('exname').value;
    const amt = parseInt(document.getElementById('amt').value);
    const category = document.getElementById('category').value;
    if (!name){alert('ENTER NAME!'); return document.getElementById('exname').focus(); }
    else if (!amt){ alert('ENTER AMOUNT');return document.getElementById('amt').focus(); } // Don't add if empty
    console.log("Name:", name);
    console.log(amt);
    console.log(category);

    const newdiv = document.createElement('div');
    newdiv.textContent = category + " - " + name + " - Rs. "+ amt;

    const list = document.getElementById('expenseList');
    list.appendChild(newdiv);

    document.getElementById('exname').value = '';
    document.getElementById('amt').value = '';
    document.getElementById('category').value = 'Food';

    newttl = amt + newttl;

    const total = document.getElementById('totalAmount');
    total.innerText = newttl;

    const delbtn = document.createElement('button');
    delbtn.textContent = 'X';
    newdiv.appendChild(delbtn);
    delbtn.addEventListener('click', function(){
        newdiv.remove();
        newttl = newttl - amt;
        total.innerText = newttl;
    });
});

// Enter key navigation — OUTSIDE the click function
document.getElementById('exname').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('amt').focus();
    }
});

document.getElementById('amt').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('category').focus();
    }
});

document.getElementById('category').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        btn.click();
        document.getElementById('exname').focus();
    }
});