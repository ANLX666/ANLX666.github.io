function handleSearch(){ 
  var name = document.getElementById("search-txt").value ; 
  if (name == '') { 
    alert('宝贝，请输入你要搜索的内容！')
  }
  else 
  window.location.href= `https://www.baidu.com/s?wd=${name}&rsv_spt=1&rsv_iqid=0xc4c521710004198f&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_dl=tb&rsv_enter=0&rsv_sug3=10&rsv_sug1=1&rsv_sug7=100&rsv_btype=i&inputT=1112&rsv_sug4=1220`
}