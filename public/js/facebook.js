function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response){
  $('.facebookLogin').hide();
  $('#name').html('<h1>' + response.name + '</h1>');
  $('#facebookPhoto #photo').attr("src", "https://www.facebook.com/photo.php?fbid=1123101514379075&set=a.149588008397102.22795.100000377111871&type=3&source=11");
}

