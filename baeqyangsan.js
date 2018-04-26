function bys_main(){
  function clean(input){
    if(input){
      input.removeAttr('readonly onclick class style')
      input.attr('type', 'date')
      input.attr('min', input.attr('value'))
      next = input.next()
      if(next.is('img')) next.remove()
    }
  }
  clean($('input[name="expect_start"]'))
  clean($('input[name="expect_end"]'))
}

bys_main()
