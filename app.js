// set api url
let apiURL = 'apiURL';

// set auth header for http requests
Vue.http.headers.common['X-Auth-Token'] = 'X-Auth-Token';


new Vue({

    el: '#app',

    data: {
        fullContacts: ["fullContacts"],
        searchContacts: ["searchContacts"],
        showId: -1,
        query: ''
    },

    created: function() {
        this.getContacts();
    },

    watch: {
        // whenever query changes, this function will run
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