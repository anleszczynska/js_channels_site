import data from "./channels.json" assert { type: "json" };

const TitlesHtml = document.getElementsByClassName("title");
const SubscribersHtml = document.getElementsByClassName("info__subs");
const ViewsHtml = document.getElementsByClassName("info__views");
const VideosHtml = document.getElementsByClassName("info__videos");


const inputFilter= document.querySelector('.filter__input');

const convertArr = function (htmlCollection) {
  const arr = [...htmlCollection];
  return arr;
};
const arrTitles = convertArr(TitlesHtml);

const addContent = function (arr) {
  arr.map((elem, i) => (elem.innerText = data[i].title));
};
addContent(arrTitles);

function commify(n) {
  const parts = n.toString().split(".");
  const numberPart = parts[0];
  const decimalPart = parts[1];
  const thousands = /\B(?=(\d{3})+(?!\d))/g;
  return (
    numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "")
  );
}

const arrSubscribers = convertArr(SubscribersHtml);
const addSubs = function (arr) {
  arr.map(
    (elem, i) =>
      (elem.innerText = `SUBSCRIBERS: 
  ${commify(Number(data[i].statistics.subscriberCount))}`)
  );
};
addSubs(arrSubscribers);

const arrViews = convertArr(ViewsHtml);
const addViews = function (arr) {
  arr.map(
    (elem, i) =>
      (elem.innerText = `VIEWS: 
   ${commify(Number(data[i].statistics.viewCount))}`)
  );
};
addViews(arrViews);

const arrVideos = convertArr(VideosHtml);
const addVideos = function (arr) {
  arr.map(
    (elem, i) =>
      (elem.innerText = `VIDEOS: 
   ${commify(Number(data[i].statistics.videoCount))}`)
  );
};
addVideos(arrVideos);

//const addImage= function(arr){
//arr.map((img,i) =>
//img[i].src=data[i].thumbnails.high.url);

//}
//addImage(imgarr);

const imgs = document.querySelectorAll("img");
//const imgarr = Array.from(imgs);
imgs[0].src = data[0].thumbnails.high.url;
imgs[1].src = data[1].thumbnails.high.url;
imgs[2].src = data[2].thumbnails.high.url;
imgs[3].src = data[3].thumbnails.high.url;
imgs[4].src = data[4].thumbnails.high.url;
imgs[5].src = data[5].thumbnails.high.url;
imgs[6].src = data[6].thumbnails.high.url;



// Clear filters
function clear(){
  let selected=document.getElementsByName("sort");
for(let i=0; i< selected.length; i++){
  selected[i].checked=false;
  inputFilter.value="";
}
};

const btnClear=document.querySelector(".button");
btnClear.addEventListener('click', clear)






