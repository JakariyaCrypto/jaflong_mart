// slider

const swiper = new Swiper(".sliderHome", {
    spaceBetween: 50,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grapbCursor: true,
    effect: 'fade',
    navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    
    loop:true,
  });

  // end slider




// mobile profile
const mobile_profile_icon = document.getElementById('mobile-profile');
  mobile_profile_show = document.getElementById('mobile-profile-show');
      if(mobile_profile_icon){
        mobile_profile_icon.addEventListener('click', () => {
          mobile_profile_show.classList.toggle('active-mob-profile')
        })

      }


// mobile menu
const mobile_menu_icon = document.getElementById('mobile-icon');
  mobile_menu_show = document.getElementById('mobile-menu-show');
      if(mobile_menu_icon){
        mobile_menu_icon.addEventListener('click', () => {

          mobile_menu_icon.classList.toggle('desk-icon-active')
          mobile_menu_show.classList.toggle('active-mob-menu')
        })

      }




// mobile search
const serch_icon = document.getElementById('serch-icon');
  show_mobile_serch = document.getElementById('show-mobile-serch');
if(serch_icon){
  serch_icon.addEventListener('click', () => {
          show_mobile_serch.classList.toggle('active-mob-serch')
        })
      }

// product grid
var li_links = document.querySelectorAll('.pro-grid-view ul li i.fas');
var view_wraps = document.querySelectorAll('.view_wrap');
li_links.forEach(function(link){
  link.addEventListener("click", function(){
    li_links.forEach(function(item){
      item.classList.remove('grid_active')
    })

    link.classList.add('grid_active');

    var li_view = link.getAttribute('data-view');

    view_wraps.forEach(function(view){
      view.style.display = "none";
    })

    if (li_view == 'list-view') {
      document.querySelector("." + li_view).style.display = "flex"
    }else{
      document.querySelector("." + li_view).style.display = "flex"

    }
  })
})

// mobile dropdown

var mobile_drop_one = document.getElementById('mobile_drop_one');
var mobile_drop_two = document.getElementById('mobile_drop_two');
var menu_wrap_one = document.getElementById('menu_wrap_one');
var menu_wrap_two = document.getElementById('menu_wrap_two');
var menu_anlge = document.querySelector('.menu-angle-right');

 mobile_drop_one.addEventListener('click', () => {
    menu_wrap_two.classList.remove('active_menu_show')
    menu_wrap_one.classList.add('active_menu_show')
    menu_anlge.classList.remove('mobile-angle-active')
    menu_anlge.classList.add('mobile-angle-active')

  })

 mobile_drop_two.addEventListener('click', () => {
    menu_wrap_one.classList.remove('active_menu_show')
    menu_wrap_two.classList.add('active_menu_show')

  })

// advatage drop
var advantage_icon = document.getElementById('advantage_icon');
var advantage_show = document.getElementById('advantage_show');

advantage_icon.addEventListener('click', () => {
    advantage_show.classList.toggle('advantage_active')

  })


// dalivery drop
var delivery_icon = document.getElementById('delivery_icon');
var delivery_show = document.getElementById('delivery_show');

delivery_icon.addEventListener('click', () => {
    delivery_show.classList.toggle('delivery_active')

  })

// dalivery drop
var payment_icon = document.getElementById('payment_icon');
var payment_show = document.getElementById('payment_show');

payment_icon.addEventListener('click', () => {
    payment_show.classList.toggle('payment_active')

  })


// show cart profile dropdown when click cart icon mobile-profile-icon
// const profileIcon = document.getElementById('profile-icon'),
//      mobileProfileIcon = document.getElementById('mobile-profile-icon'),
//       profileDropDown = document.getElementById('profile-drop-down')

//       if(profileIcon){
//         profileIcon.addEventListener('click', () => {
//           profileDropDown.classList.toggle('active-profile-drop-down')
//         })
//       }
//        if(mobileProfileIcon){
//           mobileProfileIcon.addEventListener('click', () => {
//           profileDropDown.classList.toggle('active-profile-drop-down')
//         })
//       }
