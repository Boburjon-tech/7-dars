// // Case1. 1-7 gacha bo'lgan butun sonlar berilgan. Kiritilgan songa mos ravishda hafta kunlarini so'zda ifodalovchi programma tuzilsin. (1-Dushanba, 2-Seshanba,...h.k)

// let weekday=+prompt("hafta kunini raqamda ifodalang:");

// switch (weekday) {
//     case 1: weekday="Dushanba";break;
//     case 2: weekday="Seshanba";break;
//     case 3: weekday="Chorshanba";break;
//     case 4: weekday="Payshanba";break;
//     case 5: weekday="Juma";break;
//     case 6: weekday="Shanba";break;
//     case 7: weekday="Yakshanba";break;
//     default: console.log("siz kiritgan raqam noto'g'ri!");break;
// } 
// console.log("Siz kiritgan raqam ostidagi hafta kuni bu : ",weekday);


// // Case2. A, B haqiqiy va amal butun soni berilgan. A va B sonlari ustida arifmetik amallar bajaruvchi programma tuzilsin. Amal quyidagi qiymatlarni qabul qiladi: 1-qo`shish, 2-ayirish, 3-bo`lish, 4- ko`paytirish.

// let A = +prompt("a soniga qiymat bering:");
// let B = +prompt("b soniga qiymat bering:");
// let number = +prompt("qaysi raqam ostidagi amalni bajarmoqchisiz:");
// switch (number) {
//     case 1: console.log(`${A} + ${B} = ${A+B}`);break;
//     case 2: console.log(`${A} - ${B} = ${A-B}`);break;
//     case 3: console.log(`${A} * ${B} = ${A*B}`);break;
//     case 4: console.log(`${A} / ${B} = ${A/B}`);break;
//     default: console.log("siz noto'g'ri raqam kiritdingiz");
// }


// // Case3. Yoshni yillarda aniqlovchi 20-69 gacha butun son berilgan. Kiritilgan sonni so`zlarda ifodalovchi programma tuzilsin. ("yigirma yosh", "qirq uch yosh❞ va h.k.)

// let sonn=+prompt("son kiriting:");
// let onlik = sonn / 10 | 0;
// let birlik=sonn%10;

// switch (onlik) {
//     case 2: onlik = "yigirma";break;
//     case 3: onlik = "o'ttiz";break;
//     case 4: onlik = "qirq";break;
//     case 5: onlik = "ellik";break;
//     case 6: onlik = "oltmish";break;
//     default: console.log("Error");break;
// }

// switch (birlik) {
//     case 0 : birlik = " ";break;
//     case 1 : birlik = "bir";break;
//     case 2 : birlik = "ikki";break;
//     case 3 : birlik = "uch";break;
//     case 4 : birlik = "to'rt";break;
//     case 5 : birlik = "besh";break;
//     case 6 : birlik = "olti";break;
//     case 7 : birlik = "yetti";break;
//     case 8 : birlik = "sakkiz";break;
//     case 9 : birlik = "to'qqiz";break;
// }
// console.log(onlik,birlik);


// // Case1. K butun soni berilgan. Baho natijalarini chiqaruvchi programma tuzing.(1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yahshi, 5-a'lo). Agar k soni 1-5 gacha oraliqqa tegishli bo`lmasa "xato" deb chiqarilsin.

// let K = +prompt("raqam kiriting:");

// switch(K) {
//     case 1: console.log("yomon");break;
//     case 2: console.log("qoniqarsiz");break;
//     case 3: console.log("qoniqarli");break;
//     case 4 : console.log("yaxshi");break;
//     case 5: console.log("A'lo");break;
//     default: console.log("Xato");
// }

// // Case2. Oy raqamini berilgan. Kiritilgan oy qaysi faslga tegishli ekanligini chiqaruvchi programma tuzilsin. (Masalan: 2 chi oy, "qish");

// let oy = +prompt("son kiriting:");

// switch (oy) {
//     case 12:
//     case 1:
//     case 2:console.log("qish");break;
//     case 3:
//     case 4:
//     case 5:console.log("bahor");break;
//     case 6:
//     case 7:
//     case 8:console.log("yoz");break;
//     case 9:
//     case 10:
//     case 11:console.log("kuz");break;
//     default:console.log("wrong number!");break;
// }

// // Case3. Oy raqami berilgan. Shu oyda nechta kun borligini aniqlovchi programma tuzilsin.

// let month = +prompt("son kiriting:");

// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:console.log("31kun");break;
//     case 6:
//     case 4:
//     case 9:
//     case 11:console.log("30kun");break;
//     case 2:console.log("28kun");break;
//     default:console.log("wrong number!");break;
// }

// // Case4. Uzinlik birliklari quyidagi tartibda berilgan. 1-desimetr, 2-kilometr, 3-metr, 4-millimeter, 5- santimetr. Uzunlik birligini bildiruvchi son berilgan (1 - 5 oraliqda) va shu birlikdagi kesma uzunligi berilgan (haqiqiy son). Kesmaning uzunligini metrlarda ifodalofchi programma tuzilsin.

