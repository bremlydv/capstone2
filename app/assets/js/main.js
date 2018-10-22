$(document).ready(()=>{




	 /*[ remove top notification ]
    ===========================================================*/
    $('.btn-remove-top-noti').on('click', ()=>{
    	$('.btn-remove-top-noti').parent().remove();
    })


    $('.hamburger').on('click', function(){
        $('.hamburger').toggleClass('is-active');
    });








});