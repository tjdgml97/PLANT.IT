// BUTTON
// 진단결과 페이지에서 더보기 이동 시, 결과에 따른 버튼들 autofocus
// 중복 안되는 건 disabled

// 이미지를 배열로 저장 후 일괄 처리 - 뮤직플레이어 처럼

// classList.contains() 으로 검색 결과 처리?

// 클래스명: easy/hard, air/pet/big/deco, short/long

// 식물 데이터
// "적당히 주기" -> short / 정확한 정보 찾아보기!
const plants = [
  "스파팁휠룸, SPATHIPHYLLUM, easy, short, air",
  "산세비에리아 쉴린드리카, SANSEVIERIA CYLINDRICA, easy, long, air",
  "헤데라 헬릭스, HEDERA HELIX, hard, short, air",
  "아레카 야자, CHRYSALIDOCARPUS LUTESCENS, hard, short, air, pet, big",
  "파시라 아크바티카, PACHIRA AQUATICA, easy, long, pet, big",
  "샤마에도레아 엘레간스, CHAMAEDOREA ELEGANS, easy, short, pet",
  "라데르마셰라, RADERMACHERA, hard, short, pet",
  "피토니아, FITTONIA, hard, short, pet",
  "드라카에나 데레멘시스, DRACAENA DEREMENSIS, easy, short, big",
  "헤테로파낙스 시넨시스, HETEROPANAX CHINENSIS, hard, short, big",
  "사미오쿨카스, ZAMIOCULCAS, easy, long, deco",
  "칵타세아에, CACTACEAE, easy, long, deco",
  "클루시아, CLUSIA, easy, short, deco",
  "페페로미아, PEPEROMIA, easy, short, deco",
  "칼란쇼에, KALANCHOE, hard, long, deco",
  "휘아신투스, HYACINTHUS, hard, short, deco",
  "블라드베르크, BLADVERK, hard, short, deco",
  "프힐로덴드론 콩오, PHILODENDRON CONGO, hard, short, deco",
];

// 1. div.plant 에 데이터 일괄 처리
const divArr = document.querySelectorAll(".plant");

for (let i = 0; i < plants.length; i++) {
  // arr ; 식물 1개 당 상세정보 배열
  const arr = plants[i].split(", ");

  // div 의 한글 이름
  const korName = divArr[i].querySelector(".kor");
  korName.innerHTML = `${arr[0]}`;

  // div 의 영어 이름
  const engName = divArr[i].querySelector(".eng");
  engName.innerHTML = `${arr[1]}`;

  // div 의 이미지
  const img = divArr[i].querySelector("img");
  if (
    // .webp 파일일 때
    arr[0] === "산세비에리아 쉴린드리카" ||
    arr[0] === "헤테로파낙스 시넨시스"
  ) {
    img.setAttribute("src", `./image/${arr[0]}.webp`);
  } else {
    // .avif 파일일 때
    img.setAttribute("src", `./image/${arr[0]}.avif`);
  }

  // 클래스명 추가
  for (let j = 2; j < arr.length; j++) {
    divArr[i].classList.add(`${arr[j]}`);
  }
}
