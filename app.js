// set api url
let apiURL = 'apiURL';

// set auth header for http requests
Vue.http.headers.common['X-Auth-Token'] = 'X-Auth-Token';

// contact item component
Vue.component('contact-item', {
  props: ['contact'],
  template: '<li>{{ contact.first_name }}</li>'
})

new Vue({

    el: '#app',

    data: {
        message: 'Contact Book',
        contacts: ["contacts"]
    },

    created: function() {
        this.getContacts();
    },

    methods: {

        getContacts: function() {
            this.$http.get(apiURL).then((response) => {
                this.$set(this.contacts, "contacts", response.body.data)
            });
        }
    }

})