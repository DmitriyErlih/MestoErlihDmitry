let profileOpenButton = document.querySelector(".profile__edit-button");
let profileName = document.querySelector(".profile__header");
let profileJob = document.querySelector(".profile__subheader");

let profilePopup = document.querySelector(".popup");
let formElement = document.querySelector(".popup__form");
let popupEditProfileCloseBtn = document.querySelector(".popup__close-button");
const profileCloseButton = document.querySelectorAll('.popup__cross');

const profileForm = document.forms["poputEdit"];
let formName = profileForm.querySelector(".form__input_type_name");
let formJob = profileForm.querySelector(".form__input_type_job");

let popupAddProfile = document.querySelector(".popup__card");
const openPopupButtonAddingCard = document.querySelector(".profile__add-button");

const formNewCard = document.forms["poputAdd"];

const cardList = document.querySelector('.cards-grid');
const templateCard = document.querySelector('.template-card');

const popupAddingCard = document.querySelector('.popup_addin-card');
const popupOpenImage = document.querySelector('.popup_open-image');
const popupImage = popupOpenImage.querySelector('.popup__image');
const popupFigcaption = popupOpenImage.querySelector('.popup__figcaption');

const popupPlace = formNewCard.querySelector('.form__input_type_place');
const popupLink = formNewCard.querySelector('.form__input_type_link');

const closePopup = (profilePopup) => {
  profilePopup.classList.remove('popup_opened');
};

const openPopup = (profilePopup) => {
  profilePopup.classList.add('popup_opened');
};


const openPopupProfile = () => {
  formName.value = profileName.textContent;
  formJob.value = profileJob.textContent;
  openPopup(profilePopup);
};

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileJob.textContent = formJob.value;
  closePopup(profilePopup);
};

profileOpenButton.addEventListener('click', openPopupProfile);

profileForm.addEventListener('submit', handleProfileFormSubmit); 

profileCloseButton.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const addCards = (titleValue, linkValue) => {
  const templateCardClone = templateCard.content.cloneNode(true);
  templateCardClone.querySelector('.cards-grid__title').textContent = titleValue;
  const cardImage = templateCardClone.querySelector('.cards-grid__image');
  cardImage.src = linkValue;
  cardImage.alt = titleValue;

  templateCardClone.querySelector('.cards-grid__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards-grid__like_active');
  });

  templateCardClone.querySelector('.cards-grid__delete').addEventListener('click', function (evt) {
    evt.target.closest('.cards-grid__item').remove();
  });

  cardImage.addEventListener('click', function () {
    popupImage.src = linkValue;
    popupImage.alt = titleValue;
    popupFigcaption.textContent = titleValue;
    openPopup(popupOpenImage);
  });


  return templateCardClone;
};

initialCards.forEach((card) => {
  const finalCard = addCards(card.name, card.link);
  cardList.append(finalCard);
})

const openPopupAddinCard = () => {
  formNewCard.reset();
  openPopup(popupAddingCard);
};

const handleCardFormSubmit = (evt) => {
  evt.preventDefault();
  const finalCardd = addCards(popupPlace.value, popupLink.value);
  cardList.prepend(finalCardd);
  closePopup(popupAddingCard);
};

openPopupButtonAddingCard.addEventListener('click', openPopupAddinCard);
formNewCard.addEventListener('submit', handleCardFormSubmit);