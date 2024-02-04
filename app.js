const goku = ["https://e1.pngegg.com/pngimages/670/695/png-clipart-goku-ssj-blue-v3-son-guko-character.png","https://e1.pngegg.com/pngimages/670/695/png-clipart-goku-ssj-blue-v3-son-guko-character.png","https://w7.pngwing.com/pngs/416/57/png-transparent-goku-gohan-vegeta-frieza-super-saiyan-goku-thumbnail.png","https://w7.pngwing.com/pngs/416/57/png-transparent-goku-gohan-vegeta-frieza-super-saiyan-goku-thumbnail.png","https://i.pinimg.com/originals/27/0c/e6/270ce6f643381dae5a5a3b9988a40e2a.png","https://i.pinimg.com/originals/27/0c/e6/270ce6f643381dae5a5a3b9988a40e2a.png","https://www.latercera.com/resizer/Mhxk54PhZcX9_vT2pV6vzcbeE1E=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/7CXRP7L6W5F3RGVMAOLGMVIJ5E.png","https://www.latercera.com/resizer/Mhxk54PhZcX9_vT2pV6vzcbeE1E=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/7CXRP7L6W5F3RGVMAOLGMVIJ5E.png","https://eltallerdehector.com/wp-content/uploads/2022/08/goku-ssj-4-png.png","https://eltallerdehector.com/wp-content/uploads/2022/08/goku-ssj-4-png.png","https://i.pinimg.com/originals/61/24/86/61248614ceec0ea415f6ae676be26abd.png","https://i.pinimg.com/originals/61/24/86/61248614ceec0ea415f6ae676be26abd.png","https://images4.alphacoders.com/997/997395.png","https://images4.alphacoders.com/997/997395.png","https://i.pinimg.com/originals/8f/af/8d/8faf8d74b55eb4aa5bf7f2dc3407ccb5.gif","https://i.pinimg.com/originals/8f/af/8d/8faf8d74b55eb4aa5bf7f2dc3407ccb5.gif"]


const barajarCartas = goku.sort(() => (Math.random() > .5) ? 2 : -1);

for(let i = 0; i < goku.length; i++){
    let box = document.createElement("div");
    box.classList.add("item");

    box.onclick = (e) => {
        e.target.classList.add('boxOpen');
        setTimeout(() => {
            let boxOpenElements = document.querySelectorAll('.boxOpen');
            if(boxOpenElements.length > 1){
                if(boxOpenElements[0].firstChild.src == boxOpenElements[1].firstChild.src){
                    boxOpenElements[0].classList.add('boxMatch');
                    boxOpenElements[1].classList.add('boxMatch');
                    boxOpenElements[0].classList.remove('boxOpen');
                    boxOpenElements[1].classList.remove('boxOpen');  
                    if(document.querySelectorAll('.boxMatch').length == goku.length){
                        Swal.fire({
                            title: '¡Buen trabajo!',
                            text: 'Gracias por jugar',
                            icon: 'success',
                            confirmButtonText: 'Jugar de nuevo'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.reload();  
                            }
                        })
                    }
                    if(document.querySelectorAll('.boxMatch').length == goku.length){
                        // Considera crear una función para reiniciar el juego sin recargar la página
                        window.location.reload();  
                    }
                } else {
                    boxOpenElements[0].classList.remove('boxOpen');
                    boxOpenElements[1].classList.remove('boxOpen');
                }
            }
        }, 500)
    }

    let img = document.createElement('img');
    img.src = barajarCartas[i];
    box.appendChild(img);
    document.querySelector('.container .juego').appendChild(box);
};
