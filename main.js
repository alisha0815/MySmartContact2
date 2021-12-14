$(document).ready(function () {});

let contacts = [];

// fetch json data
// async function getData(url) {
//   const res = await fetch(url);
//   const contacts = await res.json();
//   console.log(contacts);
//   // populate contact rows
//   for (const contact of contacts) {
//     console.log(contact);
//     displayContactList(contact);
//   }
// }

// getData('data.json');

contacts = [
  {
    id: 0,
    firstName: 'Allie',
    lastName: 'Greve',
    telephone: '98702781',
    address: 'Reistadhagen 140, Nesbru',
    email: 'allie98@gmail.com',
  },
  {
    id: 1,
    firstName: 'Tora',
    lastName: 'Martin',
    telephone: '47943890',
    address: 'Drangedalsgata 138, Skien',
    email: 'toramartin@gmail.com',
  },
  {
    id: 2,
    firstName: 'Embla',
    lastName: 'Gudmund',
    telephone: '9611098',
    address: 'Holmstubben 84, Jessheim',
    email: 'mund90@gmail.com',
  },
];

// display json data
const displayContactList = () => {
  for (contact of contacts) {
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
              >${contact.firstName[0]}${contact.lastName[0]}</span
            >
          </div>
          <div class="contact__name">${contact.firstName} ${contact.lastName}</div>
          <div class="contact__mobile">${contact.telephone}</div>
          <div class="contact__email">${contact.email}</div>
          <div class="contact__address">${contact.address}</div>
          <button class="btn__icon delete__btn">
            <i class="fas fa-trash-alt"></i>
          </button>
          <button class="btn__icon edit__btn">
            <i class="far fa-edit"></i>
          </button>
        </div>`);
  }
};

// delete
// $('.delete__btn').click(function (e) {
//   console.log(e);
//   $(this).parent('div').remove();
// });

// $('.edit__btn').click(function (e) {
//   // console.log(e);
//   console.log('hey update');
// });

// add new contact
$('.add__btn').click(function (e) {
  console.log(e);
  $('.simple-modal').css('display', 'block').show();
});

$('.close-modal').click(() => $('.simple-modal').css('display', 'none'));

const createContact = function () {
  // new contact input field
  const newId = Date.now();
  const firstName = $('#inputFirstName').val();
  const lastName = $('#inputLastName').val();
  const telephone = $('#inputTelephone').val();
  const address = $('#inputAddress').val();
  const email = $('#inputEmail').val();

  let newObj = {};
  newObj = {
    id: newId,
    firstName: firstName,
    lastName: lastName,
    telephone: telephone,
    address: address,
    email: email,
  };

  contacts.push(newObj);
  console.log(contacts);

  if (
    firstName === '' ||
    lastName === '' ||
    telephone === '' ||
    address === '' ||
    email === ''
  ) {
    return;
  }
  formClear();
};

// const onClickSave = function () {
//   $('.save-btn').click((e) => {
//     e.preventDefault();
//     displayContactList();
//   });
// };

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

// delete
// $('.delete__btn').click(function (e) {
//   console.log(e);
//   $(this).parent('div').remove();
// });

console.log('added', contacts);
// clear form
const formClear = function () {
  $('#inputFirstName').val('');
  $('#inputLastName').val('');
  $('#inputTelephone').val('');
  $('#inputAddress').val('');
  $('#inputEmail').val('');
};
// add btn

// delete
console.log('heyyyyy', contacts);
displayContactList();
