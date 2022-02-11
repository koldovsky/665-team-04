window.addEventListener('DOMContentLoaded', function () { 
    (function () {
    
        let btnWomen = document.querySelector('.women'),
            btnMen = document.querySelector('.men'),
            btnShoes = document.querySelector('.shoes'),
            collectionCardWomen = document.querySelector('.womenCard'),
            collectionCardMen = document.querySelector('.menCard'),
            collectionCardShoes = document.querySelector('.shoesCard');
        
        btnMen.addEventListener('click', function () {
            btnMen.style.borderBottom = '2px solid #f40106';
            btnMen.style.opacity = '1';
            btnWomen.style.border = 'transparent';
            btnShoes.style.border = 'transparent';
            btnWomen.style.opacity = '0.6';
            btnShoes.style.opacity = '0.6';
            collectionCardMen.style.display = 'block';
            collectionCardWomen.style.display = 'none';
            collectionCardShoes.style.display = 'none';
        });
        btnWomen.addEventListener('click', function () {
            btnWomen.style.borderBottom = '2px solid #f40106';
            btnWomen.style.opacity = '1';
            btnMen.style.border = 'transparent';
            btnShoes.style.border = 'transparent';
            btnMen.style.opacity = '0.6';
            btnShoes.style.opacity = '0.6';
            collectionCardWomen.style.display = 'block';
            collectionCardMen.style.display = 'none';
            collectionCardShoes.style.display = 'none';
            
        });
        btnShoes.addEventListener('click', function () {
            btnShoes.style.borderBottom = '2px solid #f40106';
            btnShoes.style.opacity = '1';
            btnWomen.style.border = 'transparent';
            btnMen.style.border = 'transparent';
            btnWomen.style.opacity = '0.6';
            btnMen.style.opacity = '0.6';
            collectionCardShoes.style.display = 'block';
            collectionCardWomen.style.display = 'none';
            collectionCardMen.style.display = 'none';
            
        });


        
        

    })();

});