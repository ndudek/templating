$(function(){

  var $users = $("#userlist");
  // page elements

  var source   = $("#user-item").html();
  var templateFn = Handlebars.compile(source); //returns a function

  console.log('before api call');
  $.ajax({
    method: 'GET',
    url: 'http://jsonplaceholder.typicode.com/users'
    // success: function(data){
    //   $('#userlist').DataTable({
    //     data: data,
    //     columns: [
    //       {'data': 'Name'},
    //       {'data': 'Email'}
    //     ]
    //   });
    // }

  }).done(function(users){
    console.log('Users: ', users);

    users.forEach(function(user){
      var newHTML = templateFn(user);
      $("#userlist").append(newHTML);
    });
    $('#userlist').DataTable({
      // iDisplayLength: 3,
      // lengthMenu: [3, 6, 9, 12],
      // users: users,
      // columns: [
      //   {'data': 'Name'},
      //   {'data': 'Email'}
      // ],
    });

  }).fail(function(err){
    console.log('Error: ', err);
  });

  //$('#paging').pagination({limit:5});
  //$('#paging').tablePaginate({navigateType:'full',recordPerPage:3});


  //$('#myTable').pageMe({pagerSelector:'#myPager',showPrevNext:true,hidePageNumbers:false,perPage:4});


  // $('#userlist').DataTable({
  //   order: [[ 0, "asc" ]],
  //   stateSave: true,
  //   //saved states when reloading page: https://datatables.net/examples/basic_init/state_save.html
  //   //For his exercise I've worked with bootstrap CSS framework
  //
  // });




});
