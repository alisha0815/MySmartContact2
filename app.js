'use strict';

// initial setup
const addBtn = $('.add__btn');
const saveBtn = $('.save-btn');
const deleteBtn = $('.delete__btn');
const editBtn = $('.edit__btn');
const searchBtn = $('.search__btn');
const searchInput = $('#searchQuery');
const addModal = $('.simple-modal');
const editModal = $('update-modal');
const closeModal = $('.close-modal');

const contacts = [];

class Contact {
  id = (Date.now() + '').slice(-10);

  constructor(firstName, lastName, telephone, address, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.telephone = telephone;
    this.address = address;
    this.email = email;
  }
}

//demo data
const contact1 = new Contact(
  'Allie',
  'Greve',
  '98702781',
  'Reistadhagen 140, Nesbru',
  'allie98@gmail.com'
);

const contact2 = new Contact(
  'Tora',
  'Martin',
  '47943890',
  'Drangedalsgata 138, Skien',
  'toramartin@gmail.com'
);

const contact3 = new Contact(
  'Embla',
  'Gudmund',
  '9611098',
  'Holmstubben 84, Jessheim',
  'mund90@gmail.com'
);

contacts.unshift(contact1, contact2, contact3);
console.log(contacts);

// Edit contacts
const onClickEdit = function () {
  // open edit modal
  $('.edit__btn').click(function (e) {
    e.preventDefault();
    // open the edit modal
    $('.update-modal').css('display', 'block').show();
    $('.close-modal').click(() => $('.update-modal').css('display', 'none'));

    // find the target ID
    const target = $(this).parent('div');
    const targetID = target[0].id;
    console.log('target id', targetID);

    // find the target id
    const [newArr] = contacts.filter((ele) => ele.id === targetID);

    console.log('newArr', newArr);
    console.log(newArr.firstName);

    // fill in the preinput
    const editFirstName = newArr.firstName;
    const editLastName = newArr.lastName;
    const editTelephone = newArr.telephone;
    const editAddress = newArr.address;
    const editEmail = newArr.email;

    console.log(
      editFirstName,
      editLastName,
      editTelephone,
      editAddress,
      editEmail
    );
    // pre input for edit modal
    $('#update-inputFirstName').val(editFirstName);
    $('#update-inputLastName').val(editLastName);
    $('#update-inputTelephone').val(editTelephone);
    $('#update-inputAddress').val(editAddress);
    $('#update-inputEmail').val(editEmail);

    // update

    console.log(
      'updated firstname',
      (newArr.firstName = $('#update-inputFirstName').text())
    );
  });
};

// update click
const onClickUpdate = function () {
  $('.update-save-btn').click((e) => {
    e.preventDefault();
    console.log(e);
  });
};

onClickUpdate();

// capitalize first letter of name
const capitalizeFirstLetter = function (name) {
  return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
};

// clear form
const formClear = function () {
  $('#inputFirstName').val('');
  $('#inputLastName').val('');
  $('#inputTelephone').val('');
  $('#inputAddress').val('');
  $('#inputEmail').val('');
};

// Delete contacts
const onClickDelete = function () {
  $('.delete__btn').click(function (e) {
    // e.preventDefault();
    const target = $(this).parent('div');

    // console.log(target[0].id);
    const targetID = target[0].id;
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].id === targetID) {
        contacts.splice(i, 1);
      }
    }
    console.log(contacts);
    // displayContactList();
    $(this).parent('div').remove();
  });
};

// Display contact list
const displayContactList = (contacts) => {
  // console.log(contacts);
  let htmlStr = '';
  for (const contact of contacts) {
    htmlStr += `<div class="details__contact" id=${contact.id}>
          <div class="avatar">
            <span
              class="
                avatar avatar-lg-32
                badge-secondary
                rounded-circle
                text-light
                p-1
              "
              >${contact.firstName[0]}${contact.lastName[0]}</span
            >
          </div>
          <div class="contact__name">${capitalizeFirstLetter(
            contact.firstName
          )} ${capitalizeFirstLetter(contact.lastName)}</div>
          <div class="contact__mobile">${contact.telephone}</div>
          <div class="contact__email">${contact.email}</div>
          <div class="contact__address">${contact.address}</div>
          <button class="btn__icon delete__btn" >
            <i class="fas fa-trash-alt"></i>
          </button>
          <button class="btn__icon edit__btn">
            <i class="far fa-edit"></i>
          </button>
        </div>`;
    $('.contacts__row').html(htmlStr);
    onClickDelete();
    onClickEdit();
  }
};

// Add new contact
const onClickAdd = function () {
  addBtn.click(function (e) {
    e.preventDefault();
    // add modal
    addModal.css('display', 'block').show();
    closeModal.click(() => addModal.css('display', 'none'));
  });
};

const onClickSave = function () {
  saveBtn.click((e) => {
    e.preventDefault();
    const inputFirstName = $('#inputFirstName').val();
    const inputLastName = $('#inputLastName').val();
    const inputTel = $('#inputTelephone').val();
    const inputAddress = $('#inputAddress').val();
    const inputEmail = $('#inputEmail').val();

    const newContact = new Contact(
      inputFirstName,
      inputLastName,
      inputTel,
      inputAddress,
      inputEmail
    );

    console.log(newContact);

    if (
      inputFirstName === '' ||
      inputLastName === '' ||
      inputTel === '' ||
      inputAddress === '' ||
      inputEmail === ''
    ) {
      return;
    } else {
      contacts.unshift(newContact);
      formClear();
      displayContactList(contacts);
      console.log('added', contacts);
    }
  });
};

console.log(contacts);
// Search
const searchContact = function () {
  searchInput.keyup(function (e) {
    // console.log(e.target.value);
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);
    const filteredContacts = contacts.filter((contact) => {
      return (
        contact.firstName.toLowerCase().includes(searchString) ||
        contact.lastName.toLowerCase().includes(searchString)
      );
    });
    console.log(filteredContacts);
    displayContactList(filteredContacts);
  });
};

onClickEdit();
onClickSave();
onClickAdd();
displayContactList(contacts);
searchContact();
