console.log("hello from index.js for index.html page");

const pills=[
    {
        "index":1,
        "title":"Androgens tablet",
        "activeOn":"endocrine problems",
        "imgPill":"./images/androgens.jpg",
        "linkImg":"https://images.pexels.com/photos/4210653/pexels-photo-4210653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "inventory":"yes",
        "color":"#198754",
        "price":500,
        "activeSubstance":"androgens"
      },
      {
        "index":2,
        "title":"Estrogens tablet",
        "activeOn":"endocrine problems",
        "imgPill":"./images/estrogens.jpg",
        "linkImg":"https://images.pexels.com/photos/7615404/pexels-photo-7615404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "inventory":"no",
        "color":"#FFC107",
        "price":800,
        "activeSubstance":"estrogens"
      },
      {
        "index":3,
        "title":"Insulin tablet",
        "activeOn":"endocrine problems",
        "imgPill":"./images/insulin.jpg",
        "linkImg":"https://images.pexels.com/photos/7615577/pexels-photo-7615577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "inventory":"no",
        "color":"#FFC107",
        "price":200,
        "activeSubstance":"insulin"
      },
      {
        "index":4,
        "title":"Calcitonin tablet",
        "activeOn":"endocrine problems",
        "imgPill":"./images/calcitonin.jpg",
        "linkImg":"https://images.pexels.com/photos/7615572/pexels-photo-7615572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "inventory":"yes",
        "color":"#198754",
        "price":790,
        "activeSubstance":"calcitonin"
      },
      {
        "index":5,
        "title":"Corticosteroids tablet",
        "activeOn":"skin problems",
        "imgPill":"./images/corticosteroids.jpg",
        "linkImg":"https://images.pexels.com/photos/3683063/pexels-photo-3683063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "inventory":"yes",
        "color":"#198754",
        "price":3000,
        "activeSubstance":"corticosteroids"
      },
      {
        "index":6,
        "title":"Immune modulators tablet",
        "activeOn":"skin problems",
        "imgPill":"./images/modulators.jpg",
        "linkImg":"https://images.pexels.com/photos/3683091/pexels-photo-3683091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "inventory":"yes",
        "color":"#198754",
        "price":2600,
        "activeSubstance":"immune modulators"
      },
      {
        "index":7,
        "title":"Topical antibiotics tablet",
        "activeOn":"skin problems",
        "imgPill":"./images/topical.jpg",
        "linkImg":"https://images.pexels.com/photos/143654/pexels-photo-143654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "inventory":"yes",
        "color":"#198754",
        "price":90,
        "activeSubstance":"topical antibiotics"
      },
      {
        "index":8,
        "title":"Antibiotics tablet",
        "activeOn":"infection problems",
        "imgPill":"./images/antibiotics.jpg",
        "linkImg":"https://images.pexels.com/photos/3683090/pexels-photo-3683090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "inventory":"yes",
        "color":"#198754",
        "price":900,
        "activeSubstance":"antibiotics"
      },
      {
        "index":9,
        "title":"Desloughing agents tablet",
        "activeOn":"skin problems",
        "imgPill":"./images/agents.jpg",
        "linkImg":"https://images.pexels.com/photos/4040573/pexels-photo-4040573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "inventory":"yes",
        "color":"#198754",
        "price":750,
        "activeSubstance":"desloughing agents"
      },
      {
        "index":10,
        "title":"Antivirals tablet",
        "activeOn":"infection problems",
        "imgPill":"./images/antivirals.jpg",
        "linkImg":"https://images.pexels.com/photos/3683068/pexels-photo-3683068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "inventory":"yes",
        "color":"#198754",
        "price":5780,
        "activeSubstance":"antivirals"
      },
      {
        "index":11,
        "title":"Antifungals tablet",
        "activeOn":"infection problems",
        "imgPill":"./images/antifungals.jpg",
        "linkImg":"https://images.pexels.com/photos/4046997/pexels-photo-4046997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "inventory":"yes",
        "color":"#198754",
        "price":5780,
        "activeSubstance":"antifungals"
      },
      {
        "index":12,
        "title":"Antitoxins tablet",
        "activeOn":"infection problems",
        "imgPill":"./images/antitoxins.jpg",
        "linkImg":"https://images.pexels.com/photos/4210612/pexels-photo-4210612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "inventory":"yes",
        "color":"#198754",
        "price":5780,
        "activeSubstance":"antitoxins"
      },
      {
        "index":13,
        "title":"Antivenoms tablet",
        "activeOn":"infection problems",
        "imgPill":"./images/antivenoms.jpg",
        "linkImg":"https://images.pexels.com/photos/3683120/pexels-photo-3683120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "inventory":"yes",
        "color":"#198754",
        "price":1350,
        "activeSubstance":"antivenoms"
      },
      {
        "index":14,
        "title":"Antituberculous drugs tablet",
        "activeOn":"infection problems",
        "imgPill":"./images/drugs.jpg",
        "linkImg":"https://images.pexels.com/photos/6074963/pexels-photo-6074963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "inventory":"yes",
        "color":"#198754",
        "price":470,
        "activeSubstance":"antituberculous drugs"
      },
];

