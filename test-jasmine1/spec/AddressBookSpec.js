describe('AddressBook', function() {

  var addressBook,
    contact,

  beforeEach(function() {
    addressBook = new AddressBook();
    contact = new Contact();
  });

  it('should be able to add a contact', function() {

    addressBook.addContact('Joe');

    expect(addressBook.getContact(0)).toBe('Joe');
  });
  it('should be able to delete a contact', function() {

    addressBook.addContact('Joe');
    addressBook.deleteContact(0);

    expect(addressBook[0]).not.toBeDefined();
  });
}); // describe

// BROKEN done() piece confusing
// describe("Async Address Book", function() {
//   var addressBook = new AddressBook();
//   beforeEach(function(done) {
//     addressBook.getInitialContacts(function() {
//       done();
//     });
//   }); //beforeEach
//   it('should grab initial contacts', function(done) {
//     expect(addressBook.initialComplete).toBe(true);
//     done();
//   });
// });
