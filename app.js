// set api url
let apiURL = 'apiURL';

// set auth header for http requests
Vue.http.headers.common['X-Auth-Token'] = 'X-Auth-Token';

// add contact modal component
Vue.component('modal', {
    template: '#modal-template',
    props: ['fname','lname','cname','address','city','state','zip','phone','workphone','email','website'],
    methods: {
        // api call to add contact
        addContact: function() {
            body = {"first_name": this.fname,
                    "last_name": this.lname,
                    "company_name": this.cname,
                    "address": this.address,
                    "city": this.city,
                    "state": this.state,
                    "zip": this.zip,
                    "phone": this.phone,
                    "work_phone": this.workphone,
                    "email": this.email,
                    "url": this.website};
            this.$http.post(apiURL, body).then((result) => {
                vm.getContacts();
            });
        },
    }
})

// update contact modal component
Vue.component('update-modal', {
    template: '#update-modal-template',
    props: ['contact'],
    methods: {
        // api call to update contact 
        updateContact: function() {
            body = {"first_name": this.contact.first_name,
                    "last_name": this.contact.last_name,
                    "company_name": this.contact.company_name,
                    "address": this.contact.address,
                    "city": this.contact.city,
                    "state": this.contact.state,
                    "zip": this.contact.zip,
                    "phone": this.contact.phone,
                    "work_phone": this.contact.work_phone,
                    "email": this.contact.email,
                    "url": this.contact.url};
            this.$http.put(apiURL + '/' + vm.contact.id, body).then((response) => {});
        },
    }
})

// delete contact modal component
Vue.component('delete-modal', {
    template: '#delete-modal-template',
    methods: {
        // api call to delete contact 
        deleteContact: function() {
            this.$http.delete(apiURL + '/' + vm.contact.id).then((response) => {
                vm.getContacts();
                vm.contact.show = false;
            });
        },
    }
})

var vm = new Vue({

    el: '#app',

    data: {
        fullContacts: ["fullContacts"], // list of all contacts
        searchContacts: ["searchContacts"], // list of contacts from search query
        query: '', // search query 
        showAddModal: false, // toggle add contact modal
        showDeleteModal: false, // toggle delete contact modal
        showUpdateModal: false, // toggle update contact modal
        contact: { 
            show: false,
            id: null,
            first_name: null,
            last_name: null,
            company_name: null,
            address: null,
            city: null,
            state: null,
            zip: null,
            phone: null,
            work_phone: null,
            email: null,
            url: null
        }
    },

    created: function() {
        this.getContacts();
    },

    watch: {
        // whenever search query changes, this function will run
        query: function(newQuery) {
            this.search(newQuery)
        }
    },

    methods: {

        // api call to get list of contacts 
        getContacts: function() {
            this.$http.get(apiURL).then((response) => {
                this.$set(this.searchContacts, "searchContacts", response.body.data);
                this.$set(this.fullContacts, "fullContacts", response.body.data);
            });
        },

        // select specific contact to display information
        selectContact: function(contact) {
            this.contact.id = contact.id;
            this.contact.first_name = contact.first_name;
            this.contact.last_name = contact.last_name;
            this.contact.company_name = contact.company_name;
            this.contact.address = contact.address;
            this.contact.city = contact.city;
            this.contact.state = contact.state;
            this.contact.zip = contact.zip;
            this.contact.phone = contact.phone;
            this.contact.work_phone = contact.work_phone;
            this.contact.email = contact.email;
            this.contact.url = contact.url;
            this.contact.show = true;
        },

        // search through contacts based on query
        search: function(query) {
                contacts = [];
                for (i=0; i<this.fullContacts[0].length;i++) {
                    contact = JSON.stringify(this.fullContacts[0][i]).toLowerCase();
                    if (contact.indexOf(query.toLowerCase()) > -1) {
                        contacts.push(this.fullContacts[0][i])
                    }
                }
                this.searchContacts = [contacts];
        },
    }

})