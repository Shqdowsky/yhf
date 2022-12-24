let message = document.querySelector(".message");
let santa = document.querySelector(".santaimg");
let burger = document.querySelector(".icon-menu")
let menu = document.querySelector(".header__menu ")
let body = document.querySelector("body")
let cross = document.querySelector(".contract__close")
let contract = document.querySelector(".contract")
let select = document.querySelector("select")
let allang = ["en", "ua", "ru"]
let nav1 = document.querySelector(".menu__link1")
let nav2 = document.querySelector(".menu__link2")
let nav3 = document.querySelector(".menu__link3")
let nav4 = document.querySelector(".menu__link4")
let tokenomicstitle = document.querySelector(".tokenomics__title img")
let tokenomicssubtitle = document.querySelector(".tokenomics__subtitle img")
let mapt1 = document.querySelector(".map-item1__title")
let mapt2 = document.querySelector(".map-item2__title")
let mapt5 = document.querySelector(".map-item5__title")
let tokenftext = document.querySelector(".tokenomics__ftext img")
let rewards__title = document.querySelector(".rewards__title img")
let body_aboutus__text = document.querySelector(".body-aboutus__text")
let rewards__subtitle1 = document.querySelector(".rewards__subtitle1")
let rewards__subtitle2 = document.querySelector(".rewards__subtitle2")
let nftcard__title = document.querySelectorAll(".nft-card__title")
let nft__time1 = document.querySelector(".nft1__time img")
let nft__time2 = document.querySelector(".nft2__time img")
let nft__time3 = document.querySelector(".nft3__time img")
let contractbutton = document.querySelector(".contract__button")
let roadmaptitle = document.querySelector(".roadmap__title img")
let card__item = document.querySelectorAll(".roadmap-card__item")
let remuneration__title = document.querySelector(".remuneration__title img")
let card__rewards = document.querySelectorAll(".card__rewards img")
let remuneration__ftext = document.querySelector(".remuneration__ftext img")
let presents__title = document.querySelector(".presents__title img")
let presents__subtitle = document.querySelector(".presents__subtitle img")

select.addEventListener("change", changeUrlLanguage)
function changeUrlLanguage() {
   let lang = select.value;
   location.href = window.location.pathname + "#" + lang;
   location.reload()
}

function changeLanguage() {
   let hash = window.location.hash;
   hash = hash.substring(1);
   if (!allang.includes(hash)) {
      location.href = window.location.pathname + "#ru";
   }
   if (hash != "") {
      select.value = hash
   }
   if (hash == "ua") {
      nav1.innerHTML = "Презентація"
      nav2.innerHTML = "Дорожня карта"
      nav3.innerHTML = "Токеноміка"
      nav4.innerHTML = "О нас"
      tokenomicstitle.src = "./img/ua/token/title.png"
      tokenomicssubtitle.src = "./img/ua/token/subtitle.png"
      mapt1.innerHTML = "НАГОРОДИ ХОЛДЕРАМ"
      mapt2.innerHTML = "ЛІКВІДНІСТЬ"
      mapt5.innerHTML = "СПАЛЮВАННЯ"
      tokenftext.src = "./img/ua/token/ftext.png"
      rewards__title.src = "./img/ua/rewards/title.png"
      rewards__subtitle1.src = "./img/ua/rewards/subtitle1.png"
      rewards__subtitle2.src = "./img/ua/rewards/subtitle2.png"
      nft__time1.src = "./img/ua/rewards/time.png"
      nft__time2.src = "./img/ua/rewards/time2.png"
      nft__time3.src = "./img/ua/rewards/time3.png"
      for (text of nftcard__title) {
         text.innerHTML = "СЕРЕДНЯ ЦІНА:"
      }
      contractbutton.innerHTML = "Купити токен $CLAUS"
      roadmaptitle.src = "./img/ua/roadmap/title.png"
      card__item[0].innerHTML = "БРЕНДІНГ"
      card__item[1].innerHTML = "ТОКЕНОМІКА"
      card__item[3].innerHTML = "НФТ КОЛЛЕКЦІЯ"
      card__item[4].innerHTML = "СМАРТ КОНТРАКТ<br>АУДІТ"
      card__item[6].innerHTML = "ЗАЛУЧЕННЯ<br>ЛІДЕРІВ"
      card__item[7].innerHTML = "ЛІСТИНГ НА<br>DEX БІРЖАХ"
      card__item[8].innerHTML = "1, 500 ХОЛДЕРІВ"
      card__item[9].innerHTML = "ЛІСТИНГ НА<br>COINGECKO"
      card__item[10].innerHTML = "4,500 ХОЛДЕРІВ"
      card__item[11].innerHTML = "МАСШТАБНИЙ<br>АІРДРОП"
      card__item[12].innerHTML = "РОЗРОБКА<br>P2E ІГРИ"
      card__item[13].innerHTML = "ЛІСТИНГ НА<br>KUCOIN"
      card__item[14].innerHTML = "БЕТА ВЕРСІЯ<br>P2E ІГРИ"
      card__item[16].innerHTML = "10,000 ХОЛДЕРІВ"
      card__item[17].innerHTML = "ЗАПУСК P2E ІГРИ"
      remuneration__title.src = "./img/ua/remuneration/title.png"
      card__rewards[0].src = "./img/ua/remuneration/tokens1.png"
      card__rewards[1].src = "./img/ua/remuneration/time.png"
      card__rewards[2].src = "./img/ua/remuneration/tokens2.png"
      card__rewards[3].src = "./img/ua/remuneration/time.png"
      card__rewards[4].src = "./img/ua/remuneration/tokens3.png"
      card__rewards[5].src = "./img/ua/remuneration/time.png"
      remuneration__ftext.src = "./img/ua/remuneration/ftext.png"
      presents__title.src = "./img/ua/presents/title.png"
      presents__subtitle.src = "./img/ua/presents/subtitle.png"
      body_aboutus__text.innerHTML = "<p>$CLAUS - це цифровий мем-токен, створений для простого зберігання та примноження коштів.</p><p> Ми збираємося створити незалежний децентралізований токен, який на 100 % контролюватиметься йогос пільнотою.</p> Також основною метою цього токену є створення Різдвяного настрою для всіх."
   }
}
changeLanguage()
burger.addEventListener("click", function () {
   burger.classList.toggle("active");
   menu.classList.toggle("active");

})
santa.addEventListener("click", function () {
   message.classList.toggle("active");
})
cross.addEventListener("click", function () {
   contract.classList.add("hidden");
})