'use strict';

// initial setup

const addBtn = $('.add__btn');
const saveBtn = $('.save-btn');
const deletBtn = $('.delete__btn');
const addModal = $('.simple-modal');
const closeModal = $('.close-modal');

// demo data (the data could be fetched from data.json)
const contacts = [
  {
    id: '0',
    firstName: 'Allie',
    lastName: 'Greve',
    telephone: '98702781',
    address: 'Reistadhagen 140, Nesbru',
    email: 'allie98@gmail.com',
  },
  {
    id: '1',
    firstName: 'Tora',
    lastName: 'Martin',
    telephone: '47943890',
    address: 'Drangedalsgata 138, Skien',
    email: 'toramartin@gmail.com',
  },
  {
    id: '2',
    firstName: 'Embla',
    lastName: 'Gudmund',
    telephone: '9611098',
    address: 'Holmstubben 84, Jessheim',
    email: 'mund90@gmail.com',
  },
];

// Display data
const displayContactList = () => {
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
          <div class="contact__name">${contact.firstName} ${contact.lastName}</div>
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
  }
};

displayContactList();

// Add new contact
const onClickAdd = function () {
  addBtn.click(function (e) {
    e.preventDefault();
    // add modal
    addModal.css('display', 'block').show();
    closeModal.click(() => addModal.css('display', 'none'));
  });
};

onClickAdd();

// Create new contact
const createContact = function () {
  let newObj = {};
  const newId = Date.now();
  const inputFirstName = $('#inputFirstName').val();
  const inputLastName = $('#inputLastName').val();
  const inputTel = $('#inputTelephone').val();
  const inputAddress = $('#inputAddress').val();
  const inputEmail = $('#inputEmail').val();

  // check if input fields are empty (later more validation needs to be implemented)
  if (
    inputFirstName === '' ||
    inputLastName === '' ||
    inputTel === '' ||
    inputAddress === '' ||
    inputEmail === ''
  ) {
    return;
  } else {
    newObj = {
      id: newId,
      firstName: inputFirstName,
      lastName: inputLastName,
      telephone: inputTel,
      address: inputAddress,
      email: inputEmail,
    };
    console.log(newObj);
    contacts.push(newObj);
    console.log('added', contacts); // contacts populated
    newObj = {};
    formClear();
    onClickSave();
  }
};

// clear form
const formClear = function () {
  $('#inputFirstName').val('');
  $('#inputLastName').val('');
  $('#inputTelephone').val('');
  $('#inputAddress').val('');
  $('#inputEmail').val('');
};

// Save function
const onClickSave = function () {
  saveBtn.click((e) => {
    e.preventDefault();
    createContact();
    displayContactList();
  });
};

onClickSave();

// Delete contacts
// const delContact = function (id) {
//   const target = contacts.filter((contact) => contact.id === id);
//   contacts.splice(target, 1);
// };

// find the targeted item
// delete from the array
// display

$('.delete__btn').click(function (e) {
  console.log(e);
  const targetID =
    e.console; // $(this).parent('div').remove();
  console.log('hey deleted!');
});

console.log('deleted', contacts);
// onClickDelete();

// $(this).parent('div').remove();

// Edit contacts

// onClickSave();
// $('.contacts__row').append(`<div class="details__contact">
//         <div class="avatar">
//           <span
//             class="
//               avatar avatar-lg-32
//               badge-secondary
//               rounded-circle
//               text-light
//               p-1
//             "
//             >${firstName[0]}${lastName[0]}</span
//           >
//         </div>
//         <div class="contact__name">${firstName} ${lastName}</div>
//         <div class="contact__mobile">${telephone}</div>
//         <div class="contact__email">${email}</div>
//         <div class="contact__address">${address}</div>

//         <button class="btn__icon delete__btn">
//           <i class="fas fa-trash-alt"></i>
//         </button>
//         <button class="btn__icon edit__btn">
//           <i class="far fa-edit"></i>
//         </button>
//       </div>`);

// fetch json data
// async function getData(url) {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     contacts.push(data);
//     console.log(contacts);
//     // populate contact rows
//     for (const contact of contacts) {
//       console.log(contact);
//       // displayContactList(contact);
//     }
//   } catch (err) {
//     console.error(err);
//   }
// }

// console.log('data', contacts);
// getData('data.json');

// delete
// $('.delete__btn').click(function (e) {
//   console.log(e);
//   $(this).parent('div').remove();
// });

// $('.edit__btn').click(function (e) {
//   // console.log(e);
//   console.log('hey update');
// });

// // add btn

// // delete
// console.log('heyyyyy', contacts);
// displayContactList();
