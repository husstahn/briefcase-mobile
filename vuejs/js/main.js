var apiURL = 'https://fmsdev-ap-southeast-2-sydney.tahnsoftware.net/fmi/rest/api/auth/B00000'

/**
 * Actual demo
 */

var demo = new Vue({

  el: '#demo',

  data: {
    user: "alex@yourhostaddress.com", 
    password: "password", 
    layout: "Empty"
  },

  created: function () {
    this.fetchData()
  },

  watch: {
    currentBranch: 'fetchData'
  },

  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },

  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('POST', apiURL)
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(self.data);
      xhr.onload = function () {
        self.commits = JSON.parse(xhr.responseText)
        console.log(xhr.responseText)
      }
      xhr.send()
    }
  }
})