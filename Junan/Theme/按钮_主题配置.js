function single_jnpluin_newWindow_init() {
  let base_search_js = 'hiker://files/rules/Junan/js/List_S.js';
  if (!fetch(base_search_js)) {
    writeFile(base_search_js, fetch('http://hiker.nokia.press/hikerule/rulelist.json?id=2042&auth=f7a1db09-73fa-5422-9a42-2326b515f9f7'));
  }
  eval(fetch(base_search_js).replace(base64Decode("QGpzOg=="), ""));
  return init_duanPluin()
}

[{
  title: "‘‘’’<span style='color:#1aad19'>🎐主题配置</span>",

  url: jnpluin_newWindow_init(),
  extra: { newWindow: true, windowId: 'home.duanpluin' },
  col_type: "scroll_button",
  //col_type:'icon_round_small_4', 
  //pic_url:'https://s3.ax1x.com/2021/02/22/y7wb9O.jpg'

}]