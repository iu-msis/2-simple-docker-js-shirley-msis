var app = new Vue({
  el: '#commentsPage',
  data: {
    comments:[{
      id:'',
      commentText:''
    }],
    newComments: {
      id:'',
      commentText:''
    }
  },
  methods: {
    fetchComments(){
      fetch('api/comments/index.php')
      .then( response => response.json() )
      .then( json => {
        this.comments = json;
        console.log(this.comments);
      });
      },
     createComments(){
       fetch('api/comments/create.php', {
         method:'POST',
         body: JSON.stringify(this.newComments),
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
       })
       .then( response => response.json() )
       .then( json => {
         console.log("Returned from post:", json);
         this.comments = json;
         this.newComments = this.newCommentsData();
      });
        console.log("hello :)");
        console.log(this.newComments);
     },
     newCommentsData() {
       return {
         id:'',
         commentText:''
       }
     }
},
 created() {
  this.fetchComments();
 }
});
