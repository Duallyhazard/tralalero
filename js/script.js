var tralaleroAmount = 0;
var incTralaleroAmount = 1;

const brainrot = {
    bombCroc: {
        baseCost: 10,
        cost: 10,
        level: 0,
        perSec: 0.5,
        displayName: "Bombardino Crocodilo",
        tooltip: "Each Bombardino Crocodilo produces 0.5 Tralalero Tralalas per second."
    },
    liriliLarila: {
        baseCost: 11,
        cost: 11,
        level: 0,
        perSec: 2,
        displayName: "Lirili Larila",
        tooltip: "Each Lirili Larila produces 2 Tralalero Tralalas per second."
    },
    brrBrrPatapim: {
        baseCost: 12,
        cost: 12,
        level: 0,
        perSec: 5,
        displayName: "Brr Brr Patapim",
        tooltip: "Each Brr Brr Patapim produces 5 Tralalero Tralalas per second."

    },
    bombGus: {
        baseCost: 13,
        cost: 13,
        level: 0,
        perSec: 10,
        displayName: "Bombombini Gusini",
        tooltip: "Each Bombombini Gusini produces 10 Tralalero Tralalas per second."

    },
};


// onload functions

document.addEventListener("DOMContentLoaded", function() {
    renderAnimalUpgrades();
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

function renderAnimalUpgrades() {
    const container = document.getElementById("animals-container") 
    container.innerHTML = "";

    // render all the HTML for the upgrades
    for (const key in brainrot) {
        const animal = brainrot[key];
        container.innerHTML += `
        <div class = "upgrades ${key}" onclick = "buyAnimal('${key}')">
                    <span class = "tooltip ${key}"> 
                        ${animal.tooltip}
                    </span>
                    <div class = "top-section">
                        <img src = "images/${key}.jpg" class = "upgradeImage">
                        <h4 class = "upgradeName"> ${animal.displayName} </h4>
                        <div class = "costInfo">
                            <p> <span id = "${key}Cost"> </span> </p>
                            <img src = "images/tralalero.png" class = "currencyImage">
                        </div>
                    </div>
                    <div class = "bottom-section">
                        <p> Level <b><span id = "${key}Level"> </span> </b></p>
                    </div>
                </div>
        `
    }
}

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