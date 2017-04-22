$(function(){

  var $users = $("#userlist");
  // page elements

  var source   = $("#user-item").html();
  var templateFn = Handlebars.compile(source); //returns a function

  console.log('before api call');
  $.ajax({
    method: 'GET',
    url: 'http://jsonplaceholder.typicode.com/users'

  }).done(function(users){
    console.log('Users: ', users);

    users.forEach(function(user){
      var newHTML = templateFn(user);
      $("#userlist").append(newHTML);
    });
    $('#userlist').DataTable({
      //I was trying to show only 3 rows so we can see the pagination however I did not manage
      //Problem I think is this: running DataTable before pulling data will show me 'No data available in table' as value
      //in the table followed by actual data.
      //When I run .DataTable after appending the data to the table it's not showing me this message.
      //however doing that modification of pagination to only show 3 rows (instead of the 10 default ones from DataTable)
      //will not work anymore as I think the reason is that the data has been pulled already at this stage and it's too
      //late to modify.
      //As the API only has 10 users I cannot see if the pagination is actually working

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

});
