const uploadAvatar = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const uploadOfferPhoto = document.querySelector('#images');
const offerPhotoPreview = document.querySelector('.ad-form__photo');

const FILE_TYPES = ['jpeg', 'jpg', 'gif', 'png'];

const onAvatarChange = function() {
  uploadAvatar.addEventListener('change', () => {
    const newAvatar = uploadAvatar.files[0];
    if(!newAvatar) {
      return;
    }
    const avatarName = newAvatar.name.toLowerCase();

    const isMatching = FILE_TYPES.some((it) => avatarName.endsWith(it));

    if(isMatching) {
      avatarPreview.src = URL.createObjectURL(newAvatar);
    }
  });
};

const onOfferPhotoChange = function() {
  uploadOfferPhoto.addEventListener('change', () => {
    const newOfferPhoto = uploadOfferPhoto.files[0];
    if(!newOfferPhoto) {
      return;
    }
    const offerPhotoName = newOfferPhoto.name.toLowerCase();

    const isMatching = FILE_TYPES.some((it) => offerPhotoName.endsWith(it));

    if(isMatching) {
      const newImg = document.createElement('img');
      newImg.src = URL.createObjectURL(newOfferPhoto);
      newImg.style.width = '150px';
      newImg.style.height = 'auto';
      offerPhotoPreview.append(newImg);
    }
  });
};

export {onAvatarChange, onOfferPhotoChange};
