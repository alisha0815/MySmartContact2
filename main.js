$(document).ready(function () {});

let contacts = [];
let index;

const contactsKey = 'contacts';

// save array of contacts to local storage
// const saveContacts = function () {
//   localStorage.setItem(contactsKey, JSON.stringify(contacts));
// };

// fetch json data
async function getData(url) {
  const res = await fetch(url);
  contacts = await res.json();
  console.log('new way', contacts);
  // populate contact rows
  for (const contact of contacts) {
    console.log(contact);
    displayContactList(contact);
  }
  index = contacts.length - 1;
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

  // update
  $('.edit__btn').click(function (e) {
    let selectedRow = $(this).parents();
    console.log(selectedRow);
    $('.update-modal').css('display', 'block').show();
  });
  $('.close-modal').click(() => $('.update-modal').css('display', 'none'));
};

// add new contact
$('.add__btn').click(function (e) {
  console.log(e);
  $('.simple-modal').css('display', 'block').show();
});

$('.close-modal').click(() => $('.simple-modal').css('display', 'none'));

const createContact = function () {
  // let id;
  // new contact input field
  const newFirstName = $('#inputFirstName').val();
  const newLastName = $('#inputLastName').val();
  const newTelephone = $('#inputTelephone').val();
  const newAddress = $('#inputAddress').val();
  const newEmail = $('#inputEmail').val();

  const newContact = {
    id: Date.now(),
    firstName: newFirstName,
    lastName: newLastName,
    telephone: newTelephone,
    address: newAddress,
    email: newEmail,
  };

  console.log(newContact);
  contacts.push(newContact);
  // saveContacts(); // to put the arrays to the local storage
  console.log('new contact added', contacts);

  if (
    newFirstName === '' ||
    newLastName === '' ||
    newTelephone === '' ||
    newAddress === '' ||
    newEmail === ''
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
              >${newFirstName[0]}${newLastName[0]}</span
            >
          </div>
          <div class="contact__name">${newFirstName} ${newLastName}</div>
          <div class="contact__mobile">${newTelephone}</div>
          <div class="contact__email">${newEmail}</div>
          <div class="contact__address">${newAddress}</div>
            
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

  // update
  $('.edit__btn').click(function (e) {
    let selectedRow = $(this).parents();
    console.log(selectedRow);
    $('.update-modal').css('display', 'block').show();
  });
  $('.close-modal').click(() => $('.update-modal').css('display', 'none'));

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

console.log('added', contacts);
// const savedContacts = localStorage.getItem(contactsKey);

// if (savedContacts !== null) {
//   const parsedContacts = JSON.parse(savedContacts);
//   // contacts = parsedContacts;
//   parsedContacts.forEach(createContact);
// }
