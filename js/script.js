var tralaleroAmount = 0;
var incTralaleroAmount = 1;

const brainrot = {
    bombCroc: {
        baseCost: 10,
        cost: 10,
        level: 0,
        perSec: 0.5,
    },
    liriliLarila: {
        baseCost: 11,
        cost: 11,
        level: 0,
        perSec: 2,
    },
    brrBrrPatapim: {
        baseCost: 12,
        cost: 12,
        level: 0,
        perSec: 5,
    },
};


// onload functions

document.addEventListener("DOMContentLoaded", function() {
    updateTralaleroAmount();
    
    updateAnimals();
    updateTralaleroPerSec();
});


function updateTralaleroAmount() {
    document.getElementById("tralalero-amount").innerHTML = tralaleroAmount;

}

// runs every time tralalero is clicked
function increaseTralalero() {
    tralaleroAmount += incTralaleroAmount;
    updateTralaleroAmount();
}

// generic functions

function buyAnimal(key) {
    const animal = brainrot[key];
    if (tralaleroAmount >= animal.cost) {
        tralaleroAmount -= animal.cost;

        // increase level and cost
        animal.level++;
        animal.cost = Math.floor(animal.baseCost * Math.pow(1.3, animal.level));

        // update html
        document.getElementById(key + "Cost").innerHTML = animal.cost;
        document.getElementById(key + "Level").innerHTML = animal.level;
        updateTralaleroAmount();
        updateTralaleroPerSec();
    }
}

function updateAnimals() {
    for (const key in brainrot) {
        const animal = brainrot[key];
        document.getElementById(key + "Cost").innerHTML = animal.cost;
        document.getElementById(key + "Level").innerHTML = animal.level;
    }
}


// Lirili Larila ~~~~~~~~~~~~~~~~

const liriliLarilaBaseCost = 11;
var liriliLarilaCost = 11;
var liriliLarilaLevel = 0;

function buyLiriliLarila() {
    if (tralaleroAmount >= liriliLarilaCost) {
        tralaleroAmount -= liriliLarilaCost;

        // decrease tralalero amount
        updateTralaleroAmount();

        // bomb croc level ++
        incLiriliLarilaLevel();

        // bomb croc costs more
        increaseLiriliLarilaCost();

        // more tralalalero per sec
        updateTralaleroPerSec();

    }
}

// LiriliLarilaCost
function updateLiriliLarilaCost() {
    document.getElementById("liriliLarilaCost").innerHTML = liriliLarilaCost;

}

function increaseLiriliLarilaCost() {
    liriliLarilaCost = Math.floor(liriliLarilaBaseCost * Math.pow(1.3, liriliLarilaLevel));
    updateLiriliLarilaCost();
}

// LiriliLarilaLevel
function updateLiriliLarilaLevel() {
    document.getElementById("liriliLarilaLevel").innerHTML = liriliLarilaLevel;

}

function incLiriliLarilaLevel() {
    liriliLarilaLevel ++;
    updateLiriliLarilaLevel();

}

// Brr Brr Patapim ~~~~~~~~~~~~~~~~

const brrBrrPatapimBaseCost = 12;
var brrBrrPatapimCost = 12;
var brrBrrPatapimLevel = 0;

function buyBrrBrrPatapim() {
    if (tralaleroAmount >= brrBrrPatapimCost) {
        tralaleroAmount -= brrBrrPatapimCost;

        // decrease tralalero amount
        updateTralaleroAmount();

        // bomb croc level ++
        incBrrBrrPatapimLevel();

        // bomb croc costs more
        increaseBrrBrrPatapimCost();

        // more tralalalero per sec
        updateTralaleroPerSec();

    }
}

// BrrBrrPatapimCost
function updateBrrBrrPatapimCost() {
    document.getElementById("brrBrrPatapimCost").innerHTML = brrBrrPatapimCost;

}

function increaseBrrBrrPatapimCost() {
    brrBrrPatapimCost = Math.floor(brrBrrPatapimBaseCost * Math.pow(1.3, brrBrrPatapimLevel));
    updateBrrBrrPatapimCost();
}

// BrrBrrPatapimLevel
function updateBrrBrrPatapimLevel() {
    document.getElementById("brrBrrPatapimLevel").innerHTML = brrBrrPatapimLevel;

}

function incBrrBrrPatapimLevel() {
    brrBrrPatapimLevel ++;
    updateBrrBrrPatapimLevel();

}



// add every second ~~~~~~~~~~~~~~~~~~~~~~~~
var tralaleroPerSec;

function updateTralaleroPerSec() {
    tralaleroPerSec = 0;
    for (const key in brainrot) {
        const animal = brainrot[key];
        tralaleroPerSec += animal.level * animal.perSec;
    }
    
    document.getElementById("tralaleroPerSecond").innerHTML = tralaleroPerSec;}

// adds tralaleros to total (runs every second)
function addTralalero() {
    updateTralaleroPerSec();
    tralaleroAmount += tralaleroPerSec;
    updateTralaleroAmount();
}

var interval = setInterval(addTralalero, 1000);



/*
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementById("value");
animateValue(obj, 100, 0, 5000);
*/