console.log("pills length" , pills.length);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

const pills_container=document.getElementById("pills_container");
pills_container.style.border="3px solid red";




let pillsArr=[];
let pillsContent=``;

//--show all pills

const showAllPillsBtn=document.getElementById("showAllPillsBtn");

showAllPillsBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the show all pills btn");

    //---
    pills.forEach(showAllCallBackFunc);

    function showAllCallBackFunc(pillItem){
        pillsContent +=`
        <div class="card" style="width: 18rem">
            <img src="${pillItem.imgPill}" class="card-img-top" alt="pill_item_img">
            <div class="card-body">
                <h5 class="card-title" style="color:${pillItem.color}">${pillItem.title}</h>
                <h5 class="card-title">Price: ${pillItem.price}</h5>
                <h5 class="card-title">Active ingredient: ${pillItem.activeSubstance}</h5>
               
                <a href="https://en.wikipedia.org/wiki/Medication"  target="_blank" class="btn btn-primary">Source</a><br></br>
                <a href="${pillItem.linkImg}"  target="_blank" class="btn btn-primary">Pexels image source</a>
            </div>
        </div>
        `;
    }
    //---
pills_container.innerHTML=pillsContent;

});

//--show endocrine

//--
const pills_containerEndocrine=document.getElementById("pills_containerEndocrine");
pills_containerEndocrine.style.border="3px solid green";

let pillsContentEndocrine=``;

const endocrineProblemsBtn=document.getElementById("endocrineProblemsBtn");
endocrineProblemsBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("you clicked the endocrine btn");

    //---
    const endocrinePills=pills.filter(endocrineCBfunction);

    function endocrineCBfunction(pillItem){
        return pillItem.activeOn === "endocrine problems";
    }

    console.log("endocrinePills is " , endocrinePills);
    //---

    for(let i=0 ; i<endocrinePills.length ; i++){
        pillsContentEndocrine +=`
        <div class="card" style="width: 18rem">
            <img src="${endocrinePills[i].imgPill}" class="card-img-top" alt="pill_item_img">
            <div class="card-body">
                <h5 class="card-title" style="color:${endocrinePills[i].color}">${endocrinePills[i].title}</h>
                <h5 class="card-title">Price: ${endocrinePills[i].price}</h5>
                <h5 class="card-title">Active ingredient: ${endocrinePills[i].activeSubstance}</h5>
               
                <a href="https://en.wikipedia.org/wiki/Medication"  target="_blank" class="btn btn-primary">Source</a><br></br>
                <a href="${endocrinePills[i].linkImg}"  target="_blank" class="btn btn-primary">Pexels image source</a>
            </div>
        </div>
        `;
    }
    //--
    pills_containerEndocrine.innerHTML=pillsContentEndocrine;
});


///---show skin

//--
const pills_containerSkin=document.getElementById("pills_containerSkin");
pills_containerSkin.style.border="3px solid magenta";

let pillsContentSkin=``;

const skinProblemsBtn=document.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("skin btn");

    //---

const skinPills=pills.filter(skinCBfunc);

function skinCBfunc(pillItem){
    return pillItem.activeOn === "skin problems";
}

console.log("skinPills is : " , skinPills);
    //---

    for(let i=0 ; i<skinPills.length ; i++){
        pillsContentSkin +=`
        <div class="card" style="width: 18rem">
            <img src="${skinPills[i].imgPill}" class="card-img-top" alt="pill_item_img">
            <div class="card-body">
                <h5 class="card-title" style="color:${skinPills[i].color}">${skinPills[i].title}</h>
                <h5 class="card-title">Price: ${skinPills[i].price}</h5>
                <h5 class="card-title">Active ingredient: ${skinPills[i].activeSubstance}</h5>
               
                <a href="https://en.wikipedia.org/wiki/Medication"  target="_blank" class="btn btn-primary">Source</a><br></br>
                <a href="${skinPills[i].linkImg}"  target="_blank" class="btn btn-primary">Pexels image source</a>
            </div>
        </div>
        `;
    }
    //--
    pills_containerSkin.innerHTML=pillsContentSkin;

});





















