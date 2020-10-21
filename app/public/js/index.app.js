var app = new Vue({
  el: '#commentsPage',
  data: {
    comments:[{
      id:'',
      commentText:''
    }],
    newComments: {
      commentText:''
    }
  },
  methods: {
    fetchComments(){
      fetch('api/comments/')
      .then( response => response.json() )
      .then( json => {
        this.comments = json;
        console.log(this.comments)});
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
         this.comments.push(json[0]);
         this.newComments = this.newCommentsData();
      });
        console.log("hello :)");
        console.log(this.newComments);
     },
     newCommentsData() {
       return {
         commentText:''
       }
     }
},
 created() {
  this.fetchComments();
 }
});
