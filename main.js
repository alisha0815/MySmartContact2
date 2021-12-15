'use strict';

// initial setup

const addBtn = $('.add__btn');
const saveBtn = $('.save-btn');
const deleteBtn = $('.delete__btn');
const editBtn = $('.edit__btn');
const addModal = $('.simple-modal');
const editModal = $('update-modal');
const closeModal = $('.close-modal');

let contacts = [];
// let contactsTwo = [];
// // demo data (the data could be fetched from data.json)
contacts = [
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

console.log(contacts);

// clear form
const formClear = function () {
  $('#inputFirstName').val('');
  $('#inputLastName').val('');
  $('#inputTelephone').val('');
  $('#inputAddress').val('');
  $('#inputEmail').val('');
};

// Edit contacts
const onClickEdit = function () {
  // open edit modal
  $('.edit__btn').click(function (e) {
    // open the edit modal
    $('.update-modal').css('display', 'block').show();
    $('.close-modal').click(() => $('.update-modal').css('display', 'none'));

    // find the target ID
    const target = $(this).parent('div');
    const targetID = target[0].id;
    console.log(targetID);

    // find the contact with the target ID in the array of contacts
    // fill in the preinput
    let [newArr] = contacts.filter((ele) => ele.id === targetID);
    console.log('newArr', newArr);
    console.log(newArr.firstName);

    let editFirstName = newArr.firstName;
    let editLastName = newArr.lastName;
    let editTelephone = newArr.telephone;
    let editAddress = newArr.address;
    let editEmail = newArr.email;

    console.log(
      editFirstName,
      editLastName,
      editTelephone,
      editAddress,
      editEmail
    );

    editFirstName = $('#inputFirstName').val();
    $('#inputLastName').val(editLastName);
    $('#inputTelephone').val(editTelephone);
    $('#inputAddress').val(editAddress);
    $('#inputEmail').val(editEmail);
  });

  formClear();
};

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
    onClickDelete();
    onClickEdit();
  }
};

// Delete contacts
const onClickDelete = function () {
  $('.delete__btn').click(function (e) {
    // console.log(e);
    const target = $(this).parent('div');

    // console.log(target[0].id);
    const targetID = target[0].id;
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].id === targetID) {
        contacts.splice(i, 1);
      }
      // displayContactList();
    }
    console.log(contacts);
    displayContactList();
    // $(this).parent('div').remove();
  });
};

displayContactList();

console.log('initial contacts', contacts);

// Create new contact
const createContact = function () {
  let newObj = {};
  const newId = Date.now();
  const inputFirstName = $('#inputFirstName').val();
  const inputLastName = $('#inputLastName').val();
  const inputTel = $('#inputTelephone').val();
  const inputAddress = $('#inputAddress').val();
  const inputEmail = $('#inputEmail').val();

  newObj = {
    id: newId,
    firstName: inputFirstName,
    lastName: inputLastName,
    telephone: inputTel,
    address: inputAddress,
    email: inputEmail,
  };
  console.log(newObj);

  formClear();
  onClickSave();
  if (
    inputFirstName === '' ||
    inputLastName === '' ||
    inputTel === '' ||
    inputAddress === '' ||
    inputEmail === ''
  ) {
    return;
  } else {
    contacts.push(newObj);
    console.log('added', contacts); // contacts populated
  }
};

// console.log('after', contactsTwo);
// Save function
const onClickSave = function () {
  saveBtn.click((e) => {
    e.preventDefault();
    createContact();
    displayContactList();
  });
};

// Add new contact
const onClickAdd = function () {
  addBtn.click(function (e) {
    e.preventDefault();
    // add modal
    addModal.css('display', 'block').show();
    closeModal.click(() => addModal.css('display', 'none'));
  });
  createContact();
};

onClickAdd();
displayContactList();

// console.log('deleted', contacts);

// eidtContact();
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

// fetch data
// async function getData(url) {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
//     contacts = data;
//     console.log(contacts);
//     // populate contact rows
//     for (const contact of contacts) {
//       console.log(contact);
//       let htmlStr = '';
//       for (const contact of contacts) {
//         htmlStr += `<div class="details__contact" id=${contact.id}>
//           <div class="avatar">
//             <span
//               class="
//                 avatar avatar-lg-32
//                 badge-secondary
//                 rounded-circle
//                 text-light
//                 p-1
//               "
//               >${contact.firstName[0]}${contact.lastName[0]}</span
//             >
//           </div>
//           <div class="contact__name">${contact.firstName} ${contact.lastName}</div>
//           <div class="contact__mobile">${contact.telephone}</div>
//           <div class="contact__email">${contact.email}</div>
//           <div class="contact__address">${contact.address}</div>
//           <button class="btn__icon delete__btn" >
//             <i class="fas fa-trash-alt"></i>
//           </button>
//           <button class="btn__icon edit__btn">
//             <i class="far fa-edit"></i>
//           </button>
//         </div>`;
//         $('.contacts__row').html(htmlStr);
//         onClickDelete();
//       }
//     }
//   } catch (err) {
//     console.error(err);
//   }
// }

// console.log('totalllll', contacts);
// getData('data.json');
