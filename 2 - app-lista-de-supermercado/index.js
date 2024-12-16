var siginProduct = document.getElementById('sigin-product');
var priceProduct = document.getElementById('price-product');
var cadastrar = document.getElementById('cadastrar');

cadastrar.addEventListener('click', function(){
    var fullPrice = [];

    if(siginProduct.value == '' || priceProduct.value == ''){
        alert('[ERRO] Dados inválidos');

    }else if(siginProduct.value.length <= 3 || priceProduct.value.length > 5){
        alert('[ERRO] Dados inválidos');

    }else{
        var container = document.getElementById('container');
    
        container.innerHTML += `
            <div class="product">
                <div class="name-product">${siginProduct.value}</div>
                <div class="price-product">${priceProduct.value}R$</div>
            </div>
        `;


        var classPriceProduct = document.querySelectorAll('.price-product');
        classPriceProduct.forEach(function(value, index){
            fullPrice.push(Number(priceProduct.value));
        })
        
        
        var totalPrice = document.getElementById('total-price');
        const completedPrice = fullPrice.reduce(function(total, currentElement){
            return total + currentElement;
        })

        totalPrice.innerHTML = `Preço Total: ${completedPrice}R$`;
    };
    


})