// let _sonn = +prompt("son kiriting:");
// let sinm = _sonn;
// let chase = +prompt("qaysi uzunlik amalni bajarmoqchisiz:");
// switch(chase) {
//     case 1: _sonn /= 10; chase="dm";break; //detsimetr;
//     case 2: _sonn *= 1000; chase="km";break;//kilometr;
//     case 3: _sonn *=1; chase="m";break;//metr;
//     case 4: _sonn /=1000; chase="mm";break;//millimetr;
//     case 5: _sonn/=100; chase="sm";break; //santimetr;
//     default:console.log("Error");
// } console.log(sinm,chase, "=" , _sonn,"m");

// // Case5. Og'irlik birliklari quyidagi tartibda berilgan. 1-kilogramm, 2-milligramm, 3-gramm, 4-tonna, 5- sentner. Og'irlik birligini bildiruvchi soni berilgan va shu birlikdagi og`irlik qiymati berilgan. Og`irlikni kilogramda ifodalofchi programma tuzilsin.

// let _sonn_ = +prompt("son kiriting:");
// let sinm_ = _sonn_;
// let chase_ = +prompt("qaysi og'irlik amalni bajarmoqchisiz:");
// switch(chase_) {
//     case 1: _sonn_ *= 1; chase_="kg";break; //kilogram;
//     case 2: _sonn_ /= 1000; chase_="mg";break;//milligram;
//     case 3: _sonn_ /=100; chase_="g";break;//gram;
//     case 4: _sonn_ *=1000; chase_="t";break;//tonna;
//     case 5: _sonn_*=100; chase_="ar";break; //sentner;
//     default:console.log("Error");
// } console.log(sinm_,chase_, "=" , _sonn_,"kg");


// // Case6. Sanani bildiruvchi ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo`lmagan yil sanasi kiritiladi). Berilgan sanani ifodalovchi programma tuzilsin. Kabisa yilida 366 kun, kabisa bo'lmagan yilda 365 kun bor bo'ladi.

// let D = +prompt("kunni kiriting:");
// let M = +prompt("oyni kiriting:");

// switch (M) {
//     case 1: M="yanvar";break;
//     case 2: M="Fevral";break;
//     case 3: M="Mart";break;
//     case 4: M="Aprel";break;
//     case 5: M="May";break;
//     case 6: M="Iyun";break;
//     case 7: M="Iyul";break;
//     case 8: M="Avgust";break;
//     case 9: M="Sentabr";break;
//     case 10: M="Oktyabr";break;
//     case 11: M="Noyabr";break;
//     case 12: M="Dekabr";break;
//     default:false;break;
// }

// if (D==31 && M==2 ||M==4||M==6||M==9||M==11){
//     false;
// }
// else if (D>28 && M=="Fevral"){
//     false;
// }else {
//     console.log(`${D}-${M}`);
// }

// // // Case7. Ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo`lmagan yil sanasi kiritiladi). Berilgan sanadan keyingi sanani ifodalovchi programma tuzilsin.

// Case11. 100-999 gacha oraliqdagi sonlarni so'zlarda ifodalovchi programma tuzilsin. (masalan: 123- "bir yuz yigirma uch").

let ThreeNumber = +prompt("uch xonalik son kiriting:");
let yuzliklar=ThreeNumber/100|0;
let onliklar=ThreeNumber%100/10|0;
let birliklar=ThreeNumber%100%10;

switch(yuzliklar){
    case 1: yuzliklar="bir";break;
    case 2: yuzliklar="ikki";break;
    case 3: yuzliklar="uch";break;
    case 4: yuzliklar="to'rt";break;
    case 5: yuzliklar="besh";break;
    case 6: yuzliklar="olti";break;
    case 7: yuzliklar="yetti";break;
    case 8: yuzliklar="sakkiz";break;
    case 9: yuzliklar="to'qqiz";break;
    default:console.log(False);break;
}

switch(onliklar){
    case 0:onliklar=" ";break;
    case 1:onliklar="o'n";break;
    case 2:onliklar="yigirma";break;
    case 3:onliklar="o'ttiz";break;
    case 4:onliklar="qirq";break;
    case 5:onliklar="ellik";break;
    case 6:onliklar="oltmish";break;
    case 7:onliklar="yetmish";break;
    case 8:onliklar="sakson";break;
    case 9:onliklar="to'qson";break;
    default:console.log(false);
}

switch(birliklar){
    case 0:birliklar=" ";break;
    case 1:birliklar="bir";break;
    case 2:birliklar="ikki";break;
    case 3:birliklar="uch";break;
    case 4:birliklar="to'rt";break;
    case 5:birliklar="besh";break;
    case 6:birliklar="olti";break;
    case 7:birliklar="yetti";break;
    case 8:birliklar="sakkiz";break;
    case 9:birliklar="to'qqiz";break;
    default:console.log(false);
}
console.log(`${yuzliklar} yuz ${onliklar} ${birliklar}`);