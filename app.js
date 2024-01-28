(function(){

    const customerImage = document.querySelector('#customer-img');
    const customerName = document.querySelector('.customer-name');
    const customerText = document.querySelector('#customer-text');

    const btn = document.querySelectorAll('.btn');
    let index = 0;
    const customers = [];

    function Customer(img,name,text){
        this.name = name
        this.img = img
        this.text = text
    };

    function createCustomer(img,name,text){
        let pic = `./img/${img}.jpg`;
        let customer = new Customer(pic,name,text);
        customers.push(customer);
        
    }

    createCustomer(0,'Pavli','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quidem dolor, molestiae temporibus alias ut eaque ad dolores provident cupiditate?');
    createCustomer(1,'John','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quidem dolor, molestiae temporibus alias ut eaque ad dolores provident cupiditate?');
    createCustomer(2,'Negra','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quidem dolor, molestiae temporibus alias ut eaque ad dolores provident cupiditate?');
    createCustomer(3,'Milan','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quidem dolor, molestiae temporibus alias ut eaque ad dolores provident cupiditate?');
    createCustomer(4,'Dorothea','No more problems!!!');

    btn.forEach((button)=>{

        button.addEventListener('click', function(e){
            if(e.target.parentElement.classList.contains('prevBtn')){

                if(index === 0){
                    index = customers.length;
                }
                index--;
                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].text;

            }

            if(e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index === customers.length){
                    index = 0;
                }
                
                customerImage.scr = customers[index].img;
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].text;

            }
        })

    })

    
   

})();