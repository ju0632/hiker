function single_jnpluin_newWindow_init(){
    let local_js = 'hiker://files/rules/Junan/js/Menu_Theme_Fixed.js';
    let online_js = 'http://hiker.nokia.press/hikerule/rulelist.json?id=2143&auth=9687d210-730c-5d83-af05-773f5ab00df6'
    if(!fetch(local_js)){
        writeFile(local_js,fetch(online_js));
    }
    eval(fetch(local_js).replace(base64Decode("QGpzOg=="),""));
    return init_JunanPluin()
}

[{
    title:"‘‘’’<span style='color:#1aad19'>🎯按钮</span>",

 
    url:single_jnpluin_newWindow_init(),
    extra:{newWindow: true,windowId:'home.Junanpluin'},
    col_type:"scroll_button",
    //col_type:'icon_round_small_4', 
    //pic_url:'https://s3.ax1x.com/2021/02/22/y7wb9O.jpg'
}];