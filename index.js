
// function checkSpeed(speed){
//     if (speed <= 70){
//         console.log('OK');
//         return;
//     }
//     let points=Math.floor(speed/5)-13
//     points < 12 ? console.log("Points:",points) : console.log("License Suspended")
// }

// checkSpeed(125)

// function star(rows){
//     s=''
//     for (let i=1;i<=rows;i++){
//         s+='*'
//         console.log(s)
//     }
    
// }

// star(7)
//%%--------------------------

//FACTORY FUNCTION
// function address(street,city,zipCode){
//     return {
//         street, //if key and argument are the same; if not: street:x 
//         city,
//         zipCode,
//     };
// }

// address1=address(5,'x','b')
// showAddress(address1)

// -------------------------------------------------
//CONSTRUCTOR FUNCTION
// function address(street,city,zipCode){
//     this.street=street
//     this.city=city;
//     this.zipCode=zipCode;
// }


// function showAddress(object){
//     for (let entry in object){
//         console.log(entry, object[entry]);
//     }
// }

// function areEqual(object1,object2){
//     for (let key in object1){
//         if (object1[key]!==object2[key]) return false;
//     }
//     return true;
// }

// function areSame(object1,object2){
//     return object1===object2 ? true:false;
// }

// const address1= new address(10,11,12)
// const address2= new address(10,11,12)

// console.log(areEqual(address1,address2))
// console.log(areSame(address1,address1))


// let blogPost={
//     title:'title',
//     body:'body',
//     author:'author',
//     views:'views',
//     comments:[
//         {author:'author1',body:'body1'},
//         {author:'author2',body:'body2'}
//     ],
//     isLive=true

// };

// Post With COnstructor Function
function Post(title,body,author){
    this.title=title;
    this.body=body;
    this.author=author;
    this.views=0;
    this.comments=[];
    this.isLive=false;
}

// PricesRanges Buttons: Button Object to filter restaurants by average price
let PricesRanges=[
    {label:'$', tooltip:'Inexpensive', minPrice=5, maxPrice=10},
    {label:'$$', tooltip:'Moderate', minPrice=11, maxPrice=20},
    {label:'$$$', tooltip:'Expensive', minPrice=21, maxPrice=60},
]