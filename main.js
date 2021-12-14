$(document).ready(function () {});

// let contacts = [];

// current contact being edited
let _row = null;

// fetch json data
async function getData(url) {
  const res = await fetch(url);
  const contacts = await res.json();
  // populate contact rows
  for (const contact of contacts) {
    console.log(contact);
    displayContactList(contact);
  }
}

getData('data.json');

// display json data
const displayContactList = (data) => {
  $('.contacts__row').append(
    `<div class="details__contact">
          <div class="avatar">
            <span
              class="
                avatar avatar-lg-32
                badge-secondary
                rounded-circle
                text-light
                p-1
              "
              >${data.firstName[0]}${data.lastName[0]}</span
            >
          </div>
          <div class="contact__name">${data.firstName} ${data.lastName}</div>
          <div class="contact__mobile">${data.telephone}</div>
          <div class="contact__email">${data.email}</div>
          <div class="contact__address">${data.address}</div>
          <button class="btn__icon delete__btn">
            <i class="fas fa-trash-alt"></i>
          </button>
          <button class="btn__icon edit__btn">
            <i class="far fa-edit"></i>
          </button>
        </div>`
  );
  // delete
  $('.delete__btn').click(function (e) {
    console.log(e);
    $(this).parent('div').remove();
  });

  $('.edit__btn').click(function (e) {
    // console.log(e);
    console.log('hey update');
  });
};

// add new contact
$('.add__btn').click(function (e) {
  console.log(e);
  $('.simple-modal').css('display', 'block').show();
});

$('.close-modal').click(() => $('.simple-modal').css('display', 'none'));

const createContact = function () {
  let id;
  // new contact input field
  const firstName = $('#inputFirstName').val();
  const lastName = $('#inputLastName').val();
  const telephone = $('#inputTelephone').val();
  const address = $('#inputAddress').val();
  const email = $('#inputEmail').val();

  if (
    firstName === '' ||
    lastName === '' ||
    telephone === '' ||
    address === '' ||
    email === ''
  ) {
    return;
  }

  $('.contacts__row').append(`<div class="details__contact">
          <div class="avatar">
            <span
              class="
                avatar avatar-lg-32
                badge-secondary
                rounded-circle
                text-light
                p-1
              "
              >${firstName[0]}${lastName[0]}</span
            >
          </div>
          <div class="contact__name">${firstName} ${lastName}</div>
          <div class="contact__mobile">${telephone}</div>
          <div class="contact__email">${email}</div>
          <div class="contact__address">${address}</div>
            
          <button class="btn__icon delete__btn">
            <i class="fas fa-trash-alt"></i>
          </button>
          <button class="btn__icon edit__btn">
            <i class="far fa-edit"></i>
          </button>
        </div>`);
  // delete
  $('.delete__btn').click(function (e) {
    console.log(e);
    $(this).parent('div').remove();
  });

  formClear();
};

// clear form
const formClear = function () {
  $('#inputFirstName').val('');
  $('#inputLastName').val('');
  $('#inputTelephone').val('');
  $('#inputAddress').val('');
  $('#inputEmail').val('');
};
// add btn
$('.save-btn').click((e) => {
  e.preventDefault();
  createContact();
});

// update
