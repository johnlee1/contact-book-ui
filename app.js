// set api url
let apiURL = 'apiURL';

// set auth header for http requests
Vue.http.headers.common['X-Auth-Token'] = 'X-Auth-Token';

// register modal component
Vue.component('modal', {
    template: '#modal-template',
    props: ['fname','lname','cname','address','city','state','zip','phone','workphone','email','website'],
    methods: {
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

var vm = new Vue({

    el: '#app',

    data: {
        fullContacts: ["fullContacts"],
        searchContacts: ["searchContacts"],
        showId: -1,
        query: '',
        showModal: false,
    },

    created: function() {
        this.getContacts();
    },

    watch: {
        // whenever search query changes, this function will run
        query: function (newQuery) {
            this.search(newQuery)
        }
    },

    methods: {

        showContact: function(showId, contactId) {
            if (showId == contactId) {
                this.showId = -1;
            } else {
                this.showId = contactId;
            }
        },

        getContacts: function() {
            this.$http.get(apiURL).then((response) => {
                this.$set(this.searchContacts, "searchContacts", response.body.data);
                this.$set(this.fullContacts, "fullContacts", response.body.data);
            });
        },

        search: function (query) {
                contacts = [];
                for (i=0; i<this.fullContacts[0].length;i++) {
                    contact = JSON.stringify(this.fullContacts[0][i]).toLowerCase();
                    if (contact.indexOf(query.toLowerCase()) > -1) {
                        contacts.push(this.fullContacts[0][i])
                    }
                }
                this.searchContacts = [contacts];
            }
        
    }

})