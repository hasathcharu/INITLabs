import data from './data.js';
const cardArea = document.querySelector("#hotelCards");
data.forEach((item)=>{
    const card = document.createElement('div');
    card.className = "hotelCard";
    const cardTemplate = document.querySelector("#hotelCardTemplate");
    const hotelCardContent = document.importNode(cardTemplate.content, true);
    hotelCardContent.querySelector('.cardImageArea img').setAttribute('src',item.imgUrl);
    hotelCardContent.querySelector('.cardDescArea h1').textContent=item.name;
    hotelCardContent.querySelector('.cardDescArea p').textContent=item.desc;
    hotelCardContent.querySelector('button').addEventListener("click",()=>{
        alert(item.name+" was booked!");
    });
    card.append(hotelCardContent);
    cardArea.append(card);

})