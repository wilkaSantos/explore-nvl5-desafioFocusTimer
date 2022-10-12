
export function Sound({ buttonForestSound, buttonRainSound, buttonCoffeShopSound, buttonFirePlaceSound }){

    const audioForest     = new Audio('../sons/Floresta.wav');
    const audioRain       = new Audio('../sons/Chuva.wav');
    const audioCoffeeShop = new Audio('../sons/Cafeteria.wav');
    const audioFirePlace  = new Audio('../sons/Lareira.wav');

    const icoForest         = document.querySelector('.ico-forest');
    const icoRain           = document.querySelector('.ico-rain');
    const icoCoffeeShop     = document.querySelector('.ico-coffeeShop');
    const icoFirePlace      = document.querySelector('.ico-firePlace');
    
    function activeSoundForest(){
        audioForest.play();
        audioRain.pause();
        audioCoffeeShop.pause();
        audioLareira.pause();
    }
    
    function activeSoundRain(){
        audioRain.play();
        audioForest.pause();
        audioCoffeeShop.pause();
        audioFirePlace.pause();
    }
    
    function activeSoundCoffeeShop(){
        audioCoffeeShop.play();
        audioRain.pause();
        audioForest.pause();
        audioFirePlace.pause();
    }
    
    function activeSoundFirePlace(){
        audioFirePlace.play();
        audioCoffeeShop.pause();
        audioRain.pause();
        audioForest.pause();
    }

    function activeButtonForest(){
        buttonForestSound.classList.add('activeButtonSong');
        buttonRainSound.classList.remove('activeButtonSong');
        buttonCoffeShopSound.classList.remove('activeButtonSong');
        buttonFirePlaceSound.classList.remove('activeButtonSong');
        icoActiveForest();

    }

    function activeButtonRain(){
        buttonRainSound.classList.add('activeButtonSong');
        buttonCoffeShopSound.classList.remove('activeButtonSong');
        buttonFirePlaceSound.classList.remove('activeButtonSong');
        buttonForestSound.classList.remove('activeButtonSong');
        icoActiveRain();
    }

    function activeButtonCoffeeShop(){
        buttonCoffeShopSound.classList.add('activeButtonSong');
        buttonForestSound.classList.remove('activeButtonSong');
        buttonFirePlaceSound.classList.remove('activeButtonSong');
        buttonRainSound.classList.remove('activeButtonSong');
        icoActiveCoffeeShop();
    }

    function activeButtonFire(){
        buttonFirePlaceSound.classList.add('activeButtonSong');
        buttonForestSound.classList.remove('activeButtonSong');
        buttonRainSound.classList.remove('activeButtonSong');
        buttonCoffeShopSound.classList.remove('activeButtonSong');
        icoActiveFirePlace();

    }

    function icoActiveForest(){
        icoForest.classList.add('activeIcon');
        icoRain.classList.remove('activeIcon');
        icoCoffeeShop.classList.remove('activeIcon');
        icoFirePlace.classList.remove('activeIcon');
    }

    function icoActiveRain(){
        icoRain.classList.add('activeIcon');
        icoCoffeeShop.classList.remove('activeIcon');
        icoFirePlace.classList.remove('activeIcon');
        icoForest.classList.remove('activeIcon');
    }

    function icoActiveCoffeeShop(){
        icoCoffeeShop.classList.add('activeIcon');
        icoFirePlace.classList.remove('activeIcon');
        icoForest.classList.remove('activeIcon');
        icoRain.classList.remove('activeIcon');
    }

    function icoActiveFirePlace(){
        icoFirePlace.classList.add('activeIcon');
        icoForest.classList.remove('activeIcon');
        icoRain.classList.remove('activeIcon');
        icoCoffeeShop.classList.remove('activeIcon');
    }

    return { activeSoundForest, 
             activeSoundRain, 
             activeSoundCoffeeShop, 
             activeSoundFirePlace, 
             activeButtonForest, 
             activeButtonRain, 
             activeButtonCoffeeShop, 
             activeButtonFire  };
}

