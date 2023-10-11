

const allPetsButton = document.getElementById('allPets')
const ulAll = document.getElementById('allList');
const ulPet = document.getElementById('petByName')
const ulowner = document.getElementById('petByOwner')
const inputPetName =document.getElementById('petName');
const petNameButton = document.getElementById('findByName');
const inputOwnerName =document.getElementById('ownerName');
const ownerNameButton = document.getElementById('findByOwner');

//event listener to get all the list of pet name 
allPetsButton.addEventListener('click',()=>{

    fetch('http://localhost:8080/api/v1/pets')
      .then(res =>res.json())
      .then(pets=>{
        pets.forEach(pet => {
            const h4 = document.createElement('h4')
            const li1 = document.createElement('li');
            const li2 = document.createElement('li');
            const li3 = document.createElement('li');
            h4.textContent = `Name : ${pet.name}`;
            li1.textContent = `Breed: ${pet.breed}`; 
            li2.textContent = `Age : ${pet.age}`;
            li3.textContent = `Owner : ${pet.owner}`;
            ulAll.append(h4,li1,li2,li3);
        });
      })
     
})


//event listener to get a pet details by pet name
petNameButton.addEventListener('click',async function(event){
    const petName = inputPetName.value;
    
    fetch('http://localhost:8080/api/v1/pets/'+petName)
    .then(res=>res.json())
    .then(pet=>{
        const h4 = document.createElement('h4')
            const li1 = document.createElement('li');
            const li2 = document.createElement('li');
            const li3 = document.createElement('li');
            h4.textContent = `Name : ${pet.name}`;
            li1.textContent = `Breed: ${pet.breed}`; 
            li2.textContent = `Age : ${pet.age}`;
            li3.textContent = `Owner : ${pet.owner}`;
            ulPet.append(h4,li1,li2,li3);
    })
})

//event listener to get a pet details by owner name

ownerNameButton.addEventListener('click',async function(event){
    const ownerName = inputOwnerName.value;
    
   await fetch(`http://localhost:8080/api/v1/pets/owner?owner=${ownerName}`)
    .then(res=>res.json())
    .then(pets=>{
        pets.forEach((pet)=>{
            const h4 = document.createElement('h4')
            const li1 = document.createElement('li');
            const li2 = document.createElement('li');
            const li3 = document.createElement('li');
            h4.textContent = `Name : ${pet.name}`;
            li1.textContent = `Breed: ${pet.breed}`; 
            li2.textContent = `Age : ${pet.age}`;
            li3.textContent = `Owner : ${pet.owner}`;
            ulPet.append(h4,li1,li2,li3);

        })
      
    })
})