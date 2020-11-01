var app = new Vue({
  el: '#certifications',
  data:{
    certificationList: [],
    activeCertification: {},
    positionList: [],
    newCertification:{},
    certificationByPerson: []
  },

  created(){
    this.fetchCertification();

  },

  methods: {

    fetchCertification: function(){
      fetch('api/records/view_certifications.php')
      .then(response => response.json())
      .then(data => {
        this.certificationList = data;
        console.log(data);


      });
    },

    fetchCertificationByPerson(){
      fetch('api/records/view_certs_by_person.php',{
        method: 'POST',
        body: JSON.stringify(this.activeCertification),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

      .then(response => response.json())
      .then(data => {
        this.certificationByPerson = data;
        console.log(data);

      });
      console.log("creating (POSTing)...!");
      console.log(this.activeCertification);
    },

    editCertification(){
      fetch('api/records/edit_certification.php',{
        method: 'POST',
        body: JSON.stringify(this.activeCertification),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

      console.log("creating (POSTing)...!");
      console.log(this.activeCertification);
    },



    newCertificationData(){
      return {
        certificationName: "",
        certificationAgency:"",
        defaultExpiration:""
      }
    },


    createCertification(){
      fetch('api/records/update_certification.php',{
        method: 'POST',
        body: JSON.stringify(this.newCertification),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

      console.log("creating (POSTing)...!");
      console.log(this.newCertification);
    },






    fetchPosition: function(){
      fetch('api/records/view_positions.php')
      .then(response => response.json())
      .then(data => {
        this.positionList = data;
        console.log(data);


      });
    },



    deleteCertification(){
      fetch('api/records/delete_certification.php',{
        method: 'POST',
        body: JSON.stringify(this.activeCertification),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

      console.log("creating (POSTing)...!");
      console.log(this.activeCertification);
    },

    fetchMember: function(){
      fetch('api/records/view_certifications.php')
      .then(response => response.json())
      .then(data => {
        this.certificationList = data;
        console.log(data);



      });
    }
  }
})
