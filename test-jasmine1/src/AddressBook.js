function AddressBook() {
  let contacts = []
  this.addContact = function(thisContact){
    contacts.push(thisContact);
  };
  this.getContact = function(i){
    return contacts[i];
  }
}
