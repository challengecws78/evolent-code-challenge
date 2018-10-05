export default (contacts, { sort, searchText }) => {
    // the db should always handle this
   return contacts.filter((contact) => {
        if ( searchText !== '') {
            const email = contact.email.toLowerCase()
            const text = searchText.toLowerCase()
            const n = email.match(text)
    
            if(n != null) {
                return true
            }
        } else {
            return contact;
        }        
    }).sort((a, b) => {
        if (sort === 'asc') {
            return a.firstName.localeCompare(b.firstName);
        } else if (sort === 'desc') {
            return b.firstName.localeCompare(a.firstName);
        }
    });

}