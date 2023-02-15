let editProfileBtn = document.querySelector(".profile__edit-button");
let profileName = document.querySelector(".profile__header");
let profileJob = document.querySelector(".profile__subheader");

let popupEditProfile = document.querySelector(".popup");
let formElement = document.querySelector(".popup__form");
let popupEditProfileCloseBtn = document.querySelector(".popup__close-button");
let nameInput = document.querySelector(".form__input_type_name");
let jobInput = document.querySelector(".form__input_type_job");

let popupAddProfileCloseBtn = document.querySelector(".popup__add-button");
let popupAddProfile = document.querySelector(".popup__card");
let addProfileBtn = document.querySelector(".profile__add-button");
let linkInput = document.querySelector(".form__input_type_link");
let imageInput = document.querySelector(".form__input_type_image");

function popupEditProfileOpen() {
  popupEditProfile.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

function popupEditProfileClose() {
  popupEditProfile.classList.remove("popup_opened");
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupEditProfileClose();
};




function popupAddProfileOpen() {
  popupAddProfile.classList.add("popup_opened");
  linkInput.value = profileLink.textContent;
  imageInput.value = profileImage.textContent;
} 

function popupAddProfileClose() {
  popupAddProfile.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileLink.textContent = linkInput.value;
  profileImage.textContent = imageInput.value;
  popupAddProfileClose();
}


editProfileBtn.addEventListener('click', popupAddProfileOpen);

addProfileBtn.addEventListener('click',popupAddProfileOpen);
popupAddProfileCloseBtn.addEventListener('click', popupAddProfileClose);

popupEditProfileCloseBtn.addEventListener('click', popupEditProfileClose);
formElement.addEventListener('submit', handleFormSubmit);
