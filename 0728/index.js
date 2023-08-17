let text = document.querySelectorAll(".serch_box > ul > li");
    console.log(text);

let textes = ["#바나나맛우유", "#더단백", "#슈퍼콘", "#요플레", "#아카페라"];

for(let i = 0; i < text.length; i++){
    console.log(text[i]);
    console.log(text[i].innerHTML, textes[i]);
    text[i].innerHTML = textes[i];
}

// let image = document.querySelectorAll(".st01 > ul > li");
// console.log(image);

// let images = ["./imges/bg01.png", "bg02.png", "bg01.png", "bg01.png", "bg01.png", "bg01.png"];

// for(let ig = 0; ig < image.length; ig++){
//     console.log(image[ig]);
//     console.log(image[ig].innerHTML, images[ig]);
//     image[ig].innerHTML = images[ig];
// }
