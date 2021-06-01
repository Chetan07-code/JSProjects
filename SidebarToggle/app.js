//selecting classes needed

const sideBToggleBtn= document.querySelector('.sidebar-toggle')
const closeBtn= document.querySelector('.close-btn')
const sidebar= document.querySelector('.sidebar')


//Toggling the sidebar using navabar button
sideBToggleBtn.addEventListener('click',function(){
    // console.log(sidebar.classList);
    // if(sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('show-sidebar')
    // }else {
    //     sidebar.classList.add('show-sidebar')

    // }

    sidebar.classList.toggle('show-sidebar')
})


//closing the sidebar
closeBtn.addEventListener('click',function () {
    sidebar.classList.remove('show-sidebar')
})