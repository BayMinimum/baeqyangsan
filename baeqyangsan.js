function bys_main(){
  var startInput = $('expect_start')
  var endInput = $('expect_end')
  function editable_and_remove_btn(input){
    if(input){
      input.removeAttr('readonly')
      input.next().remove()
    }
  }
  editable_and_remove_btn(startInput)
  editable_and_remove_btn(endInput)
}

window.onEventListener('load', bys_main)
window.frames[1].onEventListener('load', bys_main